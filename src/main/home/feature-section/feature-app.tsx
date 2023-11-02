import {joinClz} from "@/robin-js/utils";
import {TextRegular, TitleH3} from "@/robin-js/components";

export type ItemProp = {
    name : string,
    description: string,
    appImg: string,
    brColor:string,
    webLink:string
    appLink:string
}

export default function FeatureApp(prop: ItemProp)
{
    return (
        <div className={joinClz(prop.brColor, "p-6 w-full h-full text-gray-50")}>
            <div className="flex justify-center">
                <div className="w-64 h-84 overflow-hidden">
                    <img className="w-full h-full  rounded" src={prop.appImg} />
                </div>
            </div>
            <TitleH3 className="mt-4">{prop.name}</TitleH3>
            <TextRegular className="mt-2">{prop.description}</TextRegular>

        </div>
    );
}