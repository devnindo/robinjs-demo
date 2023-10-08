

import {Base, FlexDiv} from "@robin/components";
import React from "react";


const emptyDivList = function (count)  {
    let divList = []
    for(let idx = 0; idx < count; idx++)
    {
        const emptyDiv = <div className="w-full py-10 bg-amber-300"> DIV-{idx} </div>
        divList.push(emptyDiv);
    }

    return divList
}

export default function Activity({header, footer, page}) {

    return (
        /*Activity ROOT*/
        <div className="activity w-full h-full bg-gray-50">
            <div className="activity-header w-full h-14 bg-white fixed shadow-black-100 shadow-lg">
                <Base>
                    <FlexDiv.Between  className="space-x-4 h-full bg-amber-50">
                        <AppLogo  />
                         <div className="w-12"><button>NAV 1</button></div>
                    </FlexDiv.Between>
                </Base>
             </div>
            <div className="activity-page pt-14">
                <Base className="bg-blue-50">
                    <div className="flex flex-col gap-4 py-4">
                         {emptyDivList(10)}
                    </div>
                </Base>
            </div>
        </div>
    )
}