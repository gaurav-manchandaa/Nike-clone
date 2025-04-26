import { reviews } from "../Constants/constants";
const Reveiws = () => {
  return (
    <section className="flex flex-col xl:gap-y-16 max-xl:gap-y-20  items-center justify-center bg-[#F5F6FF] min-w-screen mx-auto xl:py-20 max-xl:py-10 ">
      <div className="flex flex-col gap-y-5 justify-center items-center">
        <h1 className="font-bold  text-5xl text-center">
          What Our <span className="text-red-400">Customer</span> Say ?
        </h1>
        <p className="text-[#6d6d6d] max-w-md px-3 text-center mx-auto">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-x-40 max-xl:gap-y-15 xl:py-10 max-xl:py-10  justify-center items-center">
        {reviews.map((reve)=>(
          <div key={reve.imgURL} className="flex flex-col gap-y-5 justify-center items-center">
            <img src={reve.imgURL} alt="" width={100} height={100} className="rounded-full "/>
            <p className="text-[#6d6d6d] text-center max-w-sm text-lg">{reve.feedback}</p>
            <p className="">({reve.rating})</p>
            <p className="font-bold text-2xl">{reve.customerName}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reveiws;
