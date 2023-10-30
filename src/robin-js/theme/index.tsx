import {createContext, useContext} from 'react'
import defaultTheme from "./default-theme";
import ThemeConfig from "./theme-df";


export const ThemeContext = createContext(defaultTheme);

function mergeConfig(configA, configB)
{
    let mergedConfig:ThemeConfig = {};

    // what if provided config is not given => undefined

    for(const key in configA)
    {
        let configVal = configB[key];
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
        merged = mergeConfig(defaultTheme, config);
    else merged = defaultTheme;

    return (<ThemeContext.Provider  value={merged}>{children}</ThemeContext.Provider >)

}

