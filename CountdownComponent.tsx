import React from "react";

type CountdownProps = {
  onDone(): void;
  nb: number;
};

const CountdownComponent = (props: CountdownProps) => {
  const [time, setTime] = React.useState(30);

  const tick = React.useCallback(() => {
    if (time === 0) {
      props.onDone();
    } else {
      setTime(time - 1);
    }
  }, [props, time, setTime]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  }, [tick]);

  React.useEffect(() => {
    setTime(30);
  }, [props.nb]);

  return (
    <div>
      <p>{time.toString().padStart(2, "0")}s</p>
    </div>
  );
};

export default CountdownComponent;
