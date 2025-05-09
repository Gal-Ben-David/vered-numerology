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
