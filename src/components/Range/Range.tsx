import React, { useState } from "react";
import "./Range.scss";

interface IRange {
  min: number,
  max: number,
  value: number,
  label?: string,
}

export const Range: React.FC<IRange> = ({ min = 0, max = 100, value = 0, label }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const calculateBallonPosition = (): number => {
    const inputWidth = 600;
    const width = inputWidth - 15;
    const percent = (currentValue - min) / (max - min);
    const offset = -3;
    return width * percent + offset;
  }

  return (
    <div className="range">
      <div
        className="range__ballon"
        style={{ left: calculateBallonPosition() }}
      >
        <span className="range__ballon__value">{currentValue}</span>
        <span className="range__ballon__label">{label}</span>
      </div>

      <input
        type="range"
        value={currentValue}
        min={min}
        max={max}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => (
          setCurrentValue(Number(event.target.value)
        ))}
      />
    </div>
  );
};
