import Layout from "@/app/components/layout";
import CommonStepComponent from "@/app/components/sections/CommonStepComponent/CommonStepComponent";

export default function SelectTypePage() {
  return (
    <>
      <Layout>
        <CommonStepComponent
          title={"초콜릿 종류 선택"}
          desc={
            "그 분을 위해 초콜릿을 만들기로 했어요.<br />당신은 어떤 초콜릿으로 만들건가요?"
          }
          selectData={[
            {
              imgUrl: "",
              name: "다크초콜릿",
            },
            {
              imgUrl: "",
              name: "밀크초콜릿",
            },
            {
              imgUrl: "",
              name: "화이트초콜릿",
            },
          ]}
          nextUrl={"selectTexture"}
        ></CommonStepComponent>
      </Layout>
    </>
  );
}
