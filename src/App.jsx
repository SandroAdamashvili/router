import "./App.css";
import HeroImg from "./assets/hero.jpg";

function App() {
  return (
    <>
      <div className=" flex justify-center items-center flex-col gap-10">
        <h1 className="text-6xl">React App</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam
          augue, sodales vel nisi at, rhoncus scelerisque nisl.
        </p>
        <button className="bg-amber-200 rounded-2xl px-4 py-2 hover:cursor-pointer">
          Go To Gallery
        </button>
        <img src={HeroImg} alt="hero image" />
      </div>
    </>
  );
}

export default App;
