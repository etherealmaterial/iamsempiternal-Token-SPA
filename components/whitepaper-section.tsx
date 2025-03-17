"use client"

import { FileText } from "lucide-react"

export function WhitepaperSection() {
  return (
    <section className="py-8 text-center">
      <a
        href="#whitepaper-modal"
        className="inline-flex items-center gap-2 text-white hover:text-pink-400 transition-colors font-medium text-lg"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById("whitepaper-modal")?.classList.remove("hidden")
        }}
      >
        <FileText className="h-5 w-5" />
        View Whitepaper
      </a>

      {/* Whitepaper Modal */}
      <div id="whitepaper-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 hidden">
        <div
          className="absolute inset-0 bg-black/80"
          onClick={() => {
            document.getElementById("whitepaper-modal")?.classList.add("hidden")
          }}
        ></div>
        <div className="relative bg-gray-900 border border-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 p-6">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            onClick={() => {
              document.getElementById("whitepaper-modal")?.classList.add("hidden")
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">
              Sempiternal (SEMPI) Token: A Blockchain Revolution for Music Lovers
            </h2>
            <p className="text-center text-gray-400">Version 1.1 | March 2025</p>

            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-xl font-bold mb-4">Abstract</h3>
              <p className="text-gray-300 mb-4">
                Sempiternal (SEMPI) is a blockchain-powered utility token designed to reshape the music industry by
                fostering direct artist-fan interactions, leveraging decentralized finance (DeFi) principles, and
                providing exclusive access to digital and physical content. Built on the Ethereum blockchain, SEMPI
                utilizes smart contracts, a robust governance model, and an innovative tokenomics structure to establish
                a transparent, decentralized, and user-driven music ecosystem.
              </p>
              <p className="text-gray-300">
                This whitepaper details the technical architecture, tokenomics, governance, security mechanisms, and
                economic models driving SEMPI, with an in-depth exploration of its smart contract functionality, staking
                mechanisms, Layer 2 scaling solutions, and decentralized marketplace infrastructure.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Introduction</li>
                <li>Market Overview</li>
                <li>
                  Sempiternal Ecosystem
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>3.1. Decentralized Music Collaboration Platform</li>
                    <li>3.2. NFT-Enabled Artist Takeovers</li>
                    <li>3.3. Exclusive Merchandise Marketplace</li>
                    <li>3.4. On-Chain Community Governance</li>
                  </ul>
                </li>
                <li>
                  Technical Architecture
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>4.1. Ethereum Blockchain Infrastructure</li>
                    <li>4.2. Smart Contract Design and Functionality</li>
                    <li>4.3. Layer 2 Scaling for Reduced Transaction Costs</li>
                    <li>4.4. Security and Smart Contract Audits</li>
                  </ul>
                </li>
                <li>
                  Tokenomics
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    <li>5.1. Token Supply, Distribution, and Vesting Schedules</li>
                    <li>5.2. Staking, Yield Farming, and Reward Distribution</li>
                    <li>5.3. SEMPI Utility: Governance, Transactions, and Memberships</li>
                    <li>5.4. Liquidity Pool Mechanisms and Automated Market Makers (AMMs)</li>
                  </ul>
                </li>
                <li>Roadmap</li>
                <li>Governance & DAO Model</li>
                <li>Security and Compliance Measures</li>
                <li>Conclusion</li>
                <li>References</li>
              </ol>
              <p className="text-gray-400 mt-4">(Truncated for brevity)</p>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-xl font-bold mb-4">Official Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="font-medium">Website:</span>{" "}
                  <a
                    href="https://iamsempiternal.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-400"
                  >
                    https://iamsempiternal.io
                  </a>
                </li>
                <li>
                  <span className="font-medium">Etherscan:</span>{" "}
                  <a
                    href="https://etherscan.io/token/0x702E230926CF71F9bd2dc2a784a8c6Dd49AE9069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-400"
                  >
                    https://etherscan.io/token/0x702E230926CF71F9bd2dc2a784a8c6Dd49AE9069
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center pt-4">
              <a
                href="/whitepaper.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-md"
                rel="noreferrer"
              >
                <FileText className="h-5 w-5" />
                Download Full Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

