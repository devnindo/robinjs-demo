import { compress, decompress } from 'lz-string'

class LocalStorageManager {
    private static instance: LocalStorageManager | null = null;

    private constructor() { }

    static getInstance(): LocalStorageManager {
        if (!LocalStorageManager.instance) {
            LocalStorageManager.instance = new LocalStorageManager()
        }
        return LocalStorageManager.instance
    }

    get(key: string): string | null {
        const compressed = localStorage.getItem(key)
        if (compressed) {
            return decompress(compressed)
        }
        return null
    }

    set(key: string, value: string): void {
        const compressed = compress(value)
        localStorage.setItem(key, compressed)
    }

    delete(key: string): void {
        localStorage.removeItem(key)
    }

    has(key: string): boolean {
        return localStorage.getItem(key) !== null
    }

    getAll(): Record<string, string> {
        const entries: Record<string, string> = {}
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i) as string
            const compressedValue = localStorage.getItem(key) as string
            entries[key] = decompress(compressedValue) as string
        }
        return entries
    }
}

export default LocalStorageManager.getInstance()
