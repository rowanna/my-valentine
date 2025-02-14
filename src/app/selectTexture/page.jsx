import Layout from "@/app/components/layout";
import CommonStepComponent from "@/app/components/sections/CommonStepComponent/CommonStepComponent";
import { chocolateTextures } from "@/data/chocolateData";

export default function SelectTexturePage() {
  return (
    <>
      <Layout>
        <CommonStepComponent
          title={"초콜릿 질감"}
          selectData={chocolateTextures}
          nextUrl={"selectShape"}
          type={"texture"}
        >
          3가지 텍스처가 있어요.
          <br /> 이제 어떤 질감으로 만들건지 생각해봐요.
        </CommonStepComponent>
      </Layout>
    </>
  );
}
