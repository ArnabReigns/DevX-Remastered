import React from "react";
import event from "../data/event.json";
const Events = () => {
  return (
    <div className="events" id="events">
      <h1 className="title">Events</h1>
      <div class="masonry">
        {event?.map((item) => (
          <div className="item">
            <div class="itemImage">
              <img src={item?.image} />
            </div>
            <center className="itemContent">{item?.title}</center>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
