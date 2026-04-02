import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Agitation from '@/components/Agitation'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import UseCases from '@/components/UseCases'
import Benefits from '@/components/Benefits'
import Objections from '@/components/Objections'
import Pricing from '@/components/Pricing'
import RiskReversal from '@/components/RiskReversal'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Agitation />
      <Solution />
      <HowItWorks />
      <UseCases />
      <Benefits />
      <Objections />
      <Pricing />
      <RiskReversal />
      <FinalCTA />
      <Footer />
    </main>
  )
}
