import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Location from "components/common/search-page/Location";
import ProfileNavigation from "components/user/ProfileNavigation";
import PostCar from "components/post-car";
import { routes } from "client";
import rentApi from "api/car/rent";
import Loader from "components/loader";
import useLocale from "hooks/useLocale";

const RentalPosts = () => {
  const { i18n, lang } = useLocale();
  const navigate = useNavigate();
  const [rentalPosts, setRentalPosts] = useState({ loading: true, list: [] });

  useEffect(() => {
    rentApi.office
      .getMyRentCars(0)
      .then((res) => setRentalPosts({ loading: false, list: res.data.cars }))
      .catch((err) => setRentalPosts({ loading: false, list: [] }));
  }, []);

  const handleDeletePost = (carId) => {};

  const handleViewDetails = (carId) => {
    navigate(routes.rentCarDetails.navigate(carId));
  };

  return (
    <Container>
      <Location
        pageTitles={[
          i18n("home"),
          i18n("arrow"),
          i18n("profile"),
          i18n("arrow"),
          i18n("rentalPosts"),
        ]}
      />

      <Content lang={lang}>
        <ProfileNavigation activeItem="rental posts" />

        {!!rentalPosts.list.length ? (
          <PostsContainer>
            {rentalPosts.list.map((postCar) => (
              <PostCar
                key={postCar._id}
                data={postCar}
                onDelete={() => handleDeletePost(postCar._id)}
                onViewDetails={() => handleViewDetails(postCar._id)}
              />
            ))}
          </PostsContainer>
        ) : rentalPosts.loading ? (
          <Loader />
        ) : (
          <EmptyPosts>
            <EmptyPostsImage src="/assets/images/empty-3.svg" alt="" />
            <EmptyPostsTitle>{i18n("empty")}</EmptyPostsTitle>
            <EmptyPostsSubtitle>{i18n("noPosts")}</EmptyPostsSubtitle>
          </EmptyPosts>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.main`
  width: 100vw;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #fafafa;
  padding: 60px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (max-width: 768px) {
    padding: 30px;
    padding-bottom: 50px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ lang }) => (lang === "en" ? "row" : "row-reverse")};
  gap: 30px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const EmptyPosts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const EmptyPostsImage = styled.img`
  width: 180px;
`;

const EmptyPostsTitle = styled.h4`
  text-transform: capitalize;
`;

const EmptyPostsSubtitle = styled.h5`
  font-weight: 600;
`;

const PostsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: center;
  grid-gap: 20px;

  > * {
    margin: 0 auto;
  }
`;

export default RentalPosts;
