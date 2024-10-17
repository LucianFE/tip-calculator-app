/* eslint-disable react-refresh/only-export-components */
import { useContext, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [isCustomTip, setIsCustomTip] = useState(false);
  const [people, setPeople] = useState(1);
  const tip = (Number(bill) * Number(tipPercentage)) / 100;
  const total = (Number(tip) + Number(bill)) / Number(people);

  const resetForm = () => {
    setBill(0);
    setTipPercentage(0);
    setPeople(1);
  };

  console.log(isCustomTip);

  return (
    <AppContext.Provider
      value={{
        bill,
        setBill,
        tipPercentage,
        setTipPercentage,
        people,
        setPeople,
        tip,
        total,
        resetForm,
        isCustomTip,
        setIsCustomTip,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
