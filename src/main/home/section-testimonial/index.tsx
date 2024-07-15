import {Testimonial} from "./testomonial";
import {FlexGrid, TextBig, TextRegular, TitleH3} from "@/robin/components";


export default function Index({className})
{
    return (
        <div className={className}>
            <div className="text-center mb-16">
                <TitleH3 className="text-indigo-700 font-bold">Testimonial</TitleH3>
                <TextBig className="text-gray-500">We are working with amazing corporations to deliver the best</TextBig>
            </div>
            <FlexGrid>
                <Testimonial
                    quote="As part of digitization, We needed many ETL work on our existing data.
                PeddleCloud has helped us achieving this very smoothly with a neat deployment process"
                    fullName="Amir Faisal Mohammad Zakaria"
                    thumbSrc="/testimonial/amir-zakaria.png"
                    designation="EVP, Guardian Life Insurance Ltd."
                />
                <Testimonial
                    quote="Well managed database system is always an important part of our infrastructure.
                     PeddleCloud has helped us deploy a disaster proven, secured and scalable system."
                    fullName="Mohammad Aktaruzzaman"
                    thumbSrc="/testimonial/aktarazzuman.png"
                    designation="CFO, Markentile Life Insurance Ltd."
                />
            </FlexGrid>
        </div>


    )
}