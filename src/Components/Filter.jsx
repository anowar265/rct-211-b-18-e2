import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getWatchesData } from "../Redux/AppReducer/action";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCateGory = searchParams.getAll("category");
  const [category, setCateGory] = useState(urlCateGory || []);

  const handleCheckBox = (e) => {
    const option = e.target.value;
    let newCateGory = [...category];
    if (category.includes(option)) {
      newCateGory.splice(newCateGory.indexOf(option), 1);
    } else {
      newCateGory.push(option);
    }

    setCateGory(newCateGory);
  };

  useEffect(() => {
    if (category) {
      setSearchParams({
        category,
      });
      dispatch(getWatchesData({ params: { category } }));
    }
  }, [dispatch, category, setSearchParams, searchParams]);

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input
            onChange={handleCheckBox}
            type="checkbox"
            defaultChecked={category.includes("Analog")}
            value="Analog"
          />
          <label>Analog</label>
        </div>
        <div>
          <input
            onChange={handleCheckBox}
            type="checkbox"
            defaultChecked={category.includes("Digital")}
            value="Digital"
          />
          <label>Digital</label>
        </div>
        <div>
          <input
            onChange={handleCheckBox}
            type="checkbox"
            defaultChecked={category.includes("Chronograph")}
            value="Chronograph"
          />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
