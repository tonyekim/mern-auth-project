import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {signInSuccess} from "../features/user/userSlice"

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleCclick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await response.json();
      console.log(data);
      dispatch(signInSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleGoogleCclick}
      type="button"
      className=" bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
};

export default OAuth;
