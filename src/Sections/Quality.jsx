import Button from "../Components/Button";
import { shoe8 } from "../assets/images";
const Quality = () => {
  return (
    <section className="flex flex-col xl:flex-row xl:gap-x-7 gap-y-5  ">
      <div className="flex flex-col xl:w-1/2 gap-y-7 justify-center flex-1 ">
        <h1 className="font-bold text-5xl xl:text-6xl  ">
          {" "}
          We provide You <span className="text-red-400"> Super Quality </span>
          Shoes{" "}
        </h1>
        <p className="max-w-lg text-[#6d6d6d] text-xl">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="text-[#6d6d6d] text-xl max-w-lg">Our dedication to detail and excellence ensures your satisfaction</p>
        <button className="flex justify-start px-8 p-3.5  text-white bg-red-400 w-fit rounded-full hover:bg-red-500">
          Veiw Details 
        </button>
      </div>
      <div className="relative ">
        <img src={shoe8} alt="" />
      </div>
    </section>
  );
};

export default Quality;
