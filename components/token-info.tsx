import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

export function TokenInfo() {
  // Actual contract address
  const contractAddress = "0x702E230926CF71F9bd2dc2a784a8c6Dd49AE9069"
  // Correct total supply
  const totalSupply = "17,500,000"

  return (
    <section id="token-info" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">SEMPI Token</h2>
        <p className="mt-4 text-lg text-gray-400">The future of decentralized finance</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Token Overview</CardTitle>
              <CardDescription>Key information about SEMPI token</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Token Name</h3>
                    <p className="text-gray-400">IAMSEMPITERNAL</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Symbol</h3>
                    <p className="text-gray-400">SEMPI</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Token Standard</h3>
                    <p className="text-gray-400">ERC20</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Total Supply</h3>
                    <p className="text-gray-400">{totalSupply} SEMPI</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Contract Address</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400 break-all">{contractAddress}</p>
                      <a
                        href={`https://etherscan.io/token/${contractAddress}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-400"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Blockchain</h3>
                    <p className="text-gray-400">Ethereum</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tokenomics">
          <Card>
            <CardHeader>
              <CardTitle>Tokenomics</CardTitle>
              <CardDescription>Distribution and allocation of SEMPI tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Token Distribution</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>Public Sale: 35% (6,125,000 SEMPI)</li>
                    <li>Team & Advisors: 15% (2,625,000 SEMPI)</li>
                    <li>Ecosystem Development: 20% (3,500,000 SEMPI)</li>
                    <li>Marketing & Partnerships: 10% (1,750,000 SEMPI)</li>
                    <li>Liquidity Pool: 15% (2,625,000 SEMPI)</li>
                    <li>Reserve: 5% (875,000 SEMPI)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Vesting Schedule</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-400">
                    <li>Public Sale: No lock</li>
                    <li>Team & Advisors: 2-year vesting, 6-month cliff</li>
                    <li>Ecosystem Development: 3-year gradual release</li>
                    <li>Marketing & Partnerships: 2-year gradual release</li>
                    <li>Liquidity Pool: 50% locked for 1 year</li>
                    <li>Reserve: 3-year lock with quarterly releases</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="roadmap">
          <Card>
            <CardHeader>
              <CardTitle>Roadmap</CardTitle>
              <CardDescription>Future development plans for SEMPI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Q2 2023</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-400">
                      <li>Token Launch</li>
                      <li>Initial Exchange Listings</li>
                      <li>Community Building</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Q3 2023</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-400">
                      <li>Staking Platform Launch</li>
                      <li>Partnership Announcements</li>
                      <li>Ecosystem Expansion</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Q4 2023</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-400">
                      <li>Governance Platform</li>
                      <li>Major Exchange Listings</li>
                      <li>DeFi Integration</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">2024 and Beyond</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-400">
                      <li>Cross-chain Expansion</li>
                      <li>Layer 2 Solutions</li>
                      <li>Metaverse Integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}

