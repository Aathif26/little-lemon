import MenuCard from "./MenuCard";
import { useNavigate } from "react-router-dom";

const MenuItems = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    img_url: "/assets/greeksalad.jpg",
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    img_url: "/assets/bruchetta.svg",
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    img_url: "/assets/lemondessert.jpg",
  },
];
function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mb-20 z-10">
      <div className="bg-[#495E57] h-full sm:h-96 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto p-4 sm:p-0">
          {/* Left: Text Content */}
          <div className="text-white sm:w-1/2 space-y-4 sm:items-start items-center flex flex-col">
            <h1 className="text-[#F4CE14] text-4xl font-bold">Little Lemon</h1>
            <h2 className="text-white text-2xl font-semibold">Chicago</h2>
            <p className="text-gray-200 text-base sm:text-start text-center md:text-lg w-full sm:w-10/12">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button
              className="mt-4 px-6 py-2 bg-[#F4CE14] text-black font-bold rounded-xl transition cursor-pointer"
              onClick={() => navigate("/booking")}
            >
              Reserve Table
            </button>
          </div>

          {/* Right: Image */}
          <div className="mt-4 sm:mt-40 md:w-1/2 flex justify-center">
            <img
              src="/assets/restauranfood.jpg"
              alt="Delicious food"
              className="w-52 h-52 sm:w-80 sm:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Middle Section */}
      <div className="flex flex-col items-center justify-between mt-20">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto w-full">
          <h2 className="text-lg sm:text-3xl font-bold">
            This weeks specials!
          </h2>
          <button
            className="px-6 py-2 bg-[#F4CE14] text-black font-bold rounded-xl transition cursor-pointer"
            onClick={() => navigate("/order-online")}
          >
            Online Menu
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 mt-6">
          {MenuItems.map((item, index) => (
            <div key={index} className="flex justify-center">
              <MenuCard
                img_url={item.img_url}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
