
import {joinClz} from "@/robin-js/utils";


export   function FlexBar({children, className})
{
    return (
        <div className={joinClz("flex flex-row items-center")}>
            {children}
        </div>
    )
}
export function GrowSpace()
{
    return (<div className="grow"></div>)
}


const RULE_MAP = {
    start : "justify-start",
    end : "justify-end",
    center: "justify-center",
    between: "justify-between"
}

export function FlexDiv({align = 'start', children, className = ""}) {
    const justifyRule = RULE_MAP[align];

    return (<div className={joinClz("flex items-center", justifyRule, className)}>
        {children}
    </div>)
}