import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    profilePicture: {
      type: String,
      default: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1300845620%2Fvector%2Fuser-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DyBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o%3D&tbnid=TKFsruyOZwCqgM&vet=12ahUKEwj6qvmoztaEAxWCdKQEHWfFDTYQMygHegUIARCEAQ..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-avatar&docid=t12EXnbCus7-DM&w=612&h=612&q=profile%20pic%20avatar&ved=2ahUKEwj6qvmoztaEAxWCdKQEHWfFDTYQMygHegUIARCEAQ",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
