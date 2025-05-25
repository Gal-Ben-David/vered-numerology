import { About } from "@/cmps/about/About";
import { Footer } from "@/cmps/footer/Footer";
import { Activities } from "@/cmps/activities/Activities";
import { CallToAction } from "@/cmps/call-to-action/CallToAction";
import { Meetings } from "@/cmps/meetings/Meetings";
import dynamic from 'next/dynamic';

const CalculatorCmp = dynamic(() => import('@/cmps/calculator/Calculator'), {
  loading: () => <p>Loading...</p>, // Optional loading placeholder
});

export default function Home() {
  return (
    <>
      <div className="cover-img-wrapper full">
        <img
          className="cover-img"
          src="https://res.cloudinary.com/dvykycdey/image/upload/f_auto,q_auto/v1745910915/cover-img_small_z9c5am.jpg"
          alt="Cover"
          fetchPriority="high"
        />
        <svg
          className="cover-shape"
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
      <CalculatorCmp />
      <CallToAction />
      <Footer />
    </>
  )
}
