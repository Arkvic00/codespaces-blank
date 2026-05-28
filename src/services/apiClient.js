// API Configuration
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const API_ENDPOINTS = {
  MEDICAMENTOS: '/api/medicamentos',
  MEDICAMENTOS_BUSCAR: '/api/medicamentos/buscar',
  MEDICAMENTOS_GRUPO: '/api/medicamentos/grupo',
  MEDICAMENTOS_ESPECIE: '/api/medicamentos/especie',
  MEDICAMENTOS_ESPECIES: '/api/medicamentos/especies/listar',
};

class APIClient {
  async request(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;
    const controller = new AbortController();
    const timeout = options.timeout ?? 5000;
    const requestOptions = {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };
    const timer = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        const text = await response.text();
        let errorBody = null;
        try { errorBody = JSON.parse(text) } catch (_) { errorBody = { error: { message: text || response.statusText } } }
        throw new Error(errorBody.error?.message || `API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      if (error.name === 'AbortError') {
        throw new Error('API request timed out');
      }
      throw error;
    } finally {
      clearTimeout(timer);
    }
  }

  async getMedicamentos(limit = 100, offset = 0) {
    return this.request(`${API_ENDPOINTS.MEDICAMENTOS}?limit=${limit}&offset=${offset}`);
  }

  async getMedicamento(id) {
    return this.request(`${API_ENDPOINTS.MEDICAMENTOS}/${id}`);
  }

  async getMedicamentoResumen(id) {
    return this.request(`${API_ENDPOINTS.MEDICAMENTOS}/${id}/resumen`);
  }

  async buscarMedicamentos(query, limit = 20) {
    return this.request(`${API_ENDPOINTS.MEDICAMENTOS_BUSCAR}?q=${encodeURIComponent(query)}&limit=${limit}`);
  }

  async getMedicamentosPorEspecie(especieId, limit = 50) {
    return this.request(`${API_ENDPOINTS.MEDICAMENTOS_ESPECIE}/${especieId}?limit=${limit}`);
  }

  async getMedicamentosPorGrupo(grupo, limit = 50) {
    return this.request(`${API_ENDPOINTS.MEDICAMENTOS_GRUPO}?grupo=${encodeURIComponent(grupo)}&limit=${limit}`);
  }

  async getEspecies() {
    return this.request(API_ENDPOINTS.MEDICAMENTOS_ESPECIES);
  }

  async validarMedicamento(medicamento) {
    return this.request(`${API_ENDPOINTS.MEDICAMENTOS}/validar`, {
      method: 'POST',
      body: JSON.stringify(medicamento),
    });
  }

  async getHealth() {
    return this.request('/health');
  }
}

export default new APIClient();
