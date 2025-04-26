import { services } from "../Constants/constants"
const Service = () => {
  return (
    <section className="flex flex-col xl:flex-row xl:space-x-8 space-y-7   "> 
    {services.map((card)=>(
      <div className="relative flex flex-col gap-y-5  rounded-2xl px-7 py-4 shadow-2xl" key={card.imgURL}>
        <img src={card.imgURL} alt="image" width={50} height={50} className="bg-red-400 rounded-full bg-cover bg-center p-2"/>
        <h2 className="font-bold text-2xl">{card.label}</h2>
        <p className="text-[#6d6d6d] max-w-md text-lg">{card.subtext}</p>
      </div>
    ))}
    </section>
  )
}

export default Service
