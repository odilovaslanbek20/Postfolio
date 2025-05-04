import DownloadButton from '../../Resume/Resume'

function Hero() {
	return (
		<>
			<section className='my-[50px] pt-[80px]'>
				<div className='max-w-[90%] m-auto flex items-center justify-evenly max-[750px]:flex-col gap-[50px]'>
					<div className='max-[750px]:order-2 min-w-[300px]'>
						<h1 className='text-[48px] font-bold max-[750px]:text-center max-[920px]:text-[35px] text-[#ffff]'>Hi, I am <br /> Odilov Aslanbek</h1>
						<p className='text-[18px] font-medium max-[750px]:text-center text-[#828282]'>Frontend Developer</p>
						<DownloadButton/>
					</div>
					<div className='max-[750px]:order-1'>
							<img className='rounded-full max-w-[400px] w-full h-auto' src='Me.jpg' alt='me photo' />
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero
