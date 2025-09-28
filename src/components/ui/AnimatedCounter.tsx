import React from "react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
  startOnView?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className = "",
  duration = 2000,
  startOnView = true,
}) => {
  // Parse the value to extract the number and any prefix/suffix
  const parseValue = (val: string) => {
    // Handle different formats: +26%, -22%, 150%, etc.
    const match = val.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return { prefix: "", number: 0, suffix: "" };

    const [, prefix, numberStr, suffix] = match;
    const number = parseFloat(numberStr);

    return {
      prefix: prefix || "",
      number: isNaN(number) ? 0 : number,
      suffix: suffix || "",
    };
  };

  const { prefix, number, suffix } = parseValue(value);
  const { currentValue, elementRef } = useCounterAnimation({
    targetValue: number,
    duration,
    startOnView,
  });

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {currentValue}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
