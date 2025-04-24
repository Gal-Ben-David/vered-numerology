import Image from "next/image";
import styles from "./page.module.css";
import { About } from "@/cmps/about/About";

export default function Home() {
  return (
    <main className="main-layout">
      <div className="cover-img full"></div>
      <About />
    </main>
  )
}
