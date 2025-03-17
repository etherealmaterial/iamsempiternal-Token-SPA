import { HeroSection } from "@/components/hero-section"
import { SwapWidget } from "@/components/swap-widget"
import { WhitelistForm } from "@/components/whitelist-form"
import { DiscordInvite } from "@/components/discord-invite"
import { TokenInfo } from "@/components/token-info"
import { TeamSection } from "@/components/team-section"
import { WhitepaperSection } from "@/components/whitepaper-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <HeroSection />
      <div className="container mx-auto px-4 py-12 space-y-24">
        <WhitepaperSection />
        <TokenInfo />
        <SwapWidget />
        <TeamSection />
        <WhitelistForm />
        <DiscordInvite />
      </div>
      <Footer />
    </main>
  )
}

