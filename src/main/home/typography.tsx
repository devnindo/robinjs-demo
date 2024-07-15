import {useRobinThemeContext} from "@/robin/theme";
import {Base, TextBig, TextRegular, TitleH1, TitleH2, TitleH3} from "@/robin/components";

export default function Home({header, footer, page}) {
    const theme = useRobinThemeContext()
    console.log(theme)
    return (<div>
            <Base className="bg-gray-100">
                <div className="p-8 sm:p-16   w-full sm:w-10/12  ">
                    <TitleH1>PeddleCloud - An enterprise solution provider</TitleH1>
                    <TextRegular>We will discuss our findings on typography</TextRegular>
                    <br/>
                    <TitleH2>This is a Section Title</TitleH2>
                    <TextRegular>
                        All of a sudden the white clown appeared. We all thought this is the end of everything.
                        but no! it has just begun and killing us all. So what do you think about it?
                        Am I going to make anything good ? An I good at all ?
                    </TextRegular>
                    <br/>
                    <TitleH3>This is a Sub-Section Title</TitleH3>
                    <TextRegular>
                        All of a sudden the white clown appeared. We all thought this is the end of everything.
                        but no! it has just begun and killing us all. So what do you think about it?
                        Am I going to make anything good ? An I good at all ?
                    </TextRegular>
                    <br/>

                    <TextBig className="font-bold">We build Software Service for Enterprise</TextBig>
                    <TextRegular>
                        All of a sudden the white clown appeared. We all thought this is the end of everything.
                        but no! it has just begun and killing us all. So what do you think about it?
                        Am I going to make anything good ? An I good at all ?
                    </TextRegular>
                </div>
            </Base>
        </div>
        /*PeddleCloud Home*/

    );
}