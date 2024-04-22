import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useState } from "react";
const useCreate = () => {
  const [data, setData] = useState(null);
  const addNewDoc = async (recept) => {
    const docRef = await addDoc(collection(db, "recepts"), recept);
    setData(docRef);
  };

  return { data, addNewDoc };
};

export default useCreate;
