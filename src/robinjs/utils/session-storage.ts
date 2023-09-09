import { compress, decompress } from 'lz-string'

interface StorageItem {
    value: string
    expirationDate?: number // timestamp in milliseconds
}

class SessionStorageManager {
    private static instance: SessionStorageManager | null = null;

    private constructor() { }

    static getInstance(): SessionStorageManager {
        if (!SessionStorageManager.instance) {
            SessionStorageManager.instance = new SessionStorageManager()
        }
        return SessionStorageManager.instance
    }

    get(key: string): string | null {
        const raw = sessionStorage.getItem(key)
        if (raw) {
            const item: StorageItem = JSON.parse(decompress(raw) as string)

            if (item.expirationDate && item.expirationDate < Date.now()) {
                this.delete(key)
                return null
            }

            return item.value
        }
        return null
    }

    set(key: string, value: string, ttl?: number): void { //ttl in miliseconds
        const item: StorageItem = {
            value: value
        }

        if (ttl) {
            item.expirationDate = Date.now() + ttl
        }

        const compressed = compress(JSON.stringify(item))
        sessionStorage.setItem(key, compressed)
    }

    delete(key: string): void {
        sessionStorage.removeItem(key)
    }

    has(key: string): boolean {
        return this.get(key) !== null
    }

    getAll(): Record<string, string> {
        const entries: Record<string, string> = {}
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i) as string
            const value = this.get(key)
            if (value !== null) {
                entries[key] = value
            }
        }
        return entries
    }
}

export default SessionStorageManager.getInstance()
