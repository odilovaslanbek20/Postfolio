import About from '@/app/components/Home/About/About'
import Header from '@/app/components/Home/Header/Header'
import Hero from '@/app/components/Home/Hero/Hero'
import Portfolio from '@/app/components/Home/Portfolio/Portfolio'
import Skills from '@/app/components/Home/Skills/SkillCards'
import Link from '@/app/components/Home/Taplink/Taplink'

function HomePage() {
	return (
		<>
			<Header />
			<Hero />
			<About/>
			<Skills/>
			<Portfolio/>
			<Link/>
		</>
	)
}

export default HomePage
