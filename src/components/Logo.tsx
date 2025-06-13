import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const Logo = () => {
  return (
    <div
      className={`block bg-gradient-to-r from-[#02c21f] via-[#1b9335] to-[#198e61] bg-clip-text text-transparent ${anton.className}`}>
      <div className="lg:text-3xl tracking-widest pl-5 text-xl">Khel</div>
    </div>
  );
};

export default Logo;
