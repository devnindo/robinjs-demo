import {createContext, useContext} from 'react'
import defaultTheme from "./default-theme";
import ThemeDef from "./theme-df";


export const ThemeContext = createContext<ThemeDef>(defaultTheme);

function mergeTheme(themeA, themeB)
{
    let mergedConfig:ThemeDef = {};

    // what if provided config is not given => undefined

    for(const key in themeA)
    {
        let configVal = themeB[key];
        if(configVal)
        {
            mergedConfig[key] = {...defaultTheme[key], ...configVal}
        }
        else
            mergedConfig[key] = defaultTheme[key];
    }
}

export const useRobinThemeContext = ()=>
{
    return useContext(ThemeContext);
}

export function RobinThemeProvider({config, children})
{
    let merged = undefined;
    if(config)
        merged = mergeTheme(defaultTheme, config);
    else merged = defaultTheme;

    return (<ThemeContext.Provider  value={merged}>{children}</ThemeContext.Provider >)

}

