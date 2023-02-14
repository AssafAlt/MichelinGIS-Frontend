import React, { useState, useEffect } from "react";

import PointCreator from "./PointCreator";

const PointsCreator = (props) => {
  return (
    <div>
      {props.rests &&
        props.rests.map((rest) => <PointCreator key={rest._id} props={rest} />)}
    </div>
  );
};

export default PointsCreator;
