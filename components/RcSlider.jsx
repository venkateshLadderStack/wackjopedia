import rcStyle from "../styles/css/rcSlider.module.css";
import Slider from "rc-slider";

const { Range } = Slider;

function log(value) {
  console.log(value); //eslint-disable-line
}

const RcSlider = ({ label }) => {
  return (
    <>
      <div className={rcStyle.rc__slider__title}>
        <h3>{label}</h3>
        <p className={rcStyle.value__label}>10 °C - 30 °C</p>
        <Range
          defaultValue={[20, 30]}
          pushable
          trackStyle={[
            {
              backgroundColor: `#FFBC11`,
            },
            { backgroundColor: "green" },
          ]}
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
