import Layout from "@/app/components/layout";
import CommonStepComponent from "@/app/components/sections/CommonStepComponent/CommonStepComponent";

export default function SelectShapePage() {
  return (
    <>
      <Layout>
        <CommonStepComponent
          title={"초콜릿 모양 선택"}
          desc={`오.... 이제 모양을 선택해봐요 <br />세 가지 모양 중에서 선택할 수 있어요.`}
          selectData={[
            {
              imgUrl: "",
              name: "동그란 모양",
            },
            {
              imgUrl: "",
              name: "별 모양",
            },
            {
              imgUrl: "",
              name: "하트 모양",
            },
          ]}
          nextUrl={"selectTopping"}
        ></CommonStepComponent>
      </Layout>
    </>
  );
}
