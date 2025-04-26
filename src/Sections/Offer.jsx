import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
const Offer = () => {
  return (
    <section className="flex flex-col-reverse xl:flex-row xl:gap-x-10 max-xl:gap-y-5 items-center justify-center">
      <div className="xl:w-1/2">
        <img src={offer} alt="" />
      </div>
      <div className="flex flex-col space-y-5">
        <h1 className="font-bold text-5xl">
          <span className="text-red-400">Special</span> Offer
        </h1>
        <p className="text-[#6d6d6d] text-lg max-w-md">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-lg text-[#6d6d6d] max-w-md">Navigate a realm of possibilities designed to fulfill your unique
        desires, surpassing the loftiest expectations. Your journey with us is
        nothing short of exceptional</p>
        <div className="flex flex-col xl:flex-row xl:space-x-10 max-xl:space-y-5  xl:justify-center xl:items-center">
          <Button
          text="Shop now "
          iconURL={arrowRight}
          className="max-xl:w-fit"
          />
          <button className="text-base px-7 py-3 border rounded-full border-[#6d6d6d] text-[#6d6d6d] cursor-pointer max-xl:w-fit">
            Learn more 
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
