function Skills() {
	const skills = [
		{
			id: 1,
			name: 'HTML',
			image: 'html.png',
		},
		{
			id: 2,
			name: 'CSS',
			image: 'css.jpeg',
		},
		{
			id: 3,
			name: 'SCSS',
			image: 'scss.png',
		},
		{
			id: 4,
			name: 'JavaScript',
			image: 'javadcript.png',
		},
		{
			id: 5,
			name: 'TypeScript',
			image: 'ts.jpg',
		},
		{
			id: 6,
			name: 'Git',
			image: 'git.png',
		},
	]

	return (
		<>
			<section className='max-w-[90%] m-auto'>
				<h2 className='text-[#fff] font-["DM sans"] font-bold text-[48px] text-center mb-[30px]'>
					My Skills
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8'>
					{skills?.map(skill => (
						<div
							key={skill?.id}
							className='bg-[#2A2A2A] p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300'
						>
							<h3 className='text-[#fff] text-[18px] font-semibold text-center'>
								{skill?.name}
							</h3>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default Skills
