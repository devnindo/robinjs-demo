import {formatClz} from "@robin/utils";


export default function Base({children, className})
{
     return (
        <div className={formatClz("w-full h-full px-4 md:px-0", className)}>
            <div className="w-full md:w-10/12 lg:w-8/12 h-full mx-auto">{children}</div>
        </div>);


}