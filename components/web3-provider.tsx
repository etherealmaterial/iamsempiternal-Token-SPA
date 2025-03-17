"use client"

import { createContext, useCallback, useState, type ReactNode } from "react"
import { useToast } from "@/hooks/use-toast"

interface Web3ContextType {
  account: string | null
  connect: () => Promise<void>
  disconnect: () => void
  isConnecting: boolean
}

export const Web3Context = createContext<Web3ContextType>({
  account: null,
  connect: async () => {},
  disconnect: () => {},
  isConnecting: false,
})

export function Web3Provider({ children }: { children: ReactNode }) {
  const { toast } = useToast()
  const [account, setAccount] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)

  const connect = useCallback(async () => {
    if (typeof window.ethereum === "undefined") {
      toast({
        title: "MetaMask not detected",
        description: "Please install MetaMask to connect your wallet",
        variant: "destructive",
      })
      return
    }

    setIsConnecting(true)

    try {
      // Simulate connection delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock connection - in a real app, this would use window.ethereum.request
      const mockAccount =
        "0x" +
        Array(40)
          .fill(0)
          .map(() => Math.floor(Math.random() * 16).toString(16))
          .join("")

      setAccount(mockAccount)

      toast({
        title: "Wallet Connected",
        description: `Connected to ${mockAccount.slice(0, 6)}...${mockAccount.slice(-4)}`,
      })
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet",
        variant: "destructive",
      })
    } finally {
      setIsConnecting(false)
    }
  }, [toast])

  const disconnect = useCallback(() => {
    setAccount(null)
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    })
  }, [toast])

  return <Web3Context.Provider value={{ account, connect, disconnect, isConnecting }}>{children}</Web3Context.Provider>
}

