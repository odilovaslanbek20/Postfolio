function DownloadButton() {
  return (
    <a href="/resume.pdf" download>
      <button className='mt-[35px] max-[750px]:w-full max-[920px]:mt-[15px] w-[180px] bg-[#27AE60] h-[45px] flex items-center justify-center font-semibold gap-[12px] text-[#fff]'>
				 <span className='text-[20px]'>📥</span>
				 Download CV</button>
    </a>
  );
}


export default DownloadButton