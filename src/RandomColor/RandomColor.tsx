import { useRandomColor } from '../hooks/useRandomColor';

export const RandomColor = () => {
  const color = useRandomColor('dark');

  if (!color) return null;

  return (
    <div
      style={{
        width: 300,
        height: 300,
        backgroundColor: color,
      }}
    ></div>
  );
};
