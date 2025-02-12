import Layout from "@/app/components/layout";
import CommonStepComponent from "@/app/components/sections/CommonStepComponent/CommonStepComponent";

export default function SelectWrapPage() {
  return (
    <>
      <Layout>
        <CommonStepComponent
          title={"포장 선택"}
          desc={`찐 최종 마지막!<br />어떻게 포장해서 마음을 전할까요?`}
          selectData={[
            {
              imgUrl: "",
              name: "고급 포장",
            },
            {
              imgUrl: "",
              name: "자연친화적인 포장",
            },
            {
              imgUrl: "",
              name: "리본 장식",
            },
          ]}
          nextUrl={"result"}
        ></CommonStepComponent>
      </Layout>
    </>
  );
}
