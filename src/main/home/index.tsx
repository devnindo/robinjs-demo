import AppLogo from "@/commons/app-logo";
import {GrowSpace, Base, FlexBar} from "@/robin-js/components"
import {useRobinThemeContext} from "@/robin-js/theme";

export default function Home({header, footer, page}) {
    const theme = useRobinThemeContext()
     console.log(theme)
    return (<div>
            <Base className="bg-purple-800">
                <FlexBar className="h-16">
                    <div>PeddleCloud</div>
                    <GrowSpace />
                    <div>This that</div>
                </FlexBar>
            </Base>
        </div>
        /*PeddleCloud Home*/
        
    );
}