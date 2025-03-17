import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import CollaborationSection from './components/CollaborationSection/CollaborationSection';
import CodeSnippetSection from './components/WhitelistSection/WhitelistSection';
import WhitelistSection from './components/WhitelistSection/WhitelistSection';
import UniswapWidgetSection from './components/UniswapWidgetSection/UniswapWidgetSection';
import TheTeam from './components/TheTeam/TheTeam';
import DiscordCommunitySection from "./components/DiscordCommunitySection/DiscordCommunitySection";
import Footer from './components/Footer/Footer';
import WhitelistForm from "./components/WhitelistCTA/WhitelistCTA";

function App() {
    return (
        <>
            <HeroSection />
            <CollaborationSection />
            <WhitelistSection />
            <DiscordCommunitySection />
            <UniswapWidgetSection />
            <TheTeam />
            <Footer />
        </>
    );
}

export default App;