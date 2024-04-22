import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

function useCollection() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getCollection = async () => {
      const querySnapshot = await getDocs(collection(db, "recepts"));
      const allData = [];
      querySnapshot.forEach((doc) => {
        allData.push({ id: doc.id, ...doc.data() });
      });
      setData(allData);
    };
    getCollection();
  }, []);
  return { data };
}
export {useCollection}
