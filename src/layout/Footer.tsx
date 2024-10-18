import Logo from "../assets/Logo2.png";
import FooterIcons from "./FooterIcons";
import NavLinks from "./NavLinks";

function Footer() {
  return (
    <footer className="bg-[#213547] mt-[100px]">
      <div className="flex flex-col md:flex-row md:justify-between items-center max-w-[1440px] mx-auto py-6 text-white">
        <div className="w-[60px] lg:h-[60px] m-2.5 flex items-center rounded-full bg-gray-700 cursor-pointer">
          <img className="w-[60px] h-[60px] " src={Logo} alt="Logo" />
        </div>
        <NavLinks classes="mb-[25px] md:mb-0 text-center lg:flex lg:items-center" />
        <div className="flex justify-center items-center my-[25px]">
          <FooterIcons />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
