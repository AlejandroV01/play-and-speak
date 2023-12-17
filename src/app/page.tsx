import Hero from './_components/Hero/Hero'
import Nav from './_components/Nav/Nav'
export default function Home() {
  return (
    <div className='relative'>
      <Nav />
      <div className='relative h-screen'>
        <Hero />
        <div className='absolute top-0 '>
          <img src='GlowHero.png' alt='' />
        </div>
        <div className='absolute bottom-0'>
          <img src='Looper.png' alt='' />
        </div>
      </div>
    </div>
  )
}
