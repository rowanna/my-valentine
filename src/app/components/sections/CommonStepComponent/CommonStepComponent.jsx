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
}) {
  const [selectedRadioValue, setSelectedRadioValue] = useState("");
  const [prevLocalStorageData, setPrevLocalStorageData] = useState({});
  const [selectedData, setSelectedData] = useState({});
  const router = useRouter();
  const selectInput = (e, data) => {
    setSelectedRadioValue(() => e.target.value);

    setSelectedData((prev) => ({ ...prev, ...data }));
  };

  const clickNextStepBtn = (e) => {
    localStorage.setItem(
      "selectedChocolateData",
      JSON.stringify({
        ...prevLocalStorageData,
        [selectedData.type]: selectedData.key,
      })
    );
  };
  useEffect(() => {
    const storedData = localStorage.getItem("selectedChocolateData");
    if (storedData) {
      setPrevLocalStorageData(JSON.parse(storedData));
    }
  }, []);
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
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
        <Link
          onClick={() => clickNextStepBtn()}
          className={styles.nextStepBtn}
          href={nextUrl}
        >
          <button>Go Next</button>
        </Link>
      </div>
    </>
  );
}
