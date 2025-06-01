import Header from "@/components/Header"
import HeroAbout from "@/components/sections/HeroAbout"
import AboutSticky from "@/components/sections/AboutSticky"
import Smakprov from '@/components/sections/Smakprov';
import CategoryButtons from '@/components/sections/CategoryButtons';


export const viewport = {
    themeColor: '#8B645A'
}

export default function OmOss() {
    return (
        <>
            <Header/>
            <HeroAbout/>
            <AboutSticky/>
            <Smakprov/>
            <CategoryButtons/>
        </>
    )
}