"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDownUp, ExternalLink, Info } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useWeb3 } from "@/hooks/use-web3"

export function SwapWidget() {
  const { toast } = useToast()
  const { account, connect } = useWeb3()
  const [fromToken, setFromToken] = useState("ETH")
  const [toToken, setToToken] = useState("SEMPI")
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Actual contract address
  const contractAddress = "0x702E230926CF71F9bd2dc2a784a8c6Dd49AE9069"

  const handleSwap = async () => {
    if (!account) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to swap tokens",
        variant: "destructive",
      })
      return
    }

    if (!fromAmount || Number.parseFloat(fromAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to swap",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // In a real implementation, this would call the swap function on Uniswap or another DEX
      // const uniswapRouter = new ethers.Contract(UNISWAP_ROUTER_ADDRESS, UNISWAP_ROUTER_ABI, signer);
      // await uniswapRouter.swapExactETHForTokens(
      //   minAmountOut,
      //   [WETH_ADDRESS, contractAddress],
      //   account,
      //   deadline,
      //   { value: ethers.utils.parseEther(fromAmount) }
      // );

      // Simulate swap delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Swap Successful",
        description: `Swapped ${fromAmount} ${fromToken} to ${toAmount} ${toToken}`,
      })
    } catch (error) {
      toast({
        title: "Swap Failed",
        description: "There was an error processing your swap",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value)
    // Simple mock conversion rate: 1 ETH = 10000 SEMPI
    if (fromToken === "ETH" && toToken === "SEMPI") {
      setToAmount(value ? (Number.parseFloat(value) * 10000).toString() : "")
    } else if (fromToken === "SEMPI" && toToken === "ETH") {
      setToAmount(value ? (Number.parseFloat(value) / 10000).toString() : "")
    }
  }

  const switchTokens = () => {
    setFromToken(toToken)
    setToToken(fromToken)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  return (
    <section id="swap" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Swap Tokens</h2>
        <p className="mt-4 text-lg text-gray-400">Swap ETH for SEMPI tokens using UniSwap V2</p>
      </div>

      <div className="max-w-md mx-auto">
        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>UniSwap V2 Swap</span>
              <a
                href={`https://etherscan.io/token/${contractAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-pink-500 hover:text-pink-400 flex items-center gap-1"
              >
                View Token <ExternalLink className="h-3 w-3" />
              </a>
            </CardTitle>
            <CardDescription>Trade tokens in an instant</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium leading-none">From</label>
                <span className="text-xs text-gray-400">Balance: {fromToken === "ETH" ? "0.0 ETH" : "0.0 SEMPI"}</span>
              </div>
              <div className="flex space-x-2">
                <Input
                  type="number"
                  placeholder="0.0"
                  value={fromAmount}
                  onChange={(e) => handleFromAmountChange(e.target.value)}
                  className="flex-1"
                />
                <Select value={fromToken} onValueChange={setFromToken}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select token" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ETH">ETH</SelectItem>
                    <SelectItem value="SEMPI">SEMPI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={switchTokens}
                className="rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <ArrowDownUp className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium leading-none">To</label>
                <span className="text-xs text-gray-400">Balance: {toToken === "ETH" ? "0.0 ETH" : "0.0 SEMPI"}</span>
              </div>
              <div className="flex space-x-2">
                <Input type="number" placeholder="0.0" value={toAmount} readOnly className="flex-1" />
                <Select value={toToken} onValueChange={setToToken}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select token" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ETH">ETH</SelectItem>
                    <SelectItem value="SEMPI">SEMPI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-lg bg-gray-800 p-3 text-sm">
              <div className="flex items-center space-x-2">
                <Info className="h-4 w-4 text-gray-400" />
                <span>1 ETH = 10,000 SEMPI</span>
              </div>
              <div className="mt-2 flex justify-between text-gray-400">
                <span>Slippage Tolerance</span>
                <span>0.5%</span>
              </div>
              <div className="mt-2 flex justify-between text-gray-400">
                <span>Contract</span>
                <a
                  href={`https://etherscan.io/token/${contractAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-400 truncate max-w-[180px]"
                >
                  {contractAddress.substring(0, 6)}...{contractAddress.substring(38)}
                </a>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {!account ? (
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                onClick={connect}
              >
                Connect Wallet
              </Button>
            ) : (
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                onClick={handleSwap}
                disabled={isLoading || !fromAmount}
              >
                {isLoading ? "Swapping..." : "Swap"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

