import { ReactNode } from "react";

import Header from "@/app/components/layout/Header/Header";
import Container from "@/app/components/layout/Container/Container";
import Wrapper from "@/app/components/layout/Wrapper/Wrapper";

export default function Layout({ children }) {
  return (
    <>
      <Container>
        <Header />
        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  );
}
