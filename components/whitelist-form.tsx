"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useWeb3 } from "@/hooks/use-web3"
import { ExternalLink } from "lucide-react"

export function WhitelistForm() {
  const { toast } = useToast()
  const { account, connect } = useWeb3()
  const [address, setAddress] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Actual contract address
  const contractAddress = "0x702E230926CF71F9bd2dc2a784a8c6Dd49AE9069"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!account) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to join the whitelist",
        variant: "destructive",
      })
      return
    }

    if (!address || !address.startsWith("0x") || address.length !== 42) {
      toast({
        title: "Invalid address",
        description: "Please enter a valid Ethereum address",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // In a real implementation, this would call the whitelist function on the contract
      // const contract = new ethers.Contract(contractAddress, ABI, signer);
      // await contract.addToWhitelist(address);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Success!",
        description: "Your address has been added to the whitelist",
      })

      setAddress("")
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error adding your address to the whitelist",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="whitelist" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join the Whitelist</h2>
        <p className="mt-4 text-lg text-gray-400">Get early access to the SEMPI ICO</p>
      </div>

      <div className="max-w-md mx-auto">
        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>SEMPI ICO Whitelist</span>
              <a
                href={`https://etherscan.io/token/${contractAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-pink-500 hover:text-pink-400 flex items-center gap-1"
              >
                View Contract <ExternalLink className="h-3 w-3" />
              </a>
            </CardTitle>
            <CardDescription>
              Submit your address to join the whitelist for token {contractAddress.substring(0, 6)}...
              {contractAddress.substring(38)}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Ethereum Address</label>
                <Input
                  placeholder="0x..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="flex-1"
                />
              </div>
              <div className="text-sm text-gray-400">
                <p>Benefits of joining the whitelist:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Guaranteed allocation in the ICO</li>
                  <li>Lower minimum investment requirement</li>
                  <li>Early access to token sale</li>
                  <li>Bonus tokens (10% extra)</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              {!account ? (
                <Button
                  type="button"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                  onClick={connect}
                >
                  Connect Wallet
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Join Whitelist"}
                </Button>
              )}
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  )
}

