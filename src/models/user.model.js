import timespan from "jsonwebtoken/lib/timespan";
import mongoose, {Schema} from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true, 
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true, 
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
        },
        avatar: {
            type: String, // use the cloudnarry url
            required: true,
        },
        coverImage: {
            type: String // use the cloudnarry url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, "password is required"],
        },
        refreshToken: {
            type: String,

        }
    },
    {
        timeseries: true
    }
)

userSchema.pre("save", )

export const User = mongoose.model("User", userSchema)
