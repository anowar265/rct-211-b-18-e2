import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const SingleWatch = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState({});

  useEffect(() => {
    axios.get(`/watches/${id}`).then((r) => setCurrent(r.data));
  }, []);

  return (
    <div>
      <h2>Watch name</h2>
      <div>
        <img src={current.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{current.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
