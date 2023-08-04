import { useEffect, useState } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    // Function that runs every second to update the stopwatch
    const updateStopwatch = () => {
      if (seconds === 59) {
        setSeconds(0);
        if (minutes === 59) {
          setMinutes(0);
          setHours((hours) => hours + 1);
        } else {
          setMinutes((minutes) => minutes + 1);
        }
      } else {
        setSeconds((seconds) => seconds + 1);
      }
    };

    // Start the stopwatch when the component is mounted
    interval = setInterval(updateStopwatch, 1000);

    // Clean up the interval when the component is unmounted to avoid resource leaks
    return () => clearInterval(interval);
  }, [seconds, minutes, hours]);

  return (
    <div>
      <p>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default StopWatch;
