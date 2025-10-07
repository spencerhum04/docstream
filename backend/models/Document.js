import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
    _id: String,
    data: Object,
}, { timestamps: true });

export default mongoose.model("Document", DocumentSchema);