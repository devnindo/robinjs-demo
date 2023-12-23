
import {
    Base,
    TextRegular,
    TitleH1,
    TextBig,
    TextCaption,
    TitleH2,
    TitleH3, TitleBig, CloudGradient, FlexBar
} from "@robin/components"
import {useRobinThemeContext} from "@/robin-js/theme";
import SectionPlatform from "@/main/home/section-platform";
import SectionDB from "@/main/home/section-db";
import SectionTestimonial from "@/main/home/section-testimonial"
import PageFooter from "@/main/home/page-footer"

export default function Home({header, footer, page}) {
    const theme = useRobinThemeContext()

    return (<div >
            <Base className="">
                <FlexBar className="justify-between p-4">
                    <img className="w-44" src="/app-logo.png"></img>
                    <button className="bg-indigo-600 shadow-indigo-200 shadow-sm py-2 px-4 text-white shape-capsule rounded-sm font-medium hover:bg-indigo-500 transition-all">
                        Contact Us
                    </button>
                </FlexBar>
                 <div className="p-4 sm:px-24 sm:py-20">
                     {/*<TitleBig className="text-center font-normal">
                         <span className="text-slate-100  ">Peddle</span>
                         <CloudGradient >Cloud</CloudGradient>
                     </TitleBig>*/}
                     <TitleH1 className="mt-8 text-center pb-2">
                        High-quality Secured Software that scale
                     </TitleH1>
                     <TextBig className="text-gray-500 mt-4">
                         PeddleCloud design and develop mobile apps, web platforms and experiences. We work with an array of clients, from global brands and big enterprise to innovative startups and funded ventures.
                     </TextBig>
                 </div>

                <SectionPlatform className="p-4" />
                <SectionDB className="p-4 sm:px-24 sm:py-20" />
                <SectionTestimonial className="p-4 sm:py-16"/>
            </Base>
            <PageFooter  />
        </div>
        /*PeddleCloud Home*/
        
    );
}