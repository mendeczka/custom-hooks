import { useNumbers } from '../hooks/useNumbers';

export const Numbers = () => {
  const { numbers, handleNumberGen, handleNumberDel } = useNumbers();

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
