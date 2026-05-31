import { createClient } from 'redis';

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
const REDIS_TTL_SECONDS = parseInt(process.env.REDIS_TTL_SECONDS || '300', 10);
const REDIS_DISABLED = process.env.REDIS_DISABLED === 'true' || REDIS_URL === 'disabled' || REDIS_URL === 'false' || REDIS_URL === '';

export const redisClient = REDIS_DISABLED
  ? null
  : createClient({
      url: REDIS_URL,
      socket: {
        reconnectStrategy: (retries) => {
          if (retries >= 5) return new Error('Redis reconnection limit reached');
          return Math.min(retries * 50, 500);
        }
      }
    });

if (redisClient) {
  redisClient.on('error', (error) => {
    console.error('Redis Client Error:', error);
  });
}

export async function connectRedis() {
  if (REDIS_DISABLED || !redisClient) return false;
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
  return true;
}

export async function getCache(key) {
  if (REDIS_DISABLED || !redisClient?.isOpen) return null;
  const cached = await redisClient.get(key);
  return cached ? JSON.parse(cached) : null;
}

export async function setCache(key, value, ttl = REDIS_TTL_SECONDS) {
  if (REDIS_DISABLED || !redisClient?.isOpen) return;
  await redisClient.set(key, JSON.stringify(value), { EX: ttl });
}
