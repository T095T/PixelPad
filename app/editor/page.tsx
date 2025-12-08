"use client";
import Live from "@/components/Live";
import { Room } from "../Room";
import Navbar from "@/components/HomeNavbar";
import EditorNavbar from "@/components/EditorNavbar";
import { useRef, useState } from "react";

export default function Home() {
  const [activeElement, setActiveElement] = useState(null);

  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleActiveElement = (element: any) => {
    setActiveElement(element);
  };

  const handleImageUpload = (e: any) => {
    // your upload logic
  };
  return (
    <main className="h-screen overflow-hidden">
      <EditorNavbar
        activeElement={activeElement}
        imageInputRef={imageInputRef}
        handleImageUpload={handleImageUpload}
        handleActiveElement={handleActiveElement}
      />

      <section className="flex h-full flex-row">
        <Live />
      </section>
    </main>
  );
}
