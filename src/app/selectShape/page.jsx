import Layout from "@/app/components/layout";
import CommonStepComponent from "@/app/components/sections/CommonStepComponent/CommonStepComponent";
import { chocolateShapes } from "@/data/chocolateData";
export default function SelectShapePage() {
  return (
    <>
      <Layout>
        <CommonStepComponent
          title={"초콜릿 모양"}
          selectData={chocolateShapes}
          nextUrl={"selectTopping"}
          type={"shape"}
        >
          오.... 이제 모양을 선택해봐요 <br />세 가지 모양 중에서 선택할 수
          있어요.
        </CommonStepComponent>
      </Layout>
    </>
  );
}
