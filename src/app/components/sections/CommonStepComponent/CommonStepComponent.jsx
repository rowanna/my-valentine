"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Usage: App router

import styles from "./CommonStepComponent.module.css";

export default function CommonStepComponent({
  title,
  selectData,
  nextUrl,
  children,
}) {
  const router = useRouter();

  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{children}</p>
      <form className={styles.form}>
        {selectData.map(({ key, imgUrl, name }, idx) => (
          <label htmlFor="" key={idx}>
            {name}
            <input value={key} name={name} type="radio" />
          </label>
        ))}
      </form>

      <div className={styles.btnWrap}>
        <a className={styles.nextStepBtn}>
          <button onClick={() => router.back()}>Go Previous</button>
        </a>
        <Link className={styles.nextStepBtn} href={nextUrl}>
          <button>Go Next</button>
        </Link>
      </div>
    </>
  );
}
