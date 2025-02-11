export interface CacheEntry {
    value: any;
    timestamp: number;
}

export interface ApiResponse<T> {
    data: T;
    status: number;
}

export class ApiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ApiError';
    }
}

export interface AyahResponse {
    text: string;
    surah_name: string;
    ayah_num: number;
}

export interface HadithResponse {
    hadith: string;
    book: string;
    number: number;
}