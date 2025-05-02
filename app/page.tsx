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
      <div className="cover-img full">

        <svg
          viewBox="0 0 100 20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100px', display: 'block', position: 'absolute', bottom: '-60px' }}
        >
          {/* <path
            d="M0,10 C125,50 250,50 375,10 L375,80 L0,80 Z"
            fill="#9b9472"
          /> */}

          <polygon
            points="0,2 50,8 100,2 100,20 0,20"
            fill="#9b9472"
          />
        </svg>
      </div>
      <About />
      <Activities />
      <Meetings />
      <Calculator />
      <CallToAction />
      <Footer />
    </main>
  )
}
