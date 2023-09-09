type ScreenSize = {
    width: number
    height: number
    name: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    sizes: {
        sm: number
        md: number
        lg: number
        xl: number
    }
    lt: {
        sm: boolean
        md: boolean
        lg: boolean
        xl: boolean
    }
    gt: {
        xs: boolean
        sm: boolean
        md: boolean
        lg: boolean
    }
    xs: boolean
    sm: boolean
    md: boolean
    lg: boolean
    xl: boolean
}

class ScreenSizeManager {
    private static instance: ScreenSizeManager | null = null;

    private screenSize: ScreenSize = {
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
    };

    private subscribers: Array<(screenSize: ScreenSize) => void> = [];

    private constructor() {
        this.detect = this.detect.bind(this)
        window.addEventListener('resize', this.detect)
        this.detect()
    }

    static getInstance(): ScreenSizeManager {
        if (!ScreenSizeManager.instance) {
            ScreenSizeManager.instance = new ScreenSizeManager()
        }
        return ScreenSizeManager.instance
    }

    private detect(): void {
        const width = window.innerWidth
        const height = window.innerHeight

        const is = {
            xs: width < this.screenSize.sizes.sm,
            sm: width >= this.screenSize.sizes.sm && width < this.screenSize.sizes.md,
            md: width >= this.screenSize.sizes.md && width < this.screenSize.sizes.lg,
            lg: width >= this.screenSize.sizes.lg && width < this.screenSize.sizes.xl,
            xl: width >= this.screenSize.sizes.xl
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

        this.screenSize = {
            ...this.screenSize,
            width,
            height,
            name,
            lt: {
                sm: width < this.screenSize.sizes.sm,
                md: width < this.screenSize.sizes.md,
                lg: width < this.screenSize.sizes.lg,
                xl: width < this.screenSize.sizes.xl
            },
            gt: {
                xs: width >= this.screenSize.sizes.sm,
                sm: width >= this.screenSize.sizes.md,
                md: width >= this.screenSize.sizes.lg,
                lg: width >= this.screenSize.sizes.xl
            },
            ...is
        }

        this.notify()
    }

    subscribe(callback: (screenSize: ScreenSize) => void): () => void {
        this.subscribers.push(callback)
        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== callback)
        }
    }

    private notify(): void {
        for (const callback of this.subscribers) {
            callback(this.screenSize)
        }
    }
}

export default ScreenSizeManager.getInstance()
