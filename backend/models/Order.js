const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    order_code: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    prepaid: {
      type: Boolean,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    address : {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
