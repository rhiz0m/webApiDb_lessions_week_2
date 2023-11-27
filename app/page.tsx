"use client";

import MyButton from "@/components/MyButton";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [buttonName, setButtonName] = useState<string>("Click Me!");

  const handleButtonClicked = () => {
    setButtonName("Button have been clicked!");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello World</p>
      <Link href="/shop/product">Navigate to PRODUCT PAGE!</Link>
      <Link href="/shop">Navigate to SHOP</Link>
      <MyButton
        name={buttonName}
        someNumber={2023}
        onClick={handleButtonClicked}
      ></MyButton>
    </main>
  );
}
