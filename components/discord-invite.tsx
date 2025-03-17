"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { DiscIcon as Discord } from "lucide-react"

export function DiscordInvite() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Invitation Sent!",
        description: "Check your email for the Discord invitation",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error sending your Discord invitation",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="community" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join Our Community</h2>
        <p className="mt-4 text-lg text-gray-400">Get access to our private Discord community</p>
      </div>

      <div className="max-w-md mx-auto">
        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Discord className="h-5 w-5" />
              Private Discord Community
            </CardTitle>
            <CardDescription>Enter your email to receive an invitation</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Email Address</label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
              </div>
              <div className="text-sm text-gray-400">
                <p>Benefits of joining our Discord:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Direct access to the development team</li>
                  <li>Early announcements and updates</li>
                  <li>Exclusive giveaways and airdrops</li>
                  <li>Community voting on project decisions</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-[#5865F2] hover:bg-[#4752c4]" disabled={isSubmitting}>
                {isSubmitting ? "Sending Invitation..." : "Get Discord Invite"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  )
}

