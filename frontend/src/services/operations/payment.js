import toast from "react-hot-toast";
import { paymentApi } from "../api";
import { resetCart } from "../../slices/cartSlice";
import { apiConnector } from "../apiConnector";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export async function buyItems(
  token,
  data,
  totalAmount,
  userDetails,
  navigate,
  dispatch
) {
  // console.log("buyCourse -> courses",process.env.REACT_APP_BASE_URL)
  const toastId = toast.loading(
    "Please wait while we redirect you to payment gateway",
    {
      position: "bottom-center",
      autoClose: false,
    }
  );
  try {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    totalAmount = Math.round(totalAmount * 100) / 100;
    console.log(totalAmount);
    

    if (!res) {
      toast.error("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const orderResponse = await apiConnector(
      "POST",
      paymentApi.capture_payment,
      { totalAmount: totalAmount },
      {
        Authorisation: `Bearer ${token}`,
      }
    );
    if (!orderResponse.data.success) {
      toast.error(orderResponse.data.message);
      console.log("BuyItems -> orderResponse", orderResponse);
      toast.dismiss(toastId);
      return;
    }
    console.log("BuyItems -> orderResponse", orderResponse);
    const options = {
      key: "rzp_test_uf2G1pFwc8KPdp",
      currency: orderResponse.data.currency,
      amount: orderResponse.data.amount.toString(),
      order_id: orderResponse.data.orderId,
      name: "Pet Pathway",
      description: "Thank you for purchasing",

      prefill: {
        name: userDetails?.firstName + " " + userDetails?.lastName,
        email: userDetails?.email,
      },
      handler: async function (response) {
        console.log("buyCourse -> response", response);
        //sendPaymentSuccessEmail(response, orderResponse.data.amount, token);
        verifypament(response, data, token, navigate, dispatch);
      },
      theme: {
        color: "#686CFD",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      toast.error("Payment Failed");
    });
    toast.dismiss(toastId);
  } catch (error) {
    toast.dismiss(toastId);
    toast.error("Something went wrong");
    console.log("buyCourse -> error", error);
  }
}

async function verifypament(response, data, token, navigate, dispatch) {
  const toastId = toast.loading("Please wait while we verify your payment");
  try {
    const res = await apiConnector(
      "POST",
      paymentApi.verify_payment,
      {
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_order_id: response.razorpay_order_id,
        razorpay_signature: response.razorpay_signature,
        data: data,
      },
      {
        Authorisation: `Bearer ${token}`,
      }
    );
    console.log("verifypament -> res", res);
    if (!res.data.success) {
      toast.error(res.message);
      return;
    }

    toast.success("Payment Successfull");
    navigate("/cart");
    dispatch(resetCart());
  } catch (err) {
    toast.error("Payment Failed");
    console.log(err);
  }
  toast.dismiss(toastId);
}
