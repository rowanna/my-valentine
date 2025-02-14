import Layout from "@/app/components/layout";
import CommonStepComponent from "@/app/components/sections/CommonStepComponent/CommonStepComponent";
import { chocolateTypes } from "@/data/chocolateData";

export default function SelectTypePage() {
  return (
    <>
      <Layout>
        <CommonStepComponent
          title={"초콜릿 종류"}
          selectData={chocolateTypes}
          nextUrl={"selectTexture"}
          type={"type"}
        >
          나를 위해 초콜릿을 만들기로 했어요.
          <br />
          당신은 어떤 초콜릿으로 만들건가요?
        </CommonStepComponent>
      </Layout>
    </>
  );
}
