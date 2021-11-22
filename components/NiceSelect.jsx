import { useState } from "react";
import styles from "../styles/css/niceselect.module.css";

const NiceSelect = ({ options, label, defaultvalue, emitSelected }) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(`${defaultvalue}`);

  return (
    <>
      <div className={`${styles.vacation__select__title} mt-5`}>
        <h3>{label}</h3>
      </div>
      <div className={styles.vacation__select} onClick={() => setOpen(!open)}>
        <div className={`${styles.nice__select} ${open && styles.open}`}>
          <span>{select}</span>
          <ul className={styles.list}>
            {options.map((list, index) => (
              <>
                {list.disabled ? (
                  <li
                    className={`${styles.option} 
                  ${list.disabled && styles.disabled}`}
                  >
                    {list.value}
                  </li>
                ) : (
                  <li
                    className={`${styles.option} 
                     ${select == list.value && styles.selected}`}
                    onClick={() => {
                      setSelect(list.value);
                      emitSelected(list.value);
                    }}
                  >
                    {list.value}
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NiceSelect;
