import {ReactElement} from "react";



type ElementMap = {
    [key:string] : (object) => ReactElement
}

let elmMap:ElementMap;

export function registerElmMap(elmMap$: { appLogo: (object) => ReactElement })
{
    if(elmMap === undefined)
        elmMap = elmMap$;
    else throw new Error("Element Map can only be registered during boot-time");
}

export function resolveElm(name:string)
{
    return elmMap[name]
}

