import Hero from '@/components/sections/Hero';
import Passion from '@/components/sections/Passion';
import Dignity from '@/components/sections/Dignity';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Smakprov from '@/components/sections/Smakprov';
import CategoryButtons from '@/components/sections/CategoryButtons';

export const viewport = {
    themeColor: '#8B645A'
}

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <Passion/>
            <Dignity/>
            <Smakprov/>
            <CategoryButtons/>
            <Banner/>
        </>
    )
}