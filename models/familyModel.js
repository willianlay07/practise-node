import mongoose from "mongoose";

const familySchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Enter your first name!"],
      trim: true,
    },
    middlename: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "Enter your last name"],
      trim: true,
    },
    mobile: {
      type: Number,
      required: [true, "Enter your mobile number"],
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Family = mongoose.model("Family", familySchema);

export default Family;
