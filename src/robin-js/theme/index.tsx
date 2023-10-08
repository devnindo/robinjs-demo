import {createContext, useContext} from 'react'
import defaultConfig from "@/robin-js/theme/default-config";
import ThemeConfig from "./type-config";


export const ThemeContext = createContext(defaultConfig);

function mergeConfig(configA, configB)
{
    let mergedConfig:ThemeConfig = {};

    // what if provided config is not given => undefined

    for(const key in configA)
    {
        let configVal = configB[key];
        if(configVal)
        {
            mergedConfig[key] = {...defaultConfig[key], ...configVal}
        }
        else
            mergedConfig[key] = defaultConfig[key];
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
        merged = mergeConfig(defaultConfig, config);
    else merged = defaultConfig;

    return (<ThemeContext.Provider  value={merged}>{children}</ThemeContext.Provider >)

}

