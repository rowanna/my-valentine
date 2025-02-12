import Layout from "@/app/components/layout";
import CommonStepComponent from "@/app/components/sections/CommonStepComponent/CommonStepComponent";
import { wrapTypes } from "@/data/chocolateData";

export default function SelectWrapPage() {
  return (
    <>
      <Layout>
        <CommonStepComponent
          title={"포장 선택"}
          selectData={wrapTypes}
          nextUrl={"result"}
        >
          찐 최종 마지막!
          <br />
          어떻게 포장해서 마음을 전할까요?
        </CommonStepComponent>
      </Layout>
    </>
  );
}
