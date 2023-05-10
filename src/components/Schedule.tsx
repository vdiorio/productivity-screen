import React, { useState } from 'react';
import TimeKeeper, { TimeOutput } from 'react-timekeeper';


// eslint-disable-next-line require-jsdoc
function Schedule() {
  const [startTime, setStartTime] = useState('12:00am');
  const [endTime, setEndTime] = useState('12:00am');
  const [showTimePickerStart, setShowTimePickerStart] = useState(false);
  const [showTimePickerEnd, setShowTimePickerEnd] = useState(false);

  const handleDone = (newTime: TimeOutput, isStart: boolean) => {
    if (isStart) {
      setStartTime(newTime.formatted24);
    } else {
      setEndTime(newTime.formatted24);
    }
  };

  const handleTimePickerStartClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowTimePickerStart(true);
  };

  const handleTimePickerEndClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowTimePickerEnd(true);
  };

  const handleTimePickerStartDone = (time: TimeOutput) => {
    handleDone(time, true);
    setShowTimePickerStart(false);
  };

  const handleTimePickerEndDone = (time: TimeOutput) => {
    handleDone(time, false);
    setShowTimePickerEnd(false);
  };

  return (
    <div className="schedule">
      <label htmlFor="startTime">Start Time:</label>
      <div className="time-select" onClick={handleTimePickerStartClick}>
        <div className="selected-time">{startTime}</div>
        {showTimePickerStart && (
          <div
            className='date-picker-container'
            onClick={(e) => e.stopPropagation()}
          >
            <TimeKeeper
              time={startTime}
              onDoneClick={handleTimePickerStartDone}
            />
          </div>
        )}
      </div>
      <label htmlFor="endTime">End Time:</label>
      <div className="time-select" onClick={handleTimePickerEndClick}>
        <div className="selected-time">{endTime}</div>
        {showTimePickerEnd && (
          <div onClick={(e) => e.stopPropagation()}>
            <TimeKeeper
              time={endTime}
              onDoneClick={handleTimePickerEndDone}
            />
          </div>
        )}
      </div>
      <label htmlFor="color">Color:</label>
    </div>
  );
}

export default Schedule;
