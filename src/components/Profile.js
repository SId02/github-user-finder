import React, { useState } from "react";
import UserData from "./UserData";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();


    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();


    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <section className="px-4 pt-4 pb-4 space-y-4 sm:px-6 lg:px-4 xl:px-6 sm:pb-6 lg:pb-4 xl:pb-6">
        <form className="relative user-form" id="form">
          <div class="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              aria-label="Search a Github User"
              placeholder="Search a Github User"
              value={username}
              onChange={onChangeHandler}
            />
            <button
              className="flex-shrink-0 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="submit"
              onClick={submitHandler}
            >
              Search
            </button>
          </div>
        </form>
      </section>

      <UserData data={data} repositories={repositories} />
    </>
  );
};
export default Profile;
