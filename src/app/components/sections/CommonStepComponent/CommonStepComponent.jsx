import Link from "next/link";

export default function CommonStepComponent({
  title,
  selectData,
  nextUrl,
  children,
}) {
  return (
    <>
      <h3>{title}</h3>
      <p>{children}</p>
      <form>
        {selectData.map(({ key, imgUrl, name }, idx) => (
          <label htmlFor="" key={idx}>
            {name}
            <input value={key} name={name} type="radio" />
          </label>
        ))}
      </form>

      <Link href={nextUrl}>다음 단계로 가기</Link>
    </>
  );
}
