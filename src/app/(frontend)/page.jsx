import Hero from '@/components/sections/Hero';
import Passion from '@/components/sections/Passion';
import Dignity from '@/components/sections/Dignity';
import Header from '@/components/Header';
import Smakprov from '@/components/sections/Smakprov';
import CategoryButtons from '@/components/sections/CategoryButtons';

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <Passion/>
            <Dignity/>
            <Smakprov/>
            <CategoryButtons/>
        </>
    )
}