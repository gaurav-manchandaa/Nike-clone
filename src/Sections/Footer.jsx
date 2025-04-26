import { footerLogo } from "../assets/images";
import { socialMedia } from "../Constants/constants";
import { footerLinks } from "../Constants/constants";
const Footer = () => {
  return (
    <div className="flex flex-col space-y-10 py-7">
      <section className="flex flex-col xl:flex-row  max-xl:gap-y-7 justify-between items-start ">
        <div className="flex flex-col gap-y-7">
          <img src={footerLogo} alt="" width={175} />
          <p className="text-[#6d6d6d]  max-w-sm text-left text-lg">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size in Store. Get Rewards
          </p>
          <div className="flex space-x-4 ">
            {socialMedia.map((icon) => (
              <div className="" key={icon.src}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={45}
                  className="bg-white rounded-full p-2 "
                />
              </div>
            ))}
          </div>
        </div>
        {footerLinks.map((section) => (
          <div className="flex flex-col gap-y-3 " key={section.title}>
            <h1 className="font-bold text-xl mb-1">{section.title}</h1>
            {section.links.map((lin) => (
              <a
                href={lin.link}
                key={lin.link}
                className="hover:text-[#6d6d6d] text-[#FFFFFFCC]"
              >
                {lin.name}
              </a>
            ))}
          </div>
        ))}
      </section>
      <section className="flex justify-between mt-6">
        <div className="flex items-center text-[#FFFFFFCC] cursor-pointer justify-center">
          <span className="text-2xl "> &copy; </span>
          <p className="text-lg ">Copyright. All rights reserved</p>
        </div>
        <p className="text-[#FFFFFFCC] cursor-pointer max-xl:hidden">Terms & Conditions</p>
      </section>
    </div>
  );
};

export default Footer;
