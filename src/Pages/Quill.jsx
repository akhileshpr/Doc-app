import { collection, getDocs, setDoc, doc } from "firebase/firestore";
// import ReactQuill from "react-quill";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";

function Quill() {
  const [getFireData, setGetFireData] = useState([]);
  const { id } = useParams();
  const refCollection = collection(db, "doc");
  const [type, setType] = useState({});

  // console.log(id);
  const getData = async () => {
    const data = await getDocs(refCollection);
    const finalData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setGetFireData(finalData);
    console.log(finalData);
  };

  useEffect(() => {
    getData();
  }, []);

  const singleData = getFireData.filter((data) => data.id === id);

  const handleChange = async (value) => {
    await setDoc(doc(db, "doc", id), {
      title: singleData[0]?.title,
      description: value,
    });

  };
  return <div>123</div>;
}

export default Quill;
