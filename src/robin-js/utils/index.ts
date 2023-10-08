import cookie from './cookie'
import platform from './platform'
import screen from './screen/screen'
import localStorage from './storage/local-storage'
import sessionStorage from './storage/session-storage'

const joinClz = (...nameList) =>
{
    return nameList.join(" ");
}

export {
    cookie,
    screen,
    platform,
    localStorage,
    sessionStorage,
    joinClz,
}

