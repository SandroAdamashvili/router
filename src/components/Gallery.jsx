import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Gallery() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?_limit=4"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
    console.log(data);
  }, []);

  return (
    <div className=" flex justify-center items-center flex-col gap-10 mt-10 mx-10">
      <div className="flex flex-row gap-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-4 border border-gray-300 p-2 h-[350px] rounded-lg"
          >
            <img
              src={`https://dummyjson.com/image/400x280?type=webp&background=${item.url.slice(
                -6
              )}`}
            />
            <p className="text-wrap text-center w-[300px]">{item.title}</p>
          </div>
        ))}
      </div>
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
