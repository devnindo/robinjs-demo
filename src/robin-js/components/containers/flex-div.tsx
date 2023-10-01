import {formatClz} from "@robin/utils";
import {ReactNode} from "react";

const RULE_MAP = {
    start : "justify-start",
    end : "justify-end",
    center: "justify-center",
    between: "justify-between"
}

const elmBuilder = (rule) => ({children, className = ""}) => {
        const justifyRule = RULE_MAP[rule];

        return (<div className={formatClz("flex items-center", justifyRule, className)}>
            {children}
        </div>)
}

export default {
    Start : elmBuilder('start'),
    End: elmBuilder('end'),
    Center: elmBuilder('center'),
    Between: elmBuilder('between')
}

