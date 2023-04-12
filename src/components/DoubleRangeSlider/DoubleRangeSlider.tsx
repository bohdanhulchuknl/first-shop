import React, { useMemo } from "react";
//range
import InputRange, { Range } from "react-input-range";
import "react-input-range/lib/css/index.css";
//redux
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import { setValues } from "../../features/leftFilterNavBar/leftFilterNavBarSlice";

interface IDoubleRangeSliderProps {}

const DoubleRangeSlider: React.FC = ({}: IDoubleRangeSliderProps) => {
  const dispatch = useAppDispatch();
  const values = useAppSelector((state) => state.leftFilterNavBar.values);
  const maxValue = useAppSelector((state) => state.leftFilterNavBar.maxValue);
  const minValue = useAppSelector((state) => state.leftFilterNavBar.minValue);

  const handleSliderChange = (newValues: Range) => {
    dispatch(setValues(newValues));
  };

  const handleChangeMin = (e: any) => {
    if (+e.target.value < values.max - 1 || +e.target.value === 0) {
      dispatch(
        setValues({
          ...values,
          min: +e.target.value,
        })
      );
    }

  };

  const handleChangeMax = (e: any) => {
    dispatch(
      setValues({
        ...values,
        max: +e.target.value,
      })
    );
  };

  const step = useMemo(() => {
    const stepVal = Math.floor((maxValue / 100) * 5);
    if (stepVal === 0) {
      return 1;
    }
    return stepVal;
  }, [maxValue]);

  return (
    <div className="">
      <div className="">
        <div>
          <input type="number" value={values.min} onChange={handleChangeMin} />
        </div>
        <div>
          <input type="number" value={values.max} onChange={handleChangeMax} />
        </div>
      </div>
      <div className="p-5">
        <InputRange
          minValue={minValue}
          maxValue={maxValue}
          step={step}
          value={values}
          onChange={handleSliderChange}
          draggableTrack
          formatLabel={(value: number) => `${value}`}
        />
      </div>
    </div>
  );
};

export default DoubleRangeSlider;
