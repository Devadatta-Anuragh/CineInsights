import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="padding-x pb-8 pt-1  z-10 w-full bg-slate-300">
      <nav className="flex justify-between items-center max-container py-0">
        <a href="/" className=" h-8 ">
          <img
            src="/movielogo.svg"
            alt="Logo"
            width={60}
            className="h-[60px] justify-center items-center "
          />
        </a>
        <div></div>
        <h1 className="flex-1 flex justify-center items-center gap-16 font-bold font-montserrat text-4xl h-8 ">
          CineInsights
        </h1>

        <ul className="  flex-1 flex justify-center items-center gap-8 max-lg:hidden">
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg text-slate-gray font-semibold"
            >
              Shows
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg text-slate-gray font-semibold"
            >
              Latest
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg text-slate-gray font-semibold"
            >
              Web-Channels
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg text-slate-gray font-semibold"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg text-slate-gray font-semibold"
            >
              Hollywood
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-2xl text-slate-gray font-semibold"
            >
              <RxHamburgerMenu />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
