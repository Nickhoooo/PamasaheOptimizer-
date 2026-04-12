const mongoose = require("mongoose")

const historySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        from: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
        fare:{
            type: Number,
            required: true,
        },
        transportMode:{
            type: String,
            required: true,
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("History", historySchema)