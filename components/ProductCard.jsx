import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = ({ product, badgeText = "Best Seller" }) => {
  const { name, image, price, finalPrice, discount, ratingCount } = product;

  // لو ما فيش rating موجود، نولد واحد عشوائي بين 3 و5
  const rating = product.rating || (Math.random() * 2 + 3).toFixed(1);
  const reviews = ratingCount || Math.floor(Math.random() * 500 + 50); // عدد مراجعات عشوائي بين 50 و550

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden relative group w-full transform transition-transform duration-300 hover:scale-105">
      {/* Badge و Wishlist و Discount */}
      {discount && (
        <div className="absolute top-10 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{discount}%
        </div>
      )}
      <div
        className="absolute top-3 left-3 z-10 bg-gray-500 text-white text-sm font-bold px-3 py-1 rounded 
                      opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
      >
        {badgeText}
      </div>
      <button
        className="absolute top-3 right-3 z-10 bg-white p-3 rounded-full shadow 
                         opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 
                         hover:bg-gray-100 transition-all duration-300"
      >
        <FaHeart className="text-red-500" />
      </button>

      {/* Img Box */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Add to cart icon */}
        <button
          className="absolute bottom-3 right-3 bg-blue-600 text-white p-3 rounded-full shadow 
                           hover:bg-blue-700 transition-colors duration-300"
        >
          <FaShoppingCart />
        </button>
      </div>

      {/* Details */}
      <div className="p-3 mt-3">
        <h3 className="text-base font-semibold text-gray-700">{name}</h3>
        <div className="flex items-center gap-2 mt-1">
          {discount ? (
            <>
              <span className="text-gray-400 line-through text-sm">
                ${price}
              </span>
              <span className="text-green-600 font-bold">${finalPrice}</span>
            </>
          ) : (
            <span className="text-gray-800 font-bold text-lg">${price}</span>
          )}
        </div>

        {/* Rate مع عدد المراجعات */}
        <div className="flex items-center gap-1 mt-1 text-yellow-500">
          <FaStar />
          <span className="text-gray-600 font-medium">{rating}</span>
          <span className="text-gray-400 text-sm">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
