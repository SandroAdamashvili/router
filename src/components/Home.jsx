import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/hero.jpg";

export default function Home() {
  let navigate = useNavigate();

  return (
    <div className=" flex justify-center items-center flex-col gap-10 mt-4">
      <h1 className="text-6xl">React App</h1>
      <p className="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam
        augue, sodales vel nisi at, rhoncus scelerisque nisl.
      </p>
      <div className="flex flex-row gap-4">
        <button
          onClick={() => {
            navigate("/gallery");
          }}
          className="bg-amber-200 rounded-2xl px-4 py-2 hover:cursor-pointer"
        >
          Go To Gallery
        </button>
        <button
          onClick={() => {
            navigate("/profile");
          }}
          className="bg-amber-200 rounded-2xl px-4 py-2 hover:cursor-pointer"
        >
          Go To Profile Page
        </button>
      </div>

      <img src={HeroImg} alt="hero image" />
    </div>
  );
}
