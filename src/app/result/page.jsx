"use client";
import Layout from "../components/layout/index";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import generateChocolateMessage from "../../lib/generateMessage"; // src/lib 경로로 불러오기
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const [showLoading, setShowLoading] = useState(false);
  const [resultDesc, setResultDesc] = useState("");
  const LoadingRef = useRef();
  const router = useRouter();

  const handleLoading = () => {
    setShowLoading(() => true);

    setTimeout(() => {
      setShowLoading(() => false);
    }, 1000);
    setTimeout(() => {
      LoadingRef.current.style.display = "none";
    }, 3000);
  };
  useEffect(() => {
    const requiredKeys = ["type", "texture", "shape", "topping", "wrap"];
    const storedData = localStorage.getItem("selectedChocolateData");

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      const hasAllKeys = requiredKeys.every((key) => key in parsedData);

      if (hasAllKeys) {
        handleLoading();
        setResultDesc(() => generateChocolateMessage(parsedData));
      } else {
        router.push("/not-found");
      }
    } else {
      router.push("/not-found");
    }
  }, []);
  return (
    <>
      <Layout>
        <h3 className={styles.title}>결과</h3>
        <p className={styles.desc}>{resultDesc}</p>
      </Layout>
      <div
        ref={LoadingRef}
        className={`${styles.loading} ${
          !showLoading ? styles.hideLoading : ""
        }`}
      >
        {/* <span>Loading ...</span> */}
      </div>
    </>
  );
}
