import React, { useEffect, useState } from "react";
import "../styles/users.scss";

import { DNA } from "react-loader-spinner";
import { UserCard } from "../components/Users/UserCard";

export const Users = () => {
  // eslint-disable-next-line no-unused-vars
  const [Users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [Loading, setLoading] = useState(false);

  // get initial data
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

  // check scroll user for load more items
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

  // Get more users by changing the page
  const loadMoreUsers = async () => {
    setLoading(true);
    const response = await fetch(
      `https://randomuser.me/api/?results=10&page=${page}`
    );
    const newData = await response.json();

    if (newData) {
      setDisplayedUsers((prev) => [...prev, ...newData.results]);
      setPage((curPage) => curPage + page);
      setLoading(false);
    }
  };
  return (
    <div className="users">
      {displayedUsers?.map((user, index) => (
        <UserCard
          key={index}
          index={index}
          image={user.picture.thumbnail}
          name={user.name.title + " " + user.name.first + " " + user.name.last}
          username={user.login.username}
          gender={user.gender}
          phone={user.phone}
          email={user.email}
          city={user.location.city}
          country={user.location.country}
          postcode={user.location.postcode}
          state={user.location.state}
          flag={`https://flagcdn.com/48x36/${user.nat.toLowerCase()}.png`}
        />
      ))}

      {Loading && (
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
