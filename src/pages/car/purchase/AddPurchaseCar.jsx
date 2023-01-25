import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import AddCar from "components/common/add-car";
import PostRentCarForm from "./post";

const AddPurchaseCar = () => {
  const [levels, setLevels] = useState({ count: 4, active: 1 });

  const handleNext = () => {
    if (levels.active === levels.count) return;
    setLevels({ ...levels, active: levels.active + 1 });
    scroll.scrollToTop();
  };

  const handlePrev = () => {
    if (levels.active === 1) return;
    setLevels({ ...levels, active: levels.active - 1 });
    scroll.scrollToTop();
  };

  return (
    <AddCar
      pageTitles={["home", ">", "post car for sale"]}
      noOfLevels={levels.count}
      activeLevel={levels.active}
    >
      <PostRentCarForm
        onNext={handleNext}
        onPrev={handlePrev}
        activeLevel={levels.active}
        noOfLevels={levels.count}
      />
    </AddCar>
  );
};

export default AddPurchaseCar;
