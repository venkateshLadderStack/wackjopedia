import NiceSelect from "./NiceSelect";
import stylesDestination from "../styles/css/destination.module.css";
import RcSlider from "./RcSlider";
import { useState } from "react";

const options = [
  {
    label: "Afryka, Ameryka Południowa, Europa",
    value: "Afryka, Ameryka Południowa, Europa",
  },
  {
    label: "Some option",
    value: "Some option",
  },
  {
    label: "Another option",
    value: "Another option",
  },
  {
    label: "Diabled",
    value: "Diabled",
    disabled: true,
  },
  {
    label: "Potato",
    value: "Potato",
  },
];

const DesinationCard = () => {
  const [value, setValue] = useState({});
  console.log(value);
  return (
    <>
      <div className={`${stylesDestination.vacation__left} pb-5`}>
        <div className={stylesDestination.single__vacation__select}>
          <NiceSelect
            options={options}
            label={"Gdzie chcesz jechać?"}
            defaultvalue={"Afryka, Ameryka Południowa, Europa"}
            emitSelected={(data) => {
              setValue(data);
            }}
          />
          <NiceSelect
            options={options}
            label={"Kiedy chcesz jechać?"}
            defaultvalue={"Afryka, Ameryka Południowa, Europa"}
            emitSelected={(data) => {
              setValue(data);
            }}
          />
          <NiceSelect
            options={options}
            label={"Jaka pogoda Cię interesuje?"}
            defaultvalue={"Afryka, Ameryka Południowa, Europa"}
            emitSelected={(data) => {
              setValue(data);
            }}
          />
          <div className="rc__slider__section">
            <div className="rc__progress__area mr-2 my-4">
              <RcSlider label={"Temperatura powietrza"} />
            </div>
            <div className="rc__progress__area ml-2  my-4">
              <RcSlider label={"Temperatura wody"} />
            </div>
          </div>
        </div>
        <div className={stylesDestination.vacation__btn}>
          <a href="#">Szukaj lokalizacji</a>
        </div>
      </div>
    </>
  );
};

export default DesinationCard;
