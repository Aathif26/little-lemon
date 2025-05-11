function MenuCard({img_url, title, price, description}) {
  return (
    <div className="w-72 rounded-lg overflow-hidden bg-[#90b8ac]">
      {/* Image */}
      <img
        src={img_url}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title and Price */}
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold text-gray-900">{title}</h3>
          <span className="text-sm font-semibold text-gray-700">{price}</span>
        </div>

        {/* Description */}
        <p className="text-black text-smv h-28 mt-10">
          {description}
        </p>

        {/* Button */}
        <button className="bg-[#F4CE14] text-black text-sm font-bold px-4 py-2 rounded-xl transition cursor-pointer">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
