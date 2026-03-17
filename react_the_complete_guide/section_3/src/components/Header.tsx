import { useState } from "react";
import { FaReact } from "react-icons/fa6";

const reactDescriptions = ["fundamental", "crucial", "core"]

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const [number, setNumber] = useState(getRandomInt(2));

  return (
    <header className="w-full flex flex-col items-center p-3 gap-2">
      <FaReact className="h-50 w-50 text-amber-200"></FaReact>
      <h1 className="text-4xl font-bold text-neutral-100">React Essentials</h1>
      <p className="text-xl text-w text-neutral-200">
        {reactDescriptions[number]} React concepts you will need for almost any app
      </p>
      <button onClick={() => setNumber(getRandomInt(2))} className="cursor-pointer">Refresh</button>
    </header>
  );
}

export default Header;
