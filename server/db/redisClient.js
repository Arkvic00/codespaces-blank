import { createClient } from 'redis';

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
const REDIS_TTL_SECONDS = parseInt(process.env.REDIS_TTL_SECONDS || '300', 10);

export const redisClient = createClient({ url: REDIS_URL });

redisClient.on('error', (error) => {
  console.error('Redis Client Error:', error);
});

export async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
}

export async function getCache(key) {
  if (!redisClient.isOpen) return null;
  const cached = await redisClient.get(key);
  return cached ? JSON.parse(cached) : null;
}

export async function setCache(key, value, ttl = REDIS_TTL_SECONDS) {
  if (!redisClient.isOpen) return;
  await redisClient.set(key, JSON.stringify(value), { EX: ttl });
}
