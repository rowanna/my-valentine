import Layout from "@/app/components/layout";
import CommonStepComponent from "@/app/components/sections/CommonStepComponent/CommonStepComponent";
import { wrapTypes } from "@/data/chocolateData";

export default function SelectWrapPage() {
  return (
    <>
      <Layout>
        <CommonStepComponent
          title={"포장"}
          selectData={wrapTypes}
          nextUrl={"result"}
          type={"wrap"}
        >
          찐 최종 마지막!
          <br />
          포장한다면 어떻게 포장하실건가요?
        </CommonStepComponent>
      </Layout>
    </>
  );
}
