import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { useColumns, useActiveColumn, setActiveColumnAction } from "src/store";

const useColumnsArray = () => {
  const columns = useColumns();
  return useMemo(
    () => new Array(columns).fill(undefined).map((v, index) => index + 1),
    [columns]
  );
};

export default function ColumnsStepper() {
  const dispatch = useDispatch();
  const columns = useColumnsArray();
  const activeColumn = useActiveColumn();

  const handleChange = useCallback(
    (e, value) => {
      dispatch(setActiveColumnAction(value));
    },
    [dispatch]
  );

  return (
    <>
      <Typography>Number of columns</Typography>
      <Slider
        defaultValue={activeColumn}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={columns[0]}
        max={columns[columns.length - 1]}
        onChange={handleChange}
      />
    </>
  );
}
