import { FaReact } from "react-icons/fa6";

function Header() {
    return (
        <header className="w-full flex flex-col items-center p-3 gap-2">
        <FaReact className="h-50 w-50 text-amber-200"></FaReact>
        <h1 className="text-4xl font-bold text-neutral-100">React Essentials</h1>
        <p className="text-xl text-w text-neutral-200">
            Fundamental React concepts you will need for almost any app
        </p>
        </header>
  );
};

export default Header;