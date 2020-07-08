import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initialValues) => {
  const [value, setValue] = useLocalStorage(key, initialValues);

  console.log("value:", value);

  useEffect(() => {
    console.log("returned value:", value);
    if (value === true) {
      document.querySelector("body").classList.add("dark-mode");
    } else if (value === false) {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [value]);

  return [value, setValue];
};
