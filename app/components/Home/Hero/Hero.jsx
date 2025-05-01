import DownloadButton from '../../Resume/Resume'

function Hero() {
	return (
		<>
			<section className='my-[50px]'>
				<div className='max-w-[90%] m-auto flex items-center justify-evenly max-[750px]:flex-col gap-[50px]'>
					<div className='max-[750px]:order-2'>
						<h1 className='text-[48px] font-bold max-[750px]:text-center max-[920px]:text-[35px] text-[#ffff]'>Hi, I am <br /> Odilov Aslanbek</h1>
						<p className='text-[18px] font-medium max-[750px]:text-center text-[#828282]'>Frontend Developer</p>
						<DownloadButton/>
					</div>
					<div className='max-[750px]:order-1'>
						<div className='w-[550px] max-[400px]:w-full max-[1100px]:w-[400px] max-[920px]:w-[350px] max-[1100px]:p-[15px] rounded-full h-auto bg-[#212121] p-[30px]'>
							<img className='rounded-full w-full h-full' src='Me.jpg' alt='' />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero
