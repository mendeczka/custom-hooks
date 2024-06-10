import { useState } from 'react';

export const Numbers = () => {
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
  return (
    <div>
      <ul>
        {numbers.map((num, i) => (
          <li key={i}>
            <p>{num}</p>
            <button onClick={() => handleNumberDel(i)}>Usuń</button>
          </li>
        ))}
      </ul>
      <button onClick={handleNumberGen}>Generuj</button>
    </div>
  );
};
