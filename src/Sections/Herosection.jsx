import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics,shoes } from "../Constants/constants";
import { bigShoe1 } from "../assets/images";
import Shoecard from "../Components/Shoecard";
import { useState } from "react";
const Herosection = () => {
  const [bigshowimg , setBigshowimg] = useState(bigShoe1);
  // this is our hero section
  // in the section of making a shoe card first we render
  return (
    <section className="w-full min-h-screen flex flex-col xl:flex-row justify-center gap-10 max-container ">
      <div className="flex flex-col justify-center gap-y-7  relative items-start   xl:w-2/5    sm:px-18 max-xl:px-8 pt-28   ">
        {/** there will 2 divs first will contain left side of the data and secound will right sode of the data  */}
        <p className="text-red-400 text-2xl">our summer collection</p>
        <h1 className="text-7xl font-bold xl:text-8xl leading-tight xl:leading-none">
          <span className="xl:whitespace-nowrap xl:bg-white z-10 relative pr-10">
            The new Arrival{" "}
          </span>
          <br />
          <span className="text-red-400">Nike</span> Shoes
        </h1>
        <p className="text-xl text-[#6D6D6D] max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button text="Shop now " iconURL={arrowRight} />
        <div className="flex justify-start leading-10 gap-16  flex-wrap mt-20 ">
          {statistics.map((item) => (
            <div key={item.label} className=" ">
              <p className="font-bold text-4xl ">{item.value}</p>
              <p className="text-[#6d6d6d]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex-1 flex justify-center items-center bg-hero max-xl:py-42 bg-center bg-cover relative
      
      ">
        <img
          src={bigshowimg}
          alt=""
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex absolute gap-6 -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe)=>(
            <div key={shoe.thumbnail}>
              <Shoecard
              ImgUrl={shoe}
              changeBigShoeImg ={(shoe)=>{
                setBigshowimg(shoe)
              }}
              bigshoeImg ={bigshowimg}
              />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Herosection;
