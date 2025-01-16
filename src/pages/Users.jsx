import React from "react";
import "../styles/users.scss";

export const Users = () => {
  return (
    <div className="users">
      <div className="user__card">
        <div className="user__card__info">
          <span>1</span>
          <div className="user__card__info__box">
            <div className="user__card__img">
              <img
                src="https://randomuser.me/api/portraits/thumb/men/78.jpg"
                alt=""
                className="image"
              />
            </div>
            <div className="user__card__name">
              <p className="user__name">Amir Raminfar</p>
              <span>amir20 / Male</span>
            </div>
          </div>
        </div>
        <div className="user__card__details">
          <div className="user__card__phone"></div>
          <div className="user__card__email"></div>
          <p className="user__card__address"></p>
        </div>
        <div className="user__card__country"></div>
      </div>
    </div>
  );
};
