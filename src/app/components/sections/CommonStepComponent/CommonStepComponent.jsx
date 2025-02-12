import Link from "next/link";

export default function CommonStepComponent({
  title,
  desc,
  selectData,
  nextUrl,
}) {
  return (
    <>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: desc }}></p>
      {selectData.map(({ imgUrl, name }, idx) => (
        <input key={idx} type="select"></input>
      ))}
      <Link href={nextUrl}>다음 단계로 가기</Link>
    </>
  );
}
