import {joinClz} from "@/robin-js/utils";
import {Base, FlexGrid} from "@/robin-js/components";


export default function PageFooter()
{
    return (<Base className="text-white p-4 py-16 bg-gradient-to-r bg-purple-800 bg-indigo-600">
        <FlexGrid>
            <div className="text-grey-7">
                <div className="font-bold q-mb-xs">CONTACT US</div>
                <div className="text-caption"> 166/1 Mirpur Road, Kalabagan, Dhaka 1205  </div>
                <div className="text-caption"> admin@peddlecloud.com</div>
                <div className="text-caption"><strong>TIN</strong> : 597794677903</div>
            </div>
            <div>
                <div>Blog</div>
                <div>Twitter</div>
                <div>LinkedIn</div>
                <div>Social Responsibility</div>
            </div>

        </FlexGrid>
    </Base>);
}