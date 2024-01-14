import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },

  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);