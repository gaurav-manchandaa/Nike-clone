
const Subscribe = () => {
  return (
    <section className="flex flex-col xl:flex-row xl:gap-x-20 max-xl:gap-y-10 xl:justify-between xl:items-center">
      <div>
        <h1 className="text-5xl font-bold max-w-md">
          Sign Up for <span className="text-red-400"> Updates </span> & Newsletter 
        </h1>
      </div>
      <div className="flex flex-col xl:w-2/5 space-y-5 max-xl:px-2.5 relative">
        <input type="text"placeholder="subscribe@nike.com" className="p-4 border rounded-full xl:py-7 " />
        <button className="bg-red-400 rounded-full py-4 xl:hidden">
          Sign Up 
        </button>
        <button className="absolute bg-red-400 rounded-full px-8 py-4 text-white text-base top-[12%] right-[3%] max-xl:hidden">
          Sign Up 
        </button>
      </div>
    </section>
  )
}

export default Subscribe
