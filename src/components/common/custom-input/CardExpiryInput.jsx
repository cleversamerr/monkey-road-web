import styled from "styled-components";
import TextInput from "./TextInput";

const CardExpiryInput = ({ month, year, onMonthChange, onYearChange }) => {
  return (
    <Container>
      <SubContainer>
        <Title>month</Title>
        <TextInput value={month} placeholder="06" onChange={onMonthChange} />
      </SubContainer>

      <SubContainer>
        <Title>year</Title>
        <TextInput value={year} placeholder="26" onChange={onYearChange} />
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 15px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.h5`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export default CardExpiryInput;
