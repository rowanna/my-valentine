import Layout from "@/app/components/layout";
import CommonStepComponent from "@/app/components/sections/CommonStepComponent/CommonStepComponent";
import { chocolateToppings } from "@/data/chocolateData";

export default function SelectToppingPage() {
  return (
    <>
      <Layout>
        <CommonStepComponent
          title={"초콜릿 토핑 선택"}
          selectData={chocolateToppings}
          nextUrl={"selectWrap"}
        >
          초콜릿 만드는 마지막 단계에요!
          <br />
          어떤 토핑을 올려서 그 분을 즐겁게 해줄 건가요?🤗
        </CommonStepComponent>
      </Layout>
    </>
  );
}
