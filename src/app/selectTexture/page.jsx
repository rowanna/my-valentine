import Layout from "@/app/components/layout";
import CommonStepComponent from "@/app/components/sections/CommonStepComponent/CommonStepComponent";

export default function SelectTexturePage() {
  const selectedType = "다크";
  return (
    <>
      <Layout>
        <CommonStepComponent
          title={"초콜릿 질감 선택"}
          desc={`${selectedType}초콜릿으로 고르셨군요! <br />이제 어떤 질감으로 만들어 선물할건지 생각해봐요.`}
          selectData={[
            {
              imgUrl: "",
              name: "쫀득한 질감",
            },
            {
              imgUrl: "",
              name: "부드러운 질감",
            },
            {
              imgUrl: "",
              name: "크런키한 질감",
            },
          ]}
          nextUrl={"selectShape"}
        ></CommonStepComponent>
      </Layout>
    </>
  );
}
