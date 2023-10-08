import ThemeConfig from "@/robin-js/theme/type-config";

const defaultConfig:ThemeConfig = {
    color: {
        action: 'indigo-700',
        accent: 'cyan-500',
        info: 'blue-500',
        success: 'emerald-600',
        warning: 'amber-400',
        danger: 'red-500',
    },
    /*gradient:
        {
            action: string;
            accent: string;
        },
    shape:
        {
            button_radius: string | 'rounded' | 'round',
            card_radius: string | 'round'

        }
    text:{
        title: string;
        scTitle:string;
        sscTitle: string;
        caption: string
    }*/
}

export default defaultConfig;