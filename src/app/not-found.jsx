import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <h1>not-found</h1>
      <Link href={"/"}>홈으로 돌아가기</Link>
    </>
  );
}
