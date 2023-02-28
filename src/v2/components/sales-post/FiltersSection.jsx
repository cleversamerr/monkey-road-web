import styled from "styled-components";

const FiltersSection = ({ salesPosts, onSelectItem }) => {
  const salesPostsCount = salesPosts.list.length;
  const soldCarsCount = salesPosts.list.filter((p) => p.sold).length;
  const notSoldCarsCount = salesPostsCount - soldCarsCount;

  function checkItemSelected(status) {
    return salesPosts.selectedStatus === status;
  }

  return (
    <Container>
      <StatusFilters>
        <Item
          active={checkItemSelected("all")}
          onClick={() => onSelectItem("all")}
        >
          all ({salesPostsCount})
        </Item>

        <Item
          active={checkItemSelected("sold")}
          onClick={() => onSelectItem("sold")}
        >
          sold ({soldCarsCount})
        </Item>

        <Item
          active={checkItemSelected("not sold")}
          onClick={() => onSelectItem("not sold")}
        >
          not sold ({notSoldCarsCount})
        </Item>
      </StatusFilters>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  overflow-x: auto;
`;

const StatusFilters = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 30px;
  min-width: max-content;
`;

const Item = styled.li`
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  color: ${({ active }) => (active ? "#fe7777" : "#000")};
  transition-duration: 176ms;
  cursor: pointer;

  :hover {
    color: #fe7777;
  }

  :active {
    transform: scale(0.97);
  }
`;

export default FiltersSection;
