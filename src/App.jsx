export default function App() {
  return (
    <div className="bg-[#141414] h-screen pt-20 items-center justify-center flex">
      <div className="bg-[#1f1f1f] w-1/4 mx-auto rounded-lg flex flex-col items-center justify-center py-4 shadow-xl text-center md:w-[40%] md:h-[90%] md:justify-center shrink sm:w-[50%] ph:w-[80%] ph:h-[80%]">
        <img src="src\assets\images\avatar-jessica.jpeg" className="rounded-full w-25" />
        <h1 className="pt-5 text-white text-2xl font-[Inter] font-semibold">Jessica Randal</h1>
        <h2 className="text-[#c5f82a] text-[14px] font-[Inter] font-medium pb-5">London, United Kingdom</h2>
        <h2 className="text-white text-[14px] font-[Inter] font-medium">"Front-end developer and avid reader"</h2>
        <div className="mt-6 flex flex-col gap-3 md:gap-4 text-center w-[90%] font-semibold">
          <a href="https://www.github.com" className="bg-[#333] text-white py-2 w- rounded-xl transition duration-700 hover:text-black hover:bg-[#c5f82a]">GitHub</a>
          <a href="https://www.frontendmentor.io" className="bg-[#333] text-white py-2 rounded-xl transition duration-700 hover:text-black hover:bg-[#c5f82a]">Frontend Mentor</a>
          <a href="https://www.linkedin.com" className="bg-[#333] text-white py-2 rounded-xl transition duration-700 hover:text-black hover:bg-[#c5f82a]">LinkedIn</a>
          <a href="https://www.x.com" className="bg-[#333] text-white py-2 rounded-xl transition duration-700 hover:text-black hover:bg-[#c5f82a]">Twitter</a>
          <a href="https://www.instagram.com" className="bg-[#333] text-white py-2 rounded-xl transition duration-700 hover:text-black hover:bg-[#c5f82a]">Instagram</a>
        </div>
      </div>
    </div>
  )
}
