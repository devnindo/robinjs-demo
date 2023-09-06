import useCookie from './cookie'
import usePlatformDetector from './platform'
import useScreenSize from './screen'
import useLocalStorage from './storage'

const useRobinUtils = () => {
    const cookie = useCookie()
    const platform = usePlatformDetector()
    const screen = useScreenSize()
    const storage = useLocalStorage()

    return {
        cookie,
        platform,
        screen,
        storage
    }
}

export default useRobinUtils
