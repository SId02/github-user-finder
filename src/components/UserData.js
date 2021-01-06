import React from "react";
const UserData = ({ data, repositories }) => {
  return (
    <section className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl">
        <div className="md:flex">
          <div className="p-3 md:flex-shrink-0 ">
            {!data.avatar_url ? (
              " "
            ) : (
              <img
                className="flex items-center justify-center object-cover w-full h-48 border-2 rounded-full md:w-48 border-gray border-rounded"
                src={data.avatar_url}
                alt="avatar"
              />
            )}
            <div className="col-start-1 p-5 text-center">
              <a
                className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                href={data.html_url}
              >
                Visit Profile
              </a>
            </div>
          </div>
          <div className="p-8 user-info">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              {data.name}
            </div>
            <div className="block mt-1 text-lg font-medium leading-tight text-black">
              {data.bio}
            </div>
            <p class="mt-2 text-gray-500">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-4 col-start-1 py-1 px-2 leading-none text-white bg-gray-600 rounded">
                  Followers : <span>{data.followers} </span>
                </div>
                <div className="col-start-1 col-end-6 py-1 px-2 leading-none text-white bg-purple-500 rounded">
                  Following : <span> {data.following} </span>
                </div>
                <div className="col-start-1 col-end-6 py-1 px-1 leading-none text-white bg-yellow-500 rounded">
                  Public Respos : <span>{data.public_repos} </span>
                </div>
                <div className="col-start-1 col-end-6 py-1 px-2 leading-none text-white bg-indigo-700 rounded">
                  Public Gists : <span> {data.public_gists} </span>
                </div>
              </div>
              <div className="p-2">
                <h2 className="text-lg font-medium leading-6 text-black">
                  Repositories
                </h2>
              </div>
              <div className="flex flex-col" id="repos">
                {repositories.slice(0, 5).map((repo) => (
                  <div className="flex border-2 border-gray-300 rounded-sm shadow-lg">
                    <div key={repo.name} className="text-center">
                      <a
                        href={repo.html_url}
                        className="flex items-center justify-center w-full py-4 text-sm font-medium repo"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {repo.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserData;
