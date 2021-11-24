import { useEffect, useRef, useState } from "react";
import styles from "../styles/css/niceselect.module.css";

const NiceSelect = ({ options, label, defaultvalue, emitSelected }) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(`${defaultvalue}`);
  const ref = useRef();

  useEffect(() => {
    const backDrop = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", backDrop);
    return () => {
      document.removeEventListener("mousedown", backDrop);
    };
  }, [open]);

  return (
    <>
      <div className={`${styles.vacation__select__title} mt-5`}>
        <h3>{label}</h3>
      </div>
      <div
        ref={ref}
        className={styles.vacation__select}
        onClick={() => setOpen(!open)}
      >
        <div className={`${styles.nice__select} ${open && styles.open}`}>
          <span>{select}</span>
          <ul className={styles.list}>
            {options.map((list, index) => (
              <>
                {list.disabled ? (
                  <li
                    key={index}
                    className={`${styles.option} 
                  ${list.disabled && styles.disabled}`}
                  >
                    {list.value}
                  </li>
                ) : (
                  <li
                    key={index}
                    className={`${styles.option} 
                     ${select == list.value && styles.selected}`}
                    defaultValue={defaultvalue}
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
