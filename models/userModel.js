import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    user_type: {
      type: Number,
      default: 0,   // 0 for buyer, 1 for seller
    },
    is_active: {
      type: Boolean,
      default: true,   // 0 for buyer, 1 for seller
    },
    wallet_balance: {
      type: Number,
      default: 5000,   // 0 for buyer, 1 for seller
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);