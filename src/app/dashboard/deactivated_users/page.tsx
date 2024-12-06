"use client";

import { getDeactivatedUsers } from "@/networking/getDeactivatedUsers";
import { useBoundStore } from "@/store/store";
import React, { useEffect } from "react";

const header = [
  "first name",
  "last name",
  "email",
  "profile pic",
  "photos",
  "actions",
];

const Deactivated_Users = () => {
  const deactivtedUsers = useBoundStore((state) => state.deactivatedUsers);
  const setDeactivatedUsers = useBoundStore(
    (state) => state.setDeactivatedUsers
  );

  useEffect(() => {
    (async () => {
      const result = await getDeactivatedUsers();
      setDeactivatedUsers(result.data);
    })();
  }, []);

  return (
    <div className="py-6 pr-6">
      <div className="bg-white rounded-3xl mx-auto p-6 my-6">
        <div className="">
          <div className="flex flex-row justify-between mb-6">
            {header.map((item) => (
              <div className="text-red-400 w-2/12" key={item}>
                {item}
              </div>
            ))}
          </div>
          {deactivtedUsers.map((user) => (
            <div className="flex flex-row justify-between mb-6" key={user.id}>
              <div className="text-black w-2/12">{user.firstName}</div>
              <div className="text-black w-2/12">{user.lastName}</div>
              <div className="text-black w-2/12">{user.email}</div>
              <div className="w-2/12">
                <img
                  className="w-6 h-6 rounded-full"
                  src={user.userPhoto ? user.userPhoto[0]?.imageUrl : ""}
                  alt="profile pic"
                />
              </div>
              <div className="w-2/12 flex flex-row">
                {user.userPhoto &&
                  user.userPhoto.map((photo, index) => (
                    <img
                      className="w-6 h-6 rounded-full"
                      key={index}
                      src={photo.imageUrl}
                      //alt="photo"
                    />
                  ))}
              </div>
              <div className="text-black opacity-50 underline w-2/12">
                {"Reactivate"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deactivated_Users;
