import { CacheEntry } from '../types';

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

class Cache {
    private static instance: Cache;
    private cache: Map<string, CacheEntry> = new Map();

    private constructor() {}

    static getInstance(): Cache {
        if (!Cache.instance) {
            Cache.instance = new Cache();
        }
        return Cache.instance;
    }

    set(key: string, value: any): void {
        this.cache.set(key, {
            value,
            timestamp: Date.now()
        });
    }

    get(key: string): any | null {
        const entry = this.cache.get(key);
        if (!entry) return null;

        if (Date.now() - entry.timestamp > CACHE_DURATION) {
            this.cache.delete(key);
            return null;
        }

        return entry.value;
    }

    clear(): void {
        this.cache.clear();
    }
}

export default Cache.getInstance();