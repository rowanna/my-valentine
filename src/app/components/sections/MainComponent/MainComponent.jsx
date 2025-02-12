import Link from "next/link";
import styles from "./MainComponent.module.css";

export default function MainComponent() {
  return (
    <>
      <h2 className={styles.mainTitle}>
        LOVE IS IN THE <span>AIR</span>
      </h2>

      <p className={styles.mainText}>
        상대방을 위해 <br />
        나만의 <strong>커스텀 로쉐</strong>를 만들어 <br />그 분을 향한 마음을
        <strong>테스트</strong>해보세요
      </p>

      <Link href="/selectType">
        <button className={styles.goStartBtn}>Going to make ROCHER</button>
      </Link>
    </>
  );
}
