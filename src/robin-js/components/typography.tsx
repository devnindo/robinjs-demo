import {joinClz} from "../utils";

export function TextCaption({className, children})
{
    return (<div className={joinClz("text-sm text-gray-500", className)}>{children}</div>)
}

export function TextRegular({className, children})
{
    return (<p className={joinClz("text-lg", className)}>{children}</p>)
}

export function TextBig({className, children})
{
    return (<div className={joinClz("text-2xl", className)}>{children}</div>)
}

export function TitleH1({className, children})
{
    return (<h1 className={joinClz("text-5xl font-bold", className)}>{children}</h1>)
}

export function TitleBig({className, children})
{
    return (<h1 className={joinClz("text-6xl font-bold", className)}>{children}</h1>)
}

export function TitleH2 ({className, children})
{
    return (<h2 className={joinClz("text-3xl font-bold", className)}>{children}</h2>)
}

export function TitleH3({className, children})
{
    return (<h3 className={joinClz("text-xl font-bold", className)}>{children}</h3>)
}

export function CloudGradient({className, children})
{
    return (
        <span className={joinClz("bg-gradient-to-r from-cyan-400  to-green-400 inline-block text-transparent bg-clip-text", className)}>
            {children}
        </span>)
}
