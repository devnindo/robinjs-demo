



import {joinClz} from "@/robin-js/utils";


export  function Base({children, className})
{
    return (
        <div className={joinClz("w-full h-full px-4 md:px-0", className)}>
            <div className="w-full md:w-10/12 lg:w-8/12 h-full mx-auto">{children}</div>
        </div>
    );


}

export function FlexGrid({children})
{
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {children}
        </div>
    )
}