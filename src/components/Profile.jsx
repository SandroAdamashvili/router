import { useNavigate, useParams } from "react-router-dom";

export default function Profile() {
  const { name } = useParams();
  let navigate = useNavigate();

  return (
    <div className=" flex justify-center items-center flex-col gap-10 mt-10">
      <h1 className="text-6xl">
        {name ? `Made by ${name}` : "Made by Sandro"}
      </h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-200 rounded-2xl px-4 py-2 hover:cursor-pointer"
      >
        Go To Home Page
      </button>
    </div>
  );
}
