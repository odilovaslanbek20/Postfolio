import { FaInstagram, FaTelegramPlane, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

function Link() {
	return (
		<div className='w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 text-sm'>
			<div className='max-w-7xl mx-auto flex justify-between items-center flex-wrap'>
				<div className='flex items-center space-x-4'>
					<a href='tel:+998992662880'>📞 +998 99 266 28 80</a>
					<a href='mailto:aslanbekodilov524@gmail.com'>📧 aslanbekodilov524@mail.com</a>
				</div>

				<div className='flex items-center space-x-2 mt-2 sm:mt-0'>
					<a
						href='https://instagram.com/aslanbek8987'
						target='_blank'
						rel='noopener noreferrer'
						className='w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-gray-700 hover:bg-pink-500 hover:text-white transition shadow'
					>
						<FaInstagram />
					</a>
					<a
						href='https://t.me/aslanbek_odilov'
						target='_blank'
						rel='noopener noreferrer'
						className='w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-gray-700 hover:bg-blue-500 hover:text-white transition shadow'
					>
						<FaTelegramPlane />
					</a>
					<a
						href='https://facebook.com/yourusername'
						target='_blank'
						rel='noopener noreferrer'
						className='w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-gray-700 hover:bg-blue-700 hover:text-white transition shadow'
					>
						<FaFacebookF />
					</a>
					<a
						href='https://linkedin.com/in/yourusername'
						target='_blank'
						rel='noopener noreferrer'
						className='w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition shadow'
					>
						<FaLinkedinIn />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Link
