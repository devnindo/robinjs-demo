
type ThemeConfig = {

    color?: {
        action   : string; // and primary
        accent   : string; // selection
        success: string;
        danger  : string;
        info      : string; // blue, light-blue
        warning   : string; // amber
    },
    gradient?:
    {
        action: string;
        accent: string;
    },
    shape?:
    {
        button_radius: string | 'rounded' | 'round',
        card_radius: string | 'round'

    }
    text?:{
        title: string;
        scTitle:string;
        sscTitle: string;
        caption: string
    },
    /*shadow?:{}*/



}

export default ThemeConfig;