import styled from "styled-components";
import Header from "components/header";
import PopularBrands from "components/header/popular-brands";
import AboutUs from "components/about-us";
import WhyUs from "components/why-us";
import Features from "components/features";

const Home = () => {
  return (
    <Container>
      <Header />
      <PopularBrands />
      <WhyUs />
      <AboutUs />
      <Features />
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  background-color: #fff;
`;

export default Home;
