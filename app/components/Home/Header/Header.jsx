'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'
import { FaXmark } from 'react-icons/fa6'

function Header() {
	const [modal, setModal] = useState(false)
	return (
		<>
			<header className='fixed top-0 py-[10px] bg-[#000]/50 backdrop-blur-2xl w-full border-b border-[#fff]'>
				<div className='max-w-[90%] m-auto flex items-center justify-between'>
					<Link href='/'>
						<img
							className='w-[150px] h-auto '
							src='Logo.png'
							alt='web logo'
						/>
					</Link>
					<nav>
						<div
							className={`flex items-center gap-[40px] max-[620px]:fixed max-[620px]:top-0 max-[620px]:flex-col max-[620px]:w-[320px] max-[620px]:border max-[620px]:bg-[#212121] max-[620px]:h-screen max-[620px]:py-[50px] transition-all duration-300 ease-in-out ${
								modal ? 'max-[620px]:right-0' : 'max-[620px]:right-[-100%]'
							}`}
						>
							<Link className='group' href='/'>
								<p className='text-[#fff] font-semibold'>About me</p>
								<div className='w-0 h-[1px] transition-all group-hover:w-full bg-[#fff]'></div>
							</Link>
							<Link className='group' href='#'>
								<p className='text-[#fff] font-semibold'>Portfolio</p>
								<div className='w-0 h-[1px] transition-all group-hover:w-full bg-[#fff]'></div>
							</Link>
							<Link className='group' href='#'>
								<p className='text-[#fff] font-semibold'>Contact me</p>
								<div className='w-0 h-[1px] transition-all group-hover:w-full bg-[#fff]'></div>
							</Link>
							<FaXmark
								onClick={() => setModal(false)}
								className='text-[#fff] min-[620px]:hidden transition-all text-[30px] absolute top-[15px] left-[20px]'
							/>
						</div>
						<FaBarsStaggered
							onClick={() => setModal(true)}
							className='text-[#fff] transition-all text-[25px] min-[620px]:hidden'
						/>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header
