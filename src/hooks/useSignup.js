import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/useGlobalContext";
function useSignup() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(GlobalContext);
  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        dispatch({ type: "SIGN_IN", payload: user });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ...
      });
  };
  const signupWithPasswordAndEmail = (name, photo, email, password) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        const user = userCredential.user;
        dispatch({ type: "SIGN_IN", payload: user });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return { signUpWithGoogle, signupWithPasswordAndEmail, user, error };
}

export { useSignup };
