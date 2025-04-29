import Image from "next/image";
import styles from "./page.module.css";
import { About } from "@/cmps/about/About";
import { Footer } from "@/cmps/footer/Footer";
import { Activities } from "@/cmps/activities/Activities";
import { CallToAction } from "@/cmps/call-to-action/CallToAction";
import { Meetings } from "@/cmps/meetings/Meetings";
import { Calculator } from "@/cmps/calculator/Calculator";

export default function Home() {
  return (
    <main className="main-layout">
      <div className="cover-img full"></div>
      <About />
      <Activities />
      <Meetings />
      <Calculator />
      <CallToAction />
      <Footer />
    </main>
  )
}
