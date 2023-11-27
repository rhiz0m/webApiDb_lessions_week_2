"use client"

import User from "@/components/User"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>this is our SHOP PAGE!</p>
      <User name={"Bengt"} age={47} isLoggedIn={false}></User>
    </main>
  )
}
