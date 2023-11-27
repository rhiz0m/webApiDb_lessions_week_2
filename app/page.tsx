"use client"

import MyButton from "@/components/MyButton"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [buttonName, setButtonName] = useState<string>("To About Page!")

  const handleButtonClicked = () => {
    setButtonName("Entering About page!")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="text-black bold font-bold">Lessions, Week 2. Content:</p>
        <p className="text-black">Lession 1: Routing, Urls, api & typescript</p>
        <p className="text-black">Lession 2: Protokoll & Typescript</p>
        <p className="text-black">Lession 3: useState, TailWind & fetch() </p>

        <Link href="/lession1/shop/product">Navigate to PRODUCT PAGE!</Link>
        <Link href="/lession1/shop">Navigate to SHOP</Link>
        <Link href="/lession1/">
          <MyButton
            name={buttonName}
            someNumber={2023}
            onClick={handleButtonClicked}
          ></MyButton>
        </Link>
      </div>
    </main>
  )
}
