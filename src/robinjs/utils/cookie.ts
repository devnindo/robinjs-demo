function useCookie() {
    const getCookie = (name: string): string | null => {
        const value = "; " + document.cookie
        const parts = value.split("; " + name + "=")
        if (parts.length === 2) return parts.pop()?.split(";").shift() || null
        return null
    }

    const setCookie = (name: string, value: string, days?: number, path?: string, domain?: string, secure?: boolean) => {
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

    const deleteCookie = (name: string, path?: string, domain?: string) => {
        setCookie(name, "", -1, path, domain)
    }

    const hasCookie = (name: string): boolean => {
        return getCookie(name) !== null
    }

    const getAllCookies = (): Record<string, string> => {
        const cookies: Record<string, string> = {}
        const cookieArray = document.cookie.split(';')

        cookieArray.forEach(cookieStr => {
            const parts = cookieStr.split('=')
            if (parts.length === 2) {
                cookies[parts[0].trim()] = parts[1].trim()
            }
        })

        return cookies
    }

    return {
        get: getCookie,
        set: setCookie,
        delete: deleteCookie,
        has: hasCookie,
        getAll: getAllCookies
    }
}

export default useCookie
