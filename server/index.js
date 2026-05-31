import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import medicamentosRouter from './routes/medicamentos.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';
import { connectRedis } from './db/redisClient.js';
import MedicamentosService from './db/medicamentosService.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(compression());
app.use(cors());
app.use(bodyParser.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/medicamentos', medicamentosRouter);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

async function startServer() {
  try {
    await MedicamentosService.init();
    console.log('✅ Base SQLite inicializada');
  } catch (error) {
    console.error('❌ No se pudo inicializar la base de datos SQLite:', error.message);
    process.exit(1);
  }

  const redisEnabled = process.env.REDIS_DISABLED !== 'true' && process.env.REDIS_URL !== 'disabled' && process.env.REDIS_URL !== 'false' && process.env.REDIS_URL !== '';

  if (redisEnabled) {
    try {
      await connectRedis();
      console.log('✅ Conexión Redis establecida');
    } catch (error) {
      console.warn('⚠️ No se pudo conectar a Redis; el caché no estará disponible:', error.message);
    }
  } else {
    console.log('⚠️ Redis deshabilitado; usando solo SQLite para todas las consultas.');
  }

  app.listen(PORT, () => {
    console.log(`\n✅ Backend API ejecutándose en http://localhost:${PORT}`);
    console.log(`📍 Endpoints disponibles:`);
    console.log(`   GET  /api/medicamentos`);
    console.log(`   GET  /api/medicamentos/:id`);
    console.log(`   GET  /api/medicamentos/buscar?q=term`);
    console.log(`   GET  /api/medicamentos/especie/:especie`);
    console.log(`   GET  /api/medicamentos/:id/resumen`);
    console.log(`   POST /api/medicamentos/validar`);
    console.log(`\n`);
  });
}

startServer();
