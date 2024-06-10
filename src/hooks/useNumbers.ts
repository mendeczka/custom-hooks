import { useState } from 'react';

export const useNumbers = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleNumberGen = () => {
    const num = Math.round(Math.random() * 100000);
    setNumbers((prevNum) => [...prevNum, num]);
  };

  const handleNumberDel = (indexToDel: number) => {
    setNumbers((prevNumbers) =>
      prevNumbers.filter((_, index) => index !== indexToDel),
    );
  };

  return {
    numbers,
    handleNumberGen,
    handleNumberDel,
  };
};
