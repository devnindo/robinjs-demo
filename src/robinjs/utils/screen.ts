import {atom, useAtom} from 'jotai'
import {useEffect} from 'react'

type ScreenSize = {
    width: number,
    height: number,
    name: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    sizes: {
        sm: number,
        md: number,
        lg: number,
        xl: number
    },
    lt: {
        sm: boolean,
        md: boolean,
        lg: boolean,
        xl: boolean
    },
    gt: {
        xs: boolean,
        sm: boolean,
        md: boolean,
        lg: boolean
    },
    xs: boolean,
    sm: boolean,
    md: boolean,
    lg: boolean,
    xl: boolean
}

const screenSizeAtom = atom<ScreenSize>({
    width: 0,
    height: 0,
    name: 'xs',
    sizes: {
        sm: 600,
        md: 1024,
        lg: 1440,
        xl: 1920
    },
    lt: {
        sm: true,
        md: true,
        lg: true,
        xl: true
    },
    gt: {
        xs: false,
        sm: false,
        md: false,
        lg: false
    },
    xs: true,
    sm: false,
    md: false,
    lg: false,
    xl: false
})

function useScreenSize() {
    console.log('initializing screen')


    const [screenSize, setScreenSize] = useAtom(screenSizeAtom)

    useEffect(() => {
        function detect() {
            const width = window.innerWidth
            const height = window.innerHeight

            const is = {
                xs: width < screenSize.sizes.sm,
                sm: width >= screenSize.sizes.sm && width < screenSize.sizes.md,
                md: width >= screenSize.sizes.md && width < screenSize.sizes.lg,
                lg: width >= screenSize.sizes.lg && width < screenSize.sizes.xl,
                xl: width >= screenSize.sizes.xl
            }

            let name: ScreenSize['name']

            if (is.xs) {
                name = 'xs'
            } else if (is.sm) {
                name = 'sm'
            } else if (is.md) {
                name = 'md'
            } else if (is.lg) {
                name = 'lg'
            } else {
                name = 'xl'
            }

            setScreenSize((prev: ScreenSize) => ({
                ...prev,
                width,
                height,
                name,
                lt: {
                    sm: width < screenSize.sizes.sm,
                    md: width < screenSize.sizes.md,
                    lg: width < screenSize.sizes.lg,
                    xl: width < screenSize.sizes.xl
                },
                gt: {
                    xs: width >= screenSize.sizes.sm,
                    sm: width >= screenSize.sizes.md,
                    md: width >= screenSize.sizes.lg,
                    lg: width >= screenSize.sizes.xl
                },
                ...is
            }))
        }

        window.addEventListener('resize', detect)
        detect()

        return () => {
            window.removeEventListener('resize', detect)
        }
    }, [screenSize, setScreenSize])

    return screenSize
}

export default useScreenSize
