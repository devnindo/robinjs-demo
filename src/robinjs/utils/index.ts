import useCookie from './cookie'
import usePlatformDetector from './platform'
import useScreenSize from './screen'
import LocalStorage from './storage'


// const useRobinUtils = () => {
//     const cookie = useCookie()
//     const platform = usePlatformDetector()
//     const screen = useScreenSize()
//     const storage = LocalStorage()
//
//     return {
//         cookie,
//         platform,
//         screen,
//         storage
//     }
// }

export const cookie = useCookie
export const platform = usePlatformDetector

export {
    useScreenSize
}
export const storage = LocalStorage

