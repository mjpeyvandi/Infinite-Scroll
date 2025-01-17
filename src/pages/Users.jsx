import React, { useEffect, useState } from "react";
import "../styles/users.scss";

import { FaFire } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa";
import { DNA } from "react-loader-spinner";

export const Users = () => {
  const [Users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      if (data) {
        setLoading(false);
        setUsers(data.results);
        setDisplayedUsers(data.results.slice(0, 7));
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1
      ) {
        loadMoreUsers();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [displayedUsers, page]);

  const loadMoreUsers = () => {
    const newPage = page + 1;
    setPage(newPage);

    const startIndex = (newPage - 1) * 7;
    const endIndex = startIndex + 7;

    const newUsers = [];
    for (let i = startIndex; i < endIndex; i++) {
      newUsers.push(Users[i % Users.length]);
    }

    setDisplayedUsers((prevUsers) => [...prevUsers, ...newUsers]);
  };
  return (
    <div className="users">
      {!Loading ? (
        displayedUsers?.map((user, key) => (
          <div className="user__card" key={key}>
            <div className="user__card__info">
              <span>{key + 1}</span>
              <div className="user__card__info__box">
                <div className="user__card__img">
                  <img src={user.picture.thumbnail} alt="" className="image" />
                </div>
                <div className="user__card__name">
                  <p className="user__name">
                    {user.name.title +
                      "" +
                      user.name.first +
                      "" +
                      user.name.last}
                  </p>
                  <span>
                    {user.login.username} / {user.gender}
                  </span>
                </div>
              </div>
            </div>
            <div className="user__card__details">
              <div className="user__card__phone">
                <FaFire className="user__phone__icon" />
                <span>{user.phone}</span>
              </div>
              <div className="user__card__email">
                <FaVoicemail />
                <p>{user.email}</p>
              </div>
              <p className="user__card__address">
                {user.location.city}, {user.location.country},{" "}
                {user.location.postcode}, {user.location.state}
              </p>
            </div>
            <div className="user__card__country">
              <img
                src="https://randomuser.me/api/portraits/thumb/men/78.jpg"
                alt=""
                className="user__country__image"
              />
            </div>
          </div>
        ))
      ) : (
        <DNA
        visible={true}
        height="80"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        />
      )}
    </div>
  );
};
