import React from "react";


export default function List({children, caption, seperator = false, className=""})
{
    return (
        <div>
            <TextCaption>{caption}</TextCaption>
            <div className="flex flex-col gap-16 py-4 px-8">
                {children}
            </div>
        </div>

    );

}