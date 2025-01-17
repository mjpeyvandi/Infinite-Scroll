import React from "react";
import "./UserCard.scss";
import { FaFire } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa";

export const UserCard = ({
  index,
  image,
  name,
  username,
  gender,
  phone,
  email,
  city,
  country,
  postcode,
  state,
  flag,
}) => {
  return (
    <div className="user__card">
      <div className="user__card__info">
        <span>{index + 1}</span>
        <div className="user__card__info__box">
          <div className="user__card__img">
            <img src={image} alt="" className="image" />
          </div>
          <div className="user__card__name">
            <p className="user__name">{name}</p>
            <span>
              {username} / {gender}
            </span>
          </div>
        </div>
      </div>
      <div className="user__card__details">
        <div className="user__card__phone">
          <FaFire className="user__phone__icon" />
          <span>{phone}</span>
        </div>
        <div className="user__card__email">
          <FaVoicemail />
          <p>{email}</p>
        </div>
        <p className="user__card__address">
          {city}, {country}, {postcode}, {state}
        </p>
      </div>
      <div className="user__card__country">
        <img src={flag} alt="" className="user__country__image" />
      </div>
    </div>
  );
};
