import cookie from './cookie'
import platform from './platform'
import screen from './screen/screen'
import localStorage from './storage/local-storage'
import sessionStorage from './storage/session-storage'
import {registerElmMap, resolveElm} from "./app-util";

const formatClz = (...nameList) =>
{
    return nameList.join(" ");
}

export {
    cookie,
    screen,
    platform,
    localStorage,
    sessionStorage,
    formatClz,
    registerElmMap,
    resolveElm
}

