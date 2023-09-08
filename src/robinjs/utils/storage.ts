function LocalStorage() {
    const getStorage = (key: string): string | null => {
        return localStorage.getItem(key)
    }

    const setStorage = (key: string, value: string) => {
        localStorage.setItem(key, value)
    }

    const deleteStorage = (key: string) => {
        localStorage.removeItem(key)
    }

    const hasStorage = (key: string): boolean => {
        return localStorage.getItem(key) !== null
    }

    const getAllStorage = (): Record<string, string> => {
        const entries: Record<string, string> = {}
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i) as string
            entries[key] = localStorage.getItem(key) as string
        }
        return entries
    }

    return {
        get: getStorage,
        set: setStorage,
        delete: deleteStorage,
        has: hasStorage,
        getAll: getAllStorage
    }
}

export default LocalStorage
