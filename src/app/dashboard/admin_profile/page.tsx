import React from "react";

const header = [
  "first name",
  "last name",
  "email",
  "profile pic",
  "photos",
  "actions",
];
const usersData = [
  {
    id: 1,
    name: "John",

    email: "john@gamil.com",
    profilePic: "https://randomuser.me/api/port",
    photos: [
      { url: "https://randomuser.me/api/port" },
      { url: "https://randomuser.me/api/port" },
    ],
    actions: "Deactivate",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@gamil.com",
    profilePic: "https://randomuser.me/api/port",
    photos: [
      { url: "https://randomuser.me/api/port" },
      { url: "https://randomuser.me/api/port" },
    ],
    actions: "Deactivate",
  },
  {
    id: 3,
    name: "Smith",
    email: "john@gmail.com",
    profilePic: "https://randomuser.me/api/port",
    photos: [
      { url: "https://randomuser.me/api/port" },
      { url: "https://randomuser.me/api/port" },
    ],
    actions: "Deactivate",
  },
  {
    id: 4,
    name: "Jane",
    email: "jane@gmail.com",
    profilePic: "https://randomuser.me/api/port",
    photos: [
      { url: "https://randomuser.me/api/port" },
      { url: "https://randomuser.me/api/port" },
    ],
    actions: "Deactivate",
  },
];

const Admin_Profile = () => {
  return (
    <div className="py-6 pr-6">
      {" "}
      <div className="flex">
        <button className="bg-white text-slate-400 rounded-4xl py-2.5 px-3.5 mr-3.5">
          your Profile
        </button>
        <button className="bg-red-500 rounded-4xl py-2.5 px-3.5">
          Other admins
        </button>
      </div>
      <div className="bg-white rounded-3xl mx-auto p-6 my-6">
        <div className="flex flex-row justify-between mb-6">
          {header.map((item) => (
            <div className="text-red-400 w-2/12" key={item}>
              {item}
            </div>
          ))}
        </div>
        {usersData.map((user) => (
          <div className="flex flex-row justify-between mb-6" key={user.id}>
            <div className="text-black w-2/12">{user.name}</div>
            <div className="text-black w-2/12">{user.name}</div>
            <div className="text-black w-2/12">{user.email}</div>
            <div className="w-2/12">
              <img
                className="text-black"
                src={user.profilePic}
                alt="profile pic"
              />
            </div>
            <div className="w-2/12 flex flex-row">
              {user.photos.map((photo, index) => (
                <img
                  className="text-black"
                  key={index}
                  src={photo.url}
                  //alt="photo"
                />
              ))}
            </div>
            <div className="text-black opacity-50 underline w-2/12">
              {user.actions}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin_Profile;
