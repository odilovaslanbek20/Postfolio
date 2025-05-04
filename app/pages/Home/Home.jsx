import About from '@/app/components/Home/About/About'
import Header from '@/app/components/Home/Header/Header'
import Hero from '@/app/components/Home/Hero/Hero'
import Skills from '@/app/components/Home/Skills/SkillCards'

function HomePage() {
	return (
		<>
			<Header />
			<Hero />
			<About/>
			<Skills/>
		</>
	)
}

export default HomePage
