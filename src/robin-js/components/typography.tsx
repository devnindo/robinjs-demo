import {useRobinThemeContext} from "../theme";
import {joinClz} from "../utils";

const TextCaption = ({className, children})=>
{
    const theme = useRobinThemeContext();


    return (<div className={joinClz("text-sm", className)}>{children}</div>)
}

const TextRegular = ({className, children}) =>
{
    return (<p className={joinClz("text-base", className)}>{children}</p>)
}

const TextBig = ({className, children}) =>
{
    return (<div className={joinClz("text-lg", className)}>{children}</div>)
}

const TitleH1 = ({className, children}) =>
{
    return (<h1 className={joinClz("text-2xl font-bold", className)}>{children}</h1>)
}

const TitleH2 = ({className, children}) =>
{
    return (<h2 className={joinClz("text-xl font-bold", className)}>{children}</h2>)
}

const TitleH3 = ({className, children}) =>
{
    return (<h3 className={joinClz("text-lg font-bold", className)}>{children}</h3>)
}

export default {
    TextCaption, TextRegular, TextBig, TitleH1, TitleH2, TitleH3
}
