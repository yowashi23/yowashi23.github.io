import HeroSection from "../HeroSection";
 import MyPortfolio from "../MyPortfolio";
 import ContactMe from "../ContactMe";
 import Footer from "../Footer";


 export default function Home() {
    return (
        // React fragments to avoid having empty divs and creating unnecessary structures:
        <>
            <HeroSection />
            <MyPortfolio />
            <ContactMe />
            <Footer />
        </>
    )
};