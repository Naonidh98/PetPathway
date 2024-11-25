import React, { useEffect, useState } from "react";

import { IoTrashBinSharp } from "react-icons/io5";
import { RiAddFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  removeOneToCart,
  removeFromCart,
} from "../slices/cartSlice";

import { buyItems } from "../services/operations/payment";

const ProductCard = ({ data, index, setTotal, total }) => {
  const [quantity, setQuantity] = useState(data.quantity || 1);
  const dispatch = useDispatch();

  return (
    <div key={index}>
      <div class="grid grid-cols-3 items-start gap-4 bg-richblack-800 p-2 rounded">
        <div class="col-span-2 flex items-start gap-4">
          <div class="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
            <img src={data.image} class="w-full h-full object-contain" />
          </div>

          <div class="flex flex-col">
            <h3 class="text-base font-bold text-gray-800">{data.title}</h3>

            <button
              type="button"
              onClick={() => {
                dispatch(removeFromCart(data.id));
              }}
              class="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
            >
              <IoTrashBinSharp />
              REMOVE
            </button>
          </div>
        </div>

        <div class="ml-auto">
          <h4 class="text-lg max-sm:text-base font-bold text-gray-800">
            Rs.{" "}
            <span>{Math.round(data.price * data.quantity * 100) / 100}</span>
          </h4>

          <button
            type="button"
            class="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
          >
            <button>
              <FaMinus
                onClick={() => {
                  if (quantity === 1) {
                    return;
                  }

                  const cartData = {
                    id: data.id,
                    image: data.image,
                    title: data.title,
                    price: data.price,
                  };
                  dispatch(removeOneToCart(cartData));
                  setQuantity(quantity - 1);
                }}
              />
            </button>

            <span class="mx-3 font-bold">{quantity}</span>

            <button
              onClick={() => {
                if (quantity === 5) {
                  return;
                }

                const cartData = {
                  id: data.id,
                  image: data.image,
                  title: data.title,
                  price: data.price,
                };
                dispatch(addToCart(cartData));
                setQuantity(quantity + 1);
              }}
            >
              <RiAddFill />
            </button>
          </button>
        </div>
      </div>
      <hr class="border-gray-300" />
    </div>
  );
};

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [address, setAdress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [subtotal, setTotal] = useState(100);
  const ship = 50;
  const tax = 50;

  const { cart } = useSelector((state) => state.cart);
  const { token, user } = useSelector((state) => state.user);

  useEffect(() => {
    let total = 0;
    cart.map((data) => {
      total = total + data.price * data.quantity;
    });
    setTotal(total);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="text-center w-screen h-screen flex items-center justify-center">
        No items in the cart.
      </div>
    );
  }

  return (
    <div className="w-[98%] max-w-[1440px] mx-auto">
      <div class="font-sans w-full mx-auto  my-[55px]">
        <h1 class="text-3xl font-bold text-gray-800 text-center">
          Shopping Cart
        </h1>

        <div class="grid md:grid-cols-3 gap-8 mt-16">
          <div class="md:col-span-2 space-y-4">
            {cart.map((data, index) => (
              <ProductCard
                data={data}
                index={index}
                total={subtotal}
                setTotal={setTotal}
              />
            ))}
          </div>

          <div class="bg-gray-100 rounded-md p-4 h-max bg-blue-500">
            <h3 class="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
              Order Summary
            </h3>

            <form class="mt-6">
              <div>
                <h3 class="text-base text-gray-800  font-semibold mb-4">
                  Enter Details
                </h3>
                <div class="space-y-3 text-black">
                  <div class="relative flex items-center">
                    <input
                      type="text"
                      placeholder="House Address"
                      onChange={(e) => {
                        setAdress(e.target.value);
                      }}
                      class="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-4 h-4 absolute right-4"
                      viewBox="0 0 682.667 682.667"
                    >
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path
                            d="M0 512h512V0H0Z"
                            data-original="#000000"
                          ></path>
                        </clipPath>
                      </defs>
                      <g
                        clip-path="url(#a)"
                        transform="matrix(1.33 0 0 -1.33 0 682.667)"
                      >
                        <path
                          fill="none"
                          stroke-miterlimit="10"
                          stroke-width="40"
                          d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </form>

            <ul class="text-gray-800 mt-6 space-y-3">
              <li class="flex flex-wrap gap-4 text-sm">
                Subtotal <span class="ml-auto font-bold">Rs. {Math.round(subtotal * 100) / 100}</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Shipping <span class="ml-auto font-bold">Rs. {ship}</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Tax <span class="ml-auto font-bold">Rs. {tax}</span>
              </li>
              <hr class="border-gray-300" />
              <li class="flex flex-wrap gap-4 text-sm font-bold">
                Total{" "}
                <span class="ml-auto">Rs. {Math.round((subtotal+100) * 100) / 100}</span>
              </li>
            </ul>

            <div class="mt-6 space-y-3">
              <button
                type="button"
                onClick={() => {
                  console.log(cart);
                  dispatch(
                    buyItems(
                      token,
                      cart,
                      subtotal + 100,
                      user,
                      navigate,
                      dispatch
                    )
                  );
                }}
                class="bg-yellow-50 text-black font-bold font-poppins text-sm px-4 py-2.5 w-full tracking-wide bg-gray-800 hover:bg-gray-900 rounded-md"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
