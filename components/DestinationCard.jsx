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
  const [location, setLocation] = useState(
    `Afryka, Ameryka Południowa, Europa`
  );
  const [time, setTime] = useState(`Afryka, Ameryka Południowa, Europa`);
  const [weather, setWeather] = useState(`Afryka, Ameryka Południowa, Europa`);
  const [airTemp, setAirTemp] = useState(`10,30`);
  const [waterTemp, setWaterTemp] = useState(`10,30`);

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
              emitSelected={(data) => setLocation(data)}
            />
            <NiceSelect
              options={options}
              label={"Kiedy chcesz jechać?"}
              defaultvalue={"Afryka, Ameryka Południowa, Europa"}
              emitSelected={(data) => setTime(data)}
            />
            <NiceSelect
              options={options}
              label={"Jaka pogoda Cię interesuje?"}
              defaultvalue={"Afryka, Ameryka Południowa, Europa"}
              emitSelected={(data) => setWeather(data)}
            />
            <div className={stylesDestination.rc__slider__section}>
              <div
                className={`${stylesDestination.rc__progress__area} mr-2 my-4`}
              >
                <RcSlider
                  label={"Temperatura powietrza"}
                  emitValue={(temp) => setAirTemp(temp)}
                />
              </div>
              <div
                className={`${stylesDestination.rc__progress__area} ml-2 my-4`}
              >
                <RcSlider
                  label={"Temperatura wody"}
                  emitValue={(temp) => setWaterTemp(temp)}
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
