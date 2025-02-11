import cache from './cache';
import { ApiResponse, ApiError } from '../types';

const API_TIMEOUT = 10000; // 10 seconds
const MAX_RETRIES = 3;

export async function fetchWithRetry<T>(
    url: string,
    options: RequestInit = {},
    retries = MAX_RETRIES
): Promise<T> {
    const cacheKey = `${url}-${JSON.stringify(options)}`;
    const cachedData = cache.get(cacheKey);
    if (cachedData) return cachedData;

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new ApiError(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        cache.set(cacheKey, data);
        return data;
    } catch (error) {
        if (retries > 0 && error instanceof ApiError) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return fetchWithRetry(url, options, retries - 1);
        }
        throw error;
    }
}