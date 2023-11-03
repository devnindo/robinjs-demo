import {FlexGrid, TextBig, TitleH2} from "@/robin-js/components";


export default function SectionDB({className})
{
    return (
        <div className={className}>
            <TitleH2 className="mt-8">
                We excel architecting with reliable Database Engine
            </TitleH2>
            <TextBig className="text-gray-500 mt-4">
                We have worked with some of the best known <span className="underline decoration-indigo-200">financial corporations</span> for
                data ETL and deployment of Highly-Available, disaster proven platform
            </TextBig>

            <FlexGrid>
                <figure className=" flex justify-center">
                    <img className="w-11/12" src="/work-brand/data-guard.png" />
                </figure>
                <figure className="flex items-center">
                    <img src="/work-brand/insurance-collection.png"/>
                </figure>
            </FlexGrid>
        </div>
    )
}