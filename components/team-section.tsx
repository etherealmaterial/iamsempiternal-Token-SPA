"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Github, Twitter, Linkedin } from "lucide-react"

interface TeamMemberProps {
  name: string
  title: string
  bio: string
  image: string
  github?: string
  twitter?: string
  linkedin?: string
}

function TeamMember({ name, title, bio, image, github, twitter, linkedin }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`relative overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-6 transition-all duration-300 ${
        isHovered ? "transform scale-[1.02] shadow-[0_0_15px_rgba(236,72,153,0.5)]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border effect */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-pink-500 animate-[border-top_1s_ease-in-out]"></div>
        <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-gradient-to-b from-pink-500 via-pink-500 to-transparent animate-[border-right_1s_ease-in-out_0.25s]"></div>
        <div className="absolute bottom-0 right-0 left-0 h-[2px] bg-gradient-to-l from-transparent via-pink-500 to-pink-500 animate-[border-bottom_1s_ease-in-out_0.5s]"></div>
        <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-t from-transparent via-pink-500 to-pink-500 animate-[border-left_1s_ease-in-out_0.75s]"></div>
      </div>

      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-700">
          <img src={image || "/placeholder.svg"} alt={name} className="object-cover w-full h-full" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm font-bold text-pink-500">{title}</p>
        </div>

        <p className="text-gray-400">{bio}</p>

        <div className="flex space-x-4 pt-2">
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
            >
              <Twitter className="h-4 w-4 text-white" />
            </a>
          )}
          {github && (
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
            >
              <Github className="h-4 w-4 text-white" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
            >
              <Linkedin className="h-4 w-4 text-white" />
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}

export function TeamSection() {
  return (
    <section id="team" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Team</h2>
        <p className="mt-4 text-lg text-gray-400">Meet the visionaries behind IAMSEMPITERNAL</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <TeamMember
          name="Scott Brown"
          title="Founder + Chief Technology Officer / Solidity Expert"
          bio="Blockchain innovator and Solidity expert with extensive experience in smart contract development. As the visionary behind IAMSEMPITERNAL, Scott combines technical expertise with a passion for decentralized finance to create cutting-edge solutions in the Web3 space."
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scott_brown-m8bs72FKaAlemK274NopJSe0t69Kbh.jpeg"
          github="etherealmaterial"
          twitter="iamsempiternalio"
        />
        <TeamMember
          name="Steve Brandt"
          title="Founder + Chief Executive Officer"
          bio="Seasoned business leader with a proven track record in scaling blockchain ventures and driving strategic growth. Steve brings extensive experience in business development, fundraising, and building high-performing teams to lead IAMSEMPITERNAL's market expansion and vision execution."
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1637798822674-R6CfOLa31rGhG4iAtKngMzQAE0LtHN.jpeg"
          linkedin="https://www.linkedin.com/in/stevebrandt/"
        />
      </div>
    </section>
  )
}

