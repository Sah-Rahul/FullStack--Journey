const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    description: { type: String },
    completed: { type: Boolean, default: false, index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
  },
  { timestamps: true }
);

// Useful indexes for search/sort
todoSchema.index({ createdAt: -1 });
todoSchema.index({ title: "text", description: "text" }); // for $text search (optional)

module.exports = mongoose.model("Todo", todoSchema);
