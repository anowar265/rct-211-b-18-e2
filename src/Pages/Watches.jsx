import React, { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Filter from "../Components/Filter";
import { getWatchesData } from "../Redux/AppReducer/action";
import WatchCard from "../Components/WatchCard";
import styled from "styled-components";

const Watches = () => {
  const dispatch = useDispatch();
  const watches = useSelector((store) => store.app.watches);
  const loginData = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getWatchesData());
  }, []);
  console.log(loginData);
  return (
    <div>
      <HomepageWrapper>
        <FilterSortWrapper>
          <Filter />
        </FilterSortWrapper>
        <WatchesWrapper>
          {/* Map through the watch list here using WatchCard Component */}
          {watches.length > 0 &&
            watches.map((item) => <WatchCard key={item.id} {...item} />)}
        </WatchesWrapper>
      </HomepageWrapper>
    </div>
  );
};

export default Watches;

const HomepageWrapper = styled.div`
  display: flex;
  margin: 20px 20px;
  height: 100vh;
`;

const FilterSortWrapper = styled.div`
  width: 400px;
  border: 1px solid red;
  margin-right: 50px;
`;

const WatchesWrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 20px;
`;
