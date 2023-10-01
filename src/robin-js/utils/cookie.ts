class CookieManager {
    private static instance: CookieManager

    private constructor() { }

    static getInstance() {
        if (!CookieManager.instance) {
            CookieManager.instance = new CookieManager()
        }
        return CookieManager.instance
    }

    get(name: string): string | null {
        const value = "; " + document.cookie
        const parts = value.split("; " + name + "=")
        if (parts.length === 2) return parts.pop()?.split(";").shift() || null
        return null
    }

    set(name: string, value: string, days?: number, path?: string, domain?: string, secure?: boolean) {
        let cookie = name + "=" + value + ";"

        if (days) {
            const date = new Date()
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
            cookie += "expires=" + date.toUTCString() + ";"
        }

        if (path) {
            cookie += "path=" + path + ";"
        }

        if (domain) {
            cookie += "domain=" + domain + ";"
        }

        if (secure) {
            cookie += "secure;"
        }

        document.cookie = cookie
    }

    delete(name: string, path?: string, domain?: string) {
        this.set(name, "", -1, path, domain)
    }

    has(name: string): boolean {
        return this.get(name) !== null
    }

    getAll(): Record<string, string> {
        const cookies: Record<string, string> = {}
        const cookieArray = document.cookie.split(";")

        cookieArray.forEach(cookieStr => {
            const parts = cookieStr.split("=")
            if (parts.length === 2) {
                cookies[parts[0].trim()] = parts[1].trim()
            }
        })

        return cookies
    }
}

export default CookieManager.getInstance()
