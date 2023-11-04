
import {joinClz} from "@/robin-js/utils";
import {ReactNode} from "react";

type CommonProp = {
    children: ReactNode;
    className:string
}

export   function FlexBar({children, className = ""}: CommonProp)
{
    return (
        <div className={joinClz("flex flex-row items-center", className)}>
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