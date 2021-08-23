import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Appbar from "../../components/appbar/Appbar";
import "./counter.css";

export default function Counter() {
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [timerId, setTimerId] = useState(0);
  const history = useHistory();

  useEffect(() => {
    let intervalid = null;
    if (startTimer) {
      intervalid = setInterval(() => {
        setTime((prev) => (prev += 1));
      }, 1000);
      setTimerId(intervalid);
    } else {
      clearInterval(timerId);
    }
    //clear interval on component unmount
    return () => {
      if (timerId !== 0) {
        clearInterval(timerId);
      }
    };
  }, [timerId]);

  setTimeout(() => {
    setStartTimer(true);
    // history.push("/success");
  }, 2000);

  setTimeout(() => {
    history.push("/success");
  }, 8000);

  return (
    <div className="counterContainer">
      <div className="promoBrand">
        <div className="counterMenu">
          <div className="Menu">
            <Appbar prompt={time} brand="LOX SERVICES" />
          </div>
        </div>

        <div className="counterWrapper">
          <div className="counters">
            <div className="counter">
              <p>00</p>
            </div>
            <div className="counter_colon">
              <p> :</p>
            </div>
            <div className="counter">
              <p>0{time}</p>
            </div>
          </div>
          <div className="countTotal">
            <span className="totalAmount">Amount</span>
            <span className="totalResult">N{time}000</span>
          </div>
        </div>
      </div>

      <div className="greyBarContainer">
        <div className="greyBar"></div>
      </div>
    </div>
  );
}
