import { useState } from "react";
import styled from "styled-components";
import { BiPlus, BiMinus } from "react-icons/bi";

const FilterSection = ({ title, withIcon, children }) => {
  const [showContent, setShowContent] = useState(true);

  const handleShowContent = () => setShowContent(true);

  const handleHideContent = () => setShowContent(false);

  return (
    <Container>
      <TopRow>
        <SectionTitle>{title}</SectionTitle>
        {withIcon && !showContent && <BiPlus onClick={handleShowContent} />}
        {withIcon && showContent && <BiMinus onClick={handleHideContent} />}
      </TopRow>

      {showContent && children}
    </Container>
  );
};

const Container = styled.section`
  padding: 15px;
  border-bottom: 1.5px solid #c2c2c2;

  :first-of-type {
    padding-top: 10px;
  }

  :last-of-type {
    border-bottom: none;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

const SectionTitle = styled.h4``;

export default FilterSection;
