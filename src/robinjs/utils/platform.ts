import { useState, useEffect } from 'react'
import UAParser from 'ua-parser-js'

type Platform = {
    is: {
        ios: boolean,
        android: boolean,
        windowsPhone: boolean,
        mac: boolean,
        windows: boolean,
        linux: boolean,
        ipad: boolean,
        kindle: boolean,
        silk: boolean,
        blackberry: boolean,
        firefox: boolean,
        electron: boolean,
        capacitor: boolean,
        cordova: boolean,
        vivaldi: boolean,
        edge: boolean,
        opera: boolean
    },
    has: {
        touch: boolean,
        webStorage: boolean,
        webGL: boolean,
        serviceWorker: boolean,
        cookies: boolean,
        indexedDB: boolean
    },
    version: string
}


function usePlatformDetector(): Platform {
    const [platform, setPlatform] = useState<Platform>({
        is: {
            ios: false,
            android: false,
            windowsPhone: false,
            mac: false,
            windows: false,
            linux: false,
            ipad: false,
            kindle: false,
            silk: false,
            blackberry: false,
            firefox: false,
            electron: false,
            capacitor: false,
            cordova: false,
            vivaldi: false,
            edge: false,
            opera: false
        },
        has: {
            touch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
            webStorage: false,
            webGL: !!window.WebGLRenderingContext,
            serviceWorker: 'serviceWorker' in navigator,
            cookies: false,
            indexedDB: 'indexedDB' in window
        },
        version: '0'
    })

    useEffect(() => {
        const parser = new UAParser()
        parser.setUA(navigator.userAgent)

        const result = parser.getResult()

        const is = {
            ios: result.os.name === 'iOS',
            android: result.os.name === 'Android',
            windowsPhone: result.os.name === 'Windows Phone',
            mac: result.os.name === 'Mac OS',
            windows: result.os.name === 'Windows',
            linux: result.os.name === 'Linux',
            firefox: result.browser.name === 'Firefox',
            electron: result.engine.name === 'Electron',
            capacitor: (window as any).Capacitor !== void 0,
            cordova: (window as any)._cordovaNative !== void 0 || (window as any).cordova !== void 0,
            vivaldi: result.browser.name === 'Vivaldi',
            edge: result.browser.name === 'Edge',
            opera: result.browser.name === 'Opera',
            ipad: result.device.model === 'iPad',
            kindle: result.device.vendor === 'Amazon' && result.device.model === 'Kindle',
            silk: result.browser.name === 'Silk',
            blackberry: result.device.vendor === 'BlackBerry'
        }

        const version = result.browser.version || '0'

        let hasCookies = false
        try {
            document.cookie = 'cookietest=1'
            hasCookies = document.cookie.indexOf('cookietest=') !== -1
            document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT'
        } catch (e) { }

        let hasWebStorage = false
        try {
            if (window.localStorage) {
                hasWebStorage = true
            }
        } catch (e) { }

        setPlatform({
            is,
            has: {
                ...platform.has,
                cookies: hasCookies,
                webStorage: hasWebStorage,
            },
            version,
        })
    }, [])

    return platform
}

export default usePlatformDetector
