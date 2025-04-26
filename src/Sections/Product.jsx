import { products } from "../Constants/constants"; 
import '../index.css'
const Product = () => {
  return (
    <section className="flex flex-col  gap-y-7 ">
      <h1 className="font-bold text-5xl">
        Our <span className="text-[#FF6452]">Popular </span> Products{" "}
      </h1>
      <p className="max-w-md text-[#6d6d6d] ">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="flex flex-col xl:flex-row gap-y-7 xl:space-y-0 justify-start  gap-x-7   ">
        {products.map((prod)=>(
          <div className="flex flex-col gap-y-5 justify-start   " key={prod.imgURL}>
            <img src={prod.imgURL} alt="product-image"  className="bg-hero bg-cover bg-center rounded-3xl "/>
            <p className="font-bold text-xl ">{prod.name}</p>
            <p className="text-red-400 text-lg font-bold">{prod.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
