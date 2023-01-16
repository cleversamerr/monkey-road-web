import styled from "styled-components";
import ContentWrapper from "hoc/ContentWrapper";
import HeaderContent from "./HeaderContent";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      <Content>
        <HeaderContent />

        <SocialIcons>
          <SocialIcon>
            <SocialLink
              target="_blank"
              href="mailto:thedev.samer@gmail.com"
              color="#fe7777"
            >
              <FiMail />
            </SocialLink>
          </SocialIcon>

          <SocialIcon>
            <SocialLink target="_blank" href="https://wa.me/+972597367603">
              <BsWhatsapp />
            </SocialLink>
          </SocialIcon>

          <SocialIcon>
            <SocialLink target="_blank" href="https://">
              <IoCallSharp href="https://wa.me/+972597367603" />
            </SocialLink>
          </SocialIcon>

          <SocialIcon>
            <SocialLink
              target="_blank"
              href="https://instagram.com/cleversamer_"
            >
              <FaInstagram />
            </SocialLink>
          </SocialIcon>
        </SocialIcons>
      </Content>

      <Clip
        src="/assets/images/header/background.png"
        alt="clip image for styling"
      />

      <Car src="/assets/images/header/car.svg" alt="a red car" />
    </Container>
  );
};

const Container = styled.header`
  overflow: hidden;
  margin-bottom: 100px;
  position: relative;
`;

const Content = styled(ContentWrapper)`
  padding: 70px;
  max-width: 1366px;
  display: flex;
  background-color: #333;
  position: relative;
`;

const Clip = styled.img`
  display: block;
  max-width: 1366px;
  margin: 0 auto;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

const Car = styled.img`
  position: absolute;
  left: 50%;
  bottom: -130px;
  transform: translate(-50%, -50%);
  display: block;
  margin: 0 auto;
  margin-top: -300px;
  width: 550px;
  max-width: 100vh;
`;

const SocialIcons = styled.ul`
  position: absolute;
  top: 50%;
  left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-left: 15px;
`;

const SocialIcon = styled.li`
  transition-duration: 176ms;

  :hover {
    transform: scale(1.15);

    svg {
      fill: #fe7777;
    }
  }

  :active {
    transform: scale(1);
  }
`;

const SocialLink = styled.a`
  svg {
    fill: ${({ color }) => (color ? color : "#fff")};
    font-size: 18px;
  }
`;

export default Header;
