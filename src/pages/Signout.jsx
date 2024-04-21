import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

const Signout = () => {
  const signOutFunc = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout");
        toast.blank("signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <button onClick={signOutFunc}>Log out</button>
    </>
  );
};

export default Signout;
