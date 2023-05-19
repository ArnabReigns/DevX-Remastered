import React, { useEffect, useState } from "react";
import schedule from "../data/schedule.json";
const Schedule = (props) => {
  return (
    <>
      {schedule?.filter((schedule) => schedule.Day1 == props?.day) ? (
        schedule
          ?.filter((schedule) => schedule.Day1 == props?.day)
          .map((schedule, idx) => (
            <div className="scheduleWrapper" key={idx}>
              <div className="scheduleTime">
                <span className="startTime">{schedule?.startTime}</span>
                <span className="endTime">{schedule?.endTime}</span>
              </div>
              <div className="scheduleDetails">
                <div className="schedulePlace">{schedule?.place}</div>
                <div className="scheduleName">{schedule?.name}</div>
                <div className="scheduleSpeakerWrapper">
                  {schedule?.speaker?.map((speaker, idx) => (
                    <div className="scheduleSpeaker" key={idx}>
                      <img src={speaker.image} alt={speaker?.name} />
                      <a href={speaker.link} target=" _blank">
                        {speaker?.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
      ) : (
        <>Agenda to be updated soon</>
      )}
    </>
  );
};
const Timeline = () => {
  const [day1, setDay1] = useState(true);
  useEffect(() => {
    document
      .querySelectorAll(".tabWrapper")
      .forEach((tab) => tab.classList.remove("activeTab"));
    if (day1)
      document.querySelectorAll(".tabWrapper")[0].classList.add("activeTab");
    else document.querySelectorAll(".tabWrapper")[1].classList.add("activeTab");
  }, [day1]);
  return (
    <div className="schedule" id="schedule">
      <center className="title">Schedule</center>
      <div className="timelineDivWrapper">
        <div className="timelineTab">
          <div className="tabWrapper activeTab" onClick={() => setDay1(true)}>
            Tech<>X</>perience
          </div>
          <div className="tabWrapper" onClick={() => setDay1(false)}>
            Tech-A-Break
          </div>
        </div>
        <div className="timelineWrapper">
          <div className="dateWrapper">
            <span className="dateDigit">{day1 ? 29 : 30}</span>
            <span className="dateMonth">April 2023</span>
          </div>

          <div className="dateWrapper">
            <span>Venue: </span>
            {day1 ? (
              <a
                href="https://goo.gl/maps/1L9s3SZWZwr2CafG9"
                target="_blank"
                className="dateDigit"
                style={{ textDecoration: "underline" }}
              >
                Techno India University
              </a>
            ) : (
              <a
                href="https://goo.gl/maps/MoyqvXgBdUJecYGf8"
                target="_blank"
                className="dateDigit"
                style={{ textDecoration: "underline" }}
              >
                EZCC Purbashree
              </a>
            )}
          </div>

          <Schedule day={day1} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
