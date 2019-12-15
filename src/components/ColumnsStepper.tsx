import React, { useCallback, FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { useColumns, useActiveColumn, setActiveColumn } from "src/store";
import { Column } from "src/store/types";

type ColumnStepperProps = {
  column: Column;
};

const ColumnStepper: FunctionComponent<ColumnStepperProps> = ({ column }) => {
  const dispatch = useDispatch();
  const activeColumn = useActiveColumn();
  const disabled = activeColumn === column;

  const handleClick = useCallback(() => {
    dispatch(setActiveColumn(column));
  }, [column, dispatch]);

  return (
    <Button onClick={handleClick} disabled={disabled}>
      {column}
    </Button>
  );
};

function valuetext(value) {
  return `${value}°C`;
}

export default function ColumnsStepper() {
  const columns = useColumns();
  const activeColumn = useActiveColumn();

  return (
    <>
      <Typography>Number of columns</Typography>
      <Slider
        defaultValue={activeColumn}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={columns[0]}
        max={columns[columns.length - 1]}
      />
    </>
  );
}
