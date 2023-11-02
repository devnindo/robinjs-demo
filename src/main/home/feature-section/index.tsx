import {FlexGrid} from "@/robin-js/components";
import FeatureBrand from "@/main/home/feature-section/feature-brand";
import FeatureApp from "@/main/home/feature-section/feature-app";
import {Fragment} from "react";


export default function FeatureSection(){
    return (
        <FlexGrid>
            <FeatureApp
                name="Road to BCS, Bank Job and NTRCA"
                appImg="/work-brand/app-lojens.png"
                brColor="bg-emerald-600"
                description="
                    In Bangladesh, Each year around 2 million graduates take Govt job exam preparation.
                    PeddleCloud has developed platform Lojens (App and Web) for EdTech startup Strings Solution  to serve this huge market.
                 "
            />
            <FeatureApp
            name="Cycling companion app "
            appImg="/work-brand/app-pillar.png"
            brColor="bg-blue-600"
            description="PILLAR is an UK based startup building platform on health and fitness.
                    This platform continuously monitor health in realtime,
                    enabls personal coaching and found its place  in HR industry.
                "
            />
            <FeatureBrand
                name="Live-Score Infrastructure for BCB"
                brImg="/work-brand/bcb.png"
                brColor="bg-green-900"
                description="Bangladesh Cricket Board (BCB) entrusted
                PeddleCloud to design, develop and deploy a live-score management infrastructure ensuring secured scalability"
            />
            <FeatureBrand
                name="Live-Score Feed for valued clients"
                brImg="/work-brand/score-customer.png"
                brColor="bg-amber-400"
                description="Our developed distributable API has served score feed to
                Millions of users through apps and websites of big valued clients"
            />
           {/* <FeatureBrand
                name="IELTS Preparation platform"
                brImg="/work-brand/mentors.png"
                brColor="bg-red-700"
                description="
                    PeddleCloud has worked 4 years with mentors'
                    designing and develop scalable web platform for test preparation.
                    This enables thousands of students to explore their opportunity for study abroad
                 "
            />*/}
        </FlexGrid>
    );
}