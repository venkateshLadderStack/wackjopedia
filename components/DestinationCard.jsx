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
  const [location, setLocation] = useState();
  const [time, setTime] = useState();
  const [weather, setWeather] = useState();
  const [airTemp, setAirTemp] = useState();
  const [waterTemp, setWaterTemp] = useState();

  const submission = () => {
    const data = [
      { location: `${location}` },
      { time: `${time}` },
      { weather: `${weather}` },
      { airTemp: `[${airTemp}]` },
      { waterTemp: `[${waterTemp}]` },
    ];
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className={`${stylesDestination.vacation__left} pb-5`}>
          <div className={stylesDestination.single__vacation__select}>
            <NiceSelect
              options={options}
              label={"Gdzie chcesz jechać?"}
              defaultvalue={"Afryka, Ameryka Południowa, Europa"}
              emitSelected={(data) => {
                data = undefined
                  ? setLocation(data)
                  : setLocation(`Afryka, Ameryka Południowa, Europa`);
              }}
            />
            <NiceSelect
              options={options}
              label={"Kiedy chcesz jechać?"}
              defaultvalue={"Afryka, Ameryka Południowa, Europa"}
              emitSelected={(data) => {
                data = undefined
                  ? setTime(data)
                  : setTime(`Afryka, Ameryka Południowa, Europa`);
              }}
            />
            <NiceSelect
              options={options}
              label={"Jaka pogoda Cię interesuje?"}
              defaultvalue={"Afryka, Ameryka Południowa, Europa"}
              emitSelected={(data) => {
                data == undefined
                  ? setWeather(data)
                  : setWeather(`Afryka, Ameryka Południowa, Europa`);
              }}
            />
            <div className={stylesDestination.rc__slider__section}>
              <div
                className={`${stylesDestination.rc__progress__area} mr-2 my-4`}
              >
                <RcSlider
                  label={"Temperatura powietrza"}
                  emitValue={(temp) => {
                    temp == undefined ? setAirTemp(temp) : setAirTemp(`10,30`);
                  }}
                />
              </div>
              <div
                className={`${stylesDestination.rc__progress__area} ml-2 my-4`}
              >
                <RcSlider
                  label={"Temperatura wody"}
                  emitValue={(temp) => {
                    temp == undefined
                      ? setWaterTemp(temp)
                      : setWaterTemp(`10,30`);
                  }}
                />
              </div>
            </div>
          </div>
          <div onClick={submission} className={stylesDestination.vacation__btn}>
            <a href="#">Szukaj lokalizacji</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesinationCard;
