import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import NoImg from "../../assets/NoImg.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { removeFromCart } from "../../slices/cartSlice";

const ItemCard = ({ data, index }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inCart, setInCart] = useState(false);

  const { cart } = useSelector((state) => state.cart);
  console.log(cart);

  useEffect(() => {
    cart?.map((item) => {
      if (item.id === data._id) {
        setInCart(true);
      }
    });
  }, [cart]);

  return (
    <div
      index={index}
      className="text-black relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
    >
      <a
        class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="w-full object-cover"
          src={data?.thumbnail}
          alt="product image"
        />
      </a>
      <div class="mt-4 px-5 pb-5">
        <a href="#">
          <h5 class="text-xl tracking-tight text-slate-900 font-poppins">
            {data?.title}
          </h5>
        </a>
        <div class="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span class="text-md font-bold text-slate-900">
              Price : Rs. {data?.price}
            </span>
          </p>
        </div>

        <div
          className="text-right py-2 text-blue-600 cursor-pointer"
          onClick={() => {
            navigate(`/store/${data?._id}`);
          }}
        >
          more details
        </div>

        <div>
          {!inCart && (
            <button
              onClick={() => {
                const cartData = {
                  id: data._id,
                  image: data.thumbnail,
                  title: data.title,
                  price: data.price,
                  quantity: 1,
                };
                dispatch(addToCart(cartData));
              }}
              className="w-full hover:scale-90 transition-transform flex items-center justify-center gap-2 bg-blue-300 text-white rounded p-4"
            >
              Add to Cart
            </button>
          )}
        </div>
        <div>
          {inCart && (
            <button
              onClick={() => {
                dispatch(removeFromCart(data._id));
                setInCart(false);
              }}
              className="w-full hover:scale-90 transition-transform flex items-center justify-center gap-2 bg-[#780000] text-white rounded p-4"
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
