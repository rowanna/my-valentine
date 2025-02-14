"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Usage: App router
import styles from "./CommonStepComponent.module.css";
import { useEffect, useState } from "react";

export default function CommonStepComponent({
  title,
  selectData,
  nextUrl,
  children,
  type,
}) {
  const [selectedRadioValue, setSelectedRadioValue] = useState("");
  const [prevLocalStorageData, setPrevLocalStorageData] = useState({});
  const [selectedData, setSelectedData] = useState({});
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();
  const selectInput = (e, data) => {
    setSelectedRadioValue(() => e.target.value);

    setSelectedData((prev) => ({ ...prev, ...data }));
  };

  const clickNextStepBtn = (e, nextUrl) => {
    if (Object.keys(selectedData).length === 0) {
      setShowToast(() => true);
      setTimeout(() => {
        setShowToast(() => false);
      }, 1500);
      return;
    }
    localStorage.setItem(
      "selectedChocolateData",
      JSON.stringify({
        ...prevLocalStorageData,
        [type]: selectedData.key,
      })
    );
    router.push(nextUrl);
  };
  useEffect(() => {
    const storedData = localStorage.getItem("selectedChocolateData");
    if (storedData) {
      setPrevLocalStorageData(JSON.parse(storedData));
      console.log(JSON.parse(storedData), "=======");
    }
  }, []);
  return (
    <>
      <h3 className={styles.title}>{title} 선택</h3>
      <p className={styles.desc}>{children}</p>

      <form className={styles.form}>
        {selectData.map((data, idx) => (
          <label htmlFor="" key={idx}>
            {data.name}
            <input
              checked={selectedRadioValue === data.key}
              value={data.key}
              name={data.name}
              type="radio"
              onChange={(e) => selectInput(e, data)}
            />
          </label>
        ))}
      </form>

      <div className={styles.btnWrap}>
        <a className={styles.nextStepBtn}>
          <button onClick={() => router.back()}>Go Previous</button>
        </a>
        <a
          onClick={(e) => clickNextStepBtn(e, nextUrl)}
          className={styles.nextStepBtn}
        >
          <button>Go Next</button>
        </a>
      </div>
      <div className={`${styles.toast} ${showToast ? styles.show : ""}`}>
        {title}을 선택해 주세요.
      </div>
    </>
  );
}
