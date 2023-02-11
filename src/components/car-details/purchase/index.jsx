import styled from "styled-components";
import CustomButton from "components/common/custom-button";
import { BiPhone } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import useLocale from "hooks/useLocale";

const PurchaseCarDetails = ({ car }) => {
  const { i18n, lang } = useLocale();

  const handleMakeCall = () => {};

  const handleWhatsAppCall = () => {};

  return (
    <Container>
      <IconsContainer>
        <CustomButton type="like" />
        <CustomButton type="share" />
      </IconsContainer>

      <TitleContainer>
        <CarTitle>{car.name}</CarTitle>
        <CarPrice>
          {parseInt(car.price).toLocaleString()} {i18n("aed")}
        </CarPrice>
      </TitleContainer>

      <BreakLine />

      {!!car.description && (
        <>
          <DetailsList>
            <DetailsTitle>{i18n("description")}</DetailsTitle>
            <CarDescription>{car.description}</CarDescription>
          </DetailsList>

          <BreakLine />
        </>
      )}

      <DetailsList>
        <DetailsTitle>{i18n("details")}</DetailsTitle>

        <DetailsItem>
          <DetailsItemLeft>{i18n("carModel")}</DetailsItemLeft>
          <DetailsItemRight>{car.model}</DetailsItemRight>
        </DetailsItem>

        <BreakLine />

        <DetailsItem>
          <DetailsItemLeft>{i18n("trimLevel")}</DetailsItemLeft>
          <DetailsItemRight>{car.trimLevel}</DetailsItemRight>
        </DetailsItem>

        <BreakLine />

        <DetailsItem>
          <DetailsItemLeft>{i18n("kiloPerHour")}</DetailsItemLeft>
          <DetailsItemRight>
            {car.kiloPerHour} {i18n("kmph")}
          </DetailsItemRight>
        </DetailsItem>

        <BreakLine />

        <DetailsItem>
          <DetailsItemLeft>{i18n("brand")}</DetailsItemLeft>
          <DetailsItemRight>{car.brand.name[lang]}</DetailsItemRight>
        </DetailsItem>

        <BreakLine />

        <DetailsItem>
          <DetailsItemLeft>{i18n("yearModel")}</DetailsItemLeft>
          <DetailsItemRight>{car.year}</DetailsItemRight>
        </DetailsItem>

        <BreakLine />

        <DetailsItem>
          <DetailsItemLeft>{i18n("color")}</DetailsItemLeft>
          <DetailsItemRight>{car.color[lang]}</DetailsItemRight>
        </DetailsItem>

        <BreakLine />
      </DetailsList>

      <ButtonsContainer>
        <CustomButton
          type="primary"
          onClick={handleMakeCall}
          title={
            <CallContainer>
              <BiPhone /> {i18n("callSeller")}
            </CallContainer>
          }
        />

        <CustomButton
          type="primary"
          color="#1A8331"
          title={
            <CallContainer>
              <AiOutlineWhatsApp /> {i18n("whatsApp")}
            </CallContainer>
          }
          onClick={handleWhatsAppCall}
        />
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: 870px) {
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  > svg {
    cursor: pointer;
    background-color: #fff;
    padding: 4px;
    box-sizing: content-box;
    border-radius: 50%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CarTitle = styled.h3`
  font-weight: 600;
  font-size: 28px;
  text-transform: capitalize;
`;

const CarPrice = styled.h3`
  font-weight: 600;
  font-size: 22px;
  text-transform: capitalize;
`;

const BreakLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 0px;
  border: 1px solid #aaa;
`;

const DetailsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DetailsTitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
  color: #000000;
`;

const DetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailsItemLeft = styled.span`
  font-weight: 500;
  font-size: 15px;
  text-transform: capitalize;
  color: #000000;
`;

const DetailsItemRight = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: #333333;
  text-transform: capitalize;
`;

const CarDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  text-align: justify;
  color: #000000;
`;

const ButtonsContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CallContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #fff;

  svg {
    fill: #fff;
    font-size: 20px;
  }
`;

export default PurchaseCarDetails;
