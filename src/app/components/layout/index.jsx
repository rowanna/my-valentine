import Header from "./Header/Header";
import Container from "./Container/Container";
import Wrapper from "./Wrapper/Wrapper";

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
