import { db } from './sqliteClient.js';
import { DB_MEDICAMENTOS, SPECIES_LIST } from './medicamentos-data.js';

let READY_STATEMENTS = {};

const parseJson = (value) => {
  try {
    return value ? JSON.parse(value) : null;
  } catch (error) {
    return null;
  }
};

const normalizeMedication = (row) => ({
  id: row.id,
  color: row.color,
  meta_data: parseJson(row.meta_data),
  resumen_clinico: parseJson(row.resumen_clinico),
  informacion_cliente: parseJson(row.informacion_cliente),
  notas_administracion: parseJson(row.notas_administracion),
  interacciones_medicamentosas: parseJson(row.interacciones_medicamentosas),
  monitoreo_paciente: parseJson(row.monitoreo_paciente),
  interferencia_laboratorio: parseJson(row.interferencia_laboratorio),
  seguridad_y_alertas: parseJson(row.seguridad_y_alertas),
  farmacologia_clinica: parseJson(row.farmacologia_clinica),
  parametros_dosificacion: parseJson(row.parametros_dosificacion),
  presentaciones_comerciales: parseJson(row.presentaciones_comerciales),
  referencias: parseJson(row.referencias)
});

const buildSearchText = (med) => {
  const nombre = med.meta_data?.nombre_generico || '';
  const grupo = med.meta_data?.grupo_farmacologico || '';
  const marcas = (med.meta_data?.nombres_comerciales || []).join(' ');
  return [nombre, grupo, marcas].join(' ').toLowerCase();
};

let SAVE_STATEMENTS = {};

const prepareStatements = () => {
  if (READY_STATEMENTS.getAll) return;
  READY_STATEMENTS = {
    getAll: db.prepare('SELECT * FROM medicamentos ORDER BY id LIMIT ? OFFSET ?'),
    countAll: db.prepare('SELECT COUNT(*) AS count FROM medicamentos'),
    getById: db.prepare('SELECT * FROM medicamentos WHERE id = ?'),
    search: db.prepare('SELECT * FROM medicamentos WHERE search_text LIKE ? ORDER BY id LIMIT ?'),
    getByGrupo: db.prepare('SELECT * FROM medicamentos WHERE grupo LIKE ? ORDER BY id LIMIT ?'),
    getSpeciesMed: db.prepare('SELECT m.*, e.parametros_dosificacion FROM medicamentos m JOIN medicamento_especies e ON m.id = e.medicamento_id WHERE e.especie = ? ORDER BY m.id LIMIT ?'),
    countSpecies: db.prepare('SELECT COUNT(*) AS count FROM medicamento_especies WHERE especie = ?'),
    countByGroup: db.prepare('SELECT COUNT(*) AS count FROM medicamentos WHERE grupo LIKE ?')
  };

  SAVE_STATEMENTS = {
    saveMedicationRow: db.prepare(`
      INSERT OR REPLACE INTO medicamentos (
        id,
        color,
        meta_data,
        resumen_clinico,
        informacion_cliente,
        notas_administracion,
        interacciones_medicamentosas,
        monitoreo_paciente,
        interferencia_laboratorio,
        seguridad_y_alertas,
        farmacologia_clinica,
        parametros_dosificacion,
        presentaciones_comerciales,
        referencias,
        grupo,
        search_text
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `),

    saveEspecieRow: db.prepare(`
      INSERT OR REPLACE INTO medicamento_especies (
        medicamento_id,
        especie,
        parametros_dosificacion
      ) VALUES (?, ?, ?)
    `)
  };
};

const ensureSchema = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS medicamentos (
      id TEXT PRIMARY KEY,
      color TEXT,
      meta_data TEXT,
      resumen_clinico TEXT,
      informacion_cliente TEXT,
      notas_administracion TEXT,
      interacciones_medicamentosas TEXT,
      monitoreo_paciente TEXT,
      interferencia_laboratorio TEXT,
      seguridad_y_alertas TEXT,
      farmacologia_clinica TEXT,
      parametros_dosificacion TEXT,
      presentaciones_comerciales TEXT,
      referencias TEXT,
      grupo TEXT,
      search_text TEXT
    );

    CREATE TABLE IF NOT EXISTS medicamento_especies (
      medicamento_id TEXT,
      especie TEXT,
      parametros_dosificacion TEXT,
      PRIMARY KEY (medicamento_id, especie),
      FOREIGN KEY (medicamento_id) REFERENCES medicamentos(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_medicamentos_search ON medicamentos(search_text);
    CREATE INDEX IF NOT EXISTS idx_medicamento_especies_especie ON medicamento_especies(especie);
  `);
};

const seedDatabase = () => {
  const count = db.prepare('SELECT COUNT(*) AS count FROM medicamentos').get().count;
  if (count > 0) return;

  const insertTransaction = db.transaction((items) => {
    for (const med of items) {
      SAVE_STATEMENTS.saveMedicationRow.run(
        med.id,
        med.color || null,
        JSON.stringify(med.meta_data || {}),
        JSON.stringify(med.resumen_clinico || {}),
        JSON.stringify(med.informacion_cliente || []),
        JSON.stringify(med.notas_administracion || []),
        JSON.stringify(med.interacciones_medicamentosas || []),
        JSON.stringify(med.monitoreo_paciente || []),
        JSON.stringify(med.interferencia_laboratorio || []),
        JSON.stringify(med.seguridad_y_alertas || {}),
        JSON.stringify(med.farmacologia_clinica || {}),
        JSON.stringify(med.parametros_dosificacion || {}),
        JSON.stringify(med.presentaciones_comerciales || []),
        JSON.stringify(med.referencias || []),
        med.meta_data?.grupo_farmacologico || '',
        buildSearchText(med)
      );

      if (med.parametros_dosificacion) {
        Object.entries(med.parametros_dosificacion).forEach(([especie, dosis]) => {
          SAVE_STATEMENTS.saveEspecieRow.run(med.id, especie, JSON.stringify(dosis));
        });
      }
    }
  });

  insertTransaction(DB_MEDICAMENTOS);
};

export class MedicamentosService {
  static init() {
    ensureSchema();
    prepareStatements();
    seedDatabase();
  }

  static getAll(limit = 100, offset = 0) {
    const rows = READY_STATEMENTS.getAll.all(limit, offset);
    const total = READY_STATEMENTS.countAll.get().count;
    return {
      data: rows.map(normalizeMedication),
      total,
      limit,
      offset,
      hasMore: offset + limit < total
    };
  }

  static getById(id) {
    const row = READY_STATEMENTS.getById.get(id.toLowerCase());
    if (!row) {
      throw { status: 404, message: `Medicamento "${id}" no encontrado` };
    }
    return normalizeMedication(row);
  }

  static search(term, limit = 20) {
    if (!term || term.trim().length < 2) {
      throw { status: 400, message: 'Término de búsqueda debe tener al menos 2 caracteres' };
    }
    const termText = `%${term.toLowerCase()}%`;
    const rows = READY_STATEMENTS.search.all(termText, limit);
    return {
      query: term,
      results: rows.map(normalizeMedication),
      count: rows.length
    };
  }

  static getByEspecie(especieId, limit = 50) {
    const especie = especieId.toLowerCase();
    if (!SPECIES_LIST.find(s => s.id === especie)) {
      throw {
        status: 400,
        message: `Especie "${especieId}" no válida. Especies disponibles: ${SPECIES_LIST.map(s => s.id).join(', ')}`
      };
    }

    const rows = READY_STATEMENTS.getSpeciesMed.all(especie, limit);
    return {
      especie,
      count: READY_STATEMENTS.countSpecies.get(especie).count,
      medicamentos: rows.map(row => ({
        id: row.id,
        nombre_generico: parseJson(row.meta_data)?.nombre_generico || '',
        nombres_comerciales: parseJson(row.meta_data)?.nombres_comerciales || [],
        color: row.color,
        dosis: parseJson(row.parametros_dosificacion)
      }))
    };
  }

  static getEspecies() {
    return SPECIES_LIST;
  }

  static validarMedicamento(medicamento) {
    const errores = [];
    const camposRequeridos = ['id', 'color', 'meta_data', 'parametros_dosificacion', 'seguridad_y_alertas'];
    camposRequeridos.forEach(campo => {
      if (!medicamento[campo]) {
        errores.push(`Campo requerido faltante: ${campo}`);
      }
    });

    if (medicamento.meta_data) {
      const metaRequeridos = ['nombre_generico', 'nombres_comerciales', 'grupo_farmacologico', 'status_regulatorio'];
      metaRequeridos.forEach(campo => {
        if (!medicamento.meta_data[campo]) {
          errores.push(`meta_data: Campo requerido faltante: ${campo}`);
        }
      });
    }

    if (medicamento.parametros_dosificacion && Object.keys(medicamento.parametros_dosificacion).length === 0) {
      errores.push('parametros_dosificacion: Debe tener al menos una especie');
    }

    return {
      valido: errores.length === 0,
      errores
    };
  }

  static getResumen(id) {
    const med = this.getById(id);
    return {
      id: med.id,
      nombre: med.meta_data.nombre_generico,
      comerciales: med.meta_data.nombres_comerciales,
      grupo: med.meta_data.grupo_farmacologico,
      color: med.color,
      puntos_clave: med.resumen_clinico?.puntos_clave || [],
      contraindicaciones: med.seguridad_y_alertas?.contraindicaciones || [],
      efectos_adversos: med.seguridad_y_alertas?.efectos_adversos || [],
      especies_disponibles: Object.keys(med.parametros_dosificacion || {})
    };
  }

  static getByGrupoFarmacologico(grupo, limit = 50) {
    if (!grupo || grupo.trim().length < 2) {
      throw { status: 400, message: 'Grupo farmacológico debe tener al menos 2 caracteres' };
    }
    const groupTerm = `%${grupo.toLowerCase()}%`;
    const rows = READY_STATEMENTS.getByGrupo.all(groupTerm, limit);
    return {
      grupo,
      count: READY_STATEMENTS.countByGroup.get(groupTerm).count,
      medicamentos: rows.map(row => ({
        id: row.id,
        nombre_generico: parseJson(row.meta_data)?.nombre_generico || '',
        grupo: parseJson(row.meta_data)?.grupo_farmacologico || '',
        color: row.color
      }))
    };
  }
}

export default MedicamentosService;
