import React, { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Filter from "../Components/Filter";
import { getWatchesData } from "../Redux/AppReducer/action";
import WatchCard from "../Components/WatchCard";

const Watches = () => {
  const dispatch = useDispatch();
  const watches = useSelector((store) => store.app.watches);

  useEffect(() => {
    dispatch(getWatchesData());
  }, []);

  return (
    <div>
      <Filter />
      <div>
        {/* Map through the watch list here using WatchCard Component */}
        {watches.length > 0 &&
          watches.map((item) => (
            <div key={item.id}>
              <WatchCard {...item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Watches;
