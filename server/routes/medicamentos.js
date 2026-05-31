import express from 'express';
import MedicamentosService from '../db/medicamentosService.js';
import { getCache, setCache } from '../db/redisClient.js';

const router = express.Router();
const CACHE_TTL_SECONDS = parseInt(process.env.REDIS_TTL_SECONDS || '300', 10);

async function cachedResponse(key, computeFn) {
  try {
    const cached = await getCache(key);
    if (cached !== null) {
      return cached;
    }
  } catch (error) {
    console.warn('Redis cache read failed:', error.message);
  }

  const result = await computeFn();

  try {
    await setCache(key, result, CACHE_TTL_SECONDS);
  } catch (error) {
    console.warn('Redis cache write failed:', error.message);
  }

  return result;
}

/**
 * GET /api/medicamentos
 * Obtener lista de medicamentos (paginada)
 */
router.get('/', async (req, res, next) => {
  try {
    const limit = Math.min(parseInt(req.query.limit) || 100, 500);
    const offset = parseInt(req.query.offset) || 0;
    const cacheKey = `medicamentos:all:${limit}:${offset}`;
    
    const resultado = await cachedResponse(cacheKey, async () => MedicamentosService.getAll(limit, offset));
    
    res.json({
      success: true,
      data: resultado
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/medicamentos/especies
 * Obtener lista de especies disponibles
 */
router.get('/especies/listar', (req, res, next) => {
  try {
    const especies = MedicamentosService.getEspecies();
    res.json({
      success: true,
      data: {
        count: especies.length,
        especies: especies
      }
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/medicamentos/buscar?q=term
 * Buscar medicamentos por término
 */
router.get('/buscar', async (req, res, next) => {
  try {
    const term = req.query.q;
    const limit = Math.min(parseInt(req.query.limit) || 20, 100);
    
    if (!term) {
      return res.status(400).json({
        success: false,
        error: {
          status: 400,
          message: 'Parámetro "q" requerido para búsqueda'
        }
      });
    }

    const cacheKey = `medicamentos:buscar:${term.toLowerCase()}:${limit}`;
    const resultado = await cachedResponse(cacheKey, async () => MedicamentosService.search(term, limit));
    
    res.json({
      success: true,
      data: resultado
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/medicamentos/grupo?grupo=term
 * Buscar por grupo farmacológico
 */
router.get('/grupo', async (req, res, next) => {
  try {
    const grupo = req.query.grupo;
    const limit = Math.min(parseInt(req.query.limit) || 50, 200);
    
    if (!grupo) {
      return res.status(400).json({
        success: false,
        error: {
          status: 400,
          message: 'Parámetro "grupo" requerido'
        }
      });
    }

    const cacheKey = `medicamentos:grupo:${grupo.toLowerCase()}:${limit}`;
    const resultado = await cachedResponse(cacheKey, async () => MedicamentosService.getByGrupoFarmacologico(grupo, limit));
    
    res.json({
      success: true,
      data: resultado
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/medicamentos/especie/:especieId
 * Obtener medicamentos para una especie específica
 */
router.get('/especie/:especieId', async (req, res, next) => {
  try {
    const especieId = req.params.especieId;
    const limit = Math.min(parseInt(req.query.limit) || 50, 200);
    const cacheKey = `medicamentos:especie:${especieId.toLowerCase()}:${limit}`;
    
    const resultado = await cachedResponse(cacheKey, async () => MedicamentosService.getByEspecie(especieId, limit));
    
    res.json({
      success: true,
      data: resultado
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/medicamentos/:id/resumen
 * Obtener resumen de medicamento
 */
router.get('/:id/resumen', async (req, res, next) => {
  try {
    const cacheKey = `medicamentos:resumen:${req.params.id.toLowerCase()}`;
    const resumen = await cachedResponse(cacheKey, async () => MedicamentosService.getResumen(req.params.id));
    
    res.json({
      success: true,
      data: resumen
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/medicamentos/:id
 * Obtener medicamento específico por ID
 */
router.get('/:id', async (req, res, next) => {
  try {
    const cacheKey = `medicamentos:id:${req.params.id.toLowerCase()}`;
    const medicamento = await cachedResponse(cacheKey, async () => MedicamentosService.getById(req.params.id));
    
    res.json({
      success: true,
      data: medicamento
    });
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/medicamentos/validar
 * Validar estructura de un medicamento
 */
router.post('/validar', (req, res, next) => {
  try {
    const medicamento = req.body;
    
    if (!medicamento || typeof medicamento !== 'object') {
      return res.status(400).json({
        success: false,
        error: {
          status: 400,
          message: 'Body debe ser un objeto JSON válido'
        }
      });
    }

    const validacion = MedicamentosService.validarMedicamento(medicamento);
    
    res.json({
      success: validacion.valido,
      data: validacion
    });
  } catch (error) {
    next(error);
  }
});

export default router;
