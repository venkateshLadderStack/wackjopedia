import React, { useEffect, useState } from "react";
import rcStyle from "../styles/css/rcSlider.module.css";
import Slider, { SliderTooltip } from "rc-slider";

const { Handle } = Slider;
const style = { width: 250, marginBottom: "50px" };
// function log(value) {
//   console.log(value); //eslint-disable-line
// }
const wrapperStyle = { width: 400, margin: 50 };

const { createSliderWithTooltip } = Slider;
const Slide = createSliderWithTooltip(Slider.Range);
const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip prefixCls="rc-slider-tooltip">
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};
const RcSlider = ({ label, emitValue }) => {
  const [mintemp, setMinTemp] = useState(10);
  const [maxTemp, setMaxTemp] = useState(30);
  const values = (value) => {
    setMinTemp(value[0]);
    setMaxTemp(value[1]);
    const temp = value;
    emitValue(temp);
  };

  return (
    <>
      <div className={rcStyle.rc__slider__title}>
        <h3>{label}</h3>
        <p className={rcStyle.value__label}>
          {mintemp}°C- {maxTemp}°C
        </p>
        <Slide
          min={-10}
          max={50}
          pushable
          defaultValue={[mintemp, maxTemp]}
          onChange={values}
          trackStyle={[{ backgroundColor: `#FFBC11` }]}
          handleStyle={[
            { backgroundColor: "#A2BCFF" },
            { backgroundColor: "#A2BCFF" },
          ]}
          railStyle={{ backgroundColor: "#2D50AB" }}
        />
      </div>
    </>
  );
};

export default RcSlider;
