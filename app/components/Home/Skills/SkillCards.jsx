function Skills() {
	const skills = [
		{ id: 1, name: 'HTML', image: 'html.png' },
		{ id: 2, name: 'CSS', image: 'css.png' },
		{ id: 3, name: 'SCSS', image: 'scss.png' },
		{ id: 4, name: 'JavaScript', image: 'javadcript.png' },
		{ id: 5, name: 'TypeScript', image: 'ts.jpg' },
		{ id: 6, name: 'Git', image: 'git.png' },
		{ id: 6, name: 'Tailwind css', image: 'tailwind.png' },
		{ id: 6, name: 'Bootstrap', image: 'bootstrap.png' },
		{ id: 6, name: 'React js', image: 'React.webp' },
		{ id: 6, name: 'Next js', image: 'next.png' },
	]

	return (
		<section className='max-w-[1100px] mx-auto py-16 px-4'>
			<h2 className='text-white text-center text-4xl font-bold mb-12'>
				My Skills
			</h2>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
				{skills.map(skill => (
					<div
						key={skill.id}
						className='bg-white/5 border border-white/10 rounded-xl p-4 hover:shadow-lg hover:shadow-[#ffffff1a] transition duration-300 flex flex-col items-center'
					>
						<img
							src={skill.image}
							alt={skill.name}
							className='w-16 h-16 object-contain mb-4'
						/>
						<h3 className='text-white text-lg font-medium'>{skill.name}</h3>
					</div>
				))}
			</div>
		</section>
	)
}

export default Skills
