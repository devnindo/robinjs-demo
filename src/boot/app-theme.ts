import resolveConfig from 'tailwindcss/resolveConfig'
import myConfig from './tailwind.config.js'

const tailwindConfig = resolveConfig(myConfig)

tailwindConfig.theme.colors