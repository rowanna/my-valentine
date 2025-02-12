import { ReactNode } from "react";

import Header from "@/app/components/layout/Header/Header";
import Container from "@/app/components/layout/Container/Container";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
