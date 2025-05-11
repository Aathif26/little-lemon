import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mt-40 h-screen">
      <img src="/assets/Logo.svg" alt="Logo" className="w-32 mb-4" />
      <p>Sorry, the page you are looking for does not exist.</p>
      <button className="mt-4 px-6 py-2 bg-[#F4CE14] text-black font-bold rounded-xl transition cursor-pointer" onClick={() => navigate("/")}>
        Visit Home
      </button>
    </div>
  );
}

export default PageNotFound;
