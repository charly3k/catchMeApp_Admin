"use client";
import { useRouter } from "next/navigation";
import { deactivateUser } from "@/networking/deactivateUser";
import { getAllUsers } from "@/networking/getAllUsers";

import { useBoundStore } from "@/store/store";
import React, { useEffect } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const authToken = cookies.get("authToken");

console.log({ authToken });

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

const Users = () => {
  const allUsers = useBoundStore((state) => state.allUsers);
  const setAllUsers = useBoundStore((state) => state.setAllUsers);

  /*  useEffect(() => {
    (async () => {
      const allUsers = await totalUsers();
      setTotalUsersData(allUsers.data);

      const allActiveUsers = await activeUsers();

      setActiveUsersData(allActiveUsers.data);
    })();
  }, []); */

  useEffect(() => {
    (async () => {
      const result = await getAllUsers();

      setAllUsers(result?.data);
    })();
  }, []);

  const router = useRouter();

  return (
    <div className="py-6 pr-6">
      {/*   <UsersHeader
        totalUsersData={totalUsersData}
        activeUserData={activeUsersData}
      /> */}
      <div className="bg-white rounded-3xl mx-auto p-6 my-6">
        <div className="">
          <div className="grid grid-cols-6 gap-4 mb-6">
            {header.map((item) => (
              <div className="text-red-400" key={item}>
                {item}
              </div>
            ))}
          </div>

          <div className="h-[27rem] overflow-hidden">
            {allUsers &&
              allUsers.map((user) => (
                <div
                  onClick={() => router.push(`/dashboard/users/${user.id}`)}
                  className="grid grid-cols-6 gap-4 mb-6 items-center"
                  key={user.id}
                >
                  <div className="text-black">{user.firstName}</div>
                  <div className="text-black">{user.lastName}</div>
                  <div className="text-black overflow-hidden">{user.email}</div>
                  <div className="">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={user?.userPhoto ? user.userPhoto[0]?.imageUrl : ""}
                      alt="Profile Pic"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {user?.userPhoto &&
                      user.userPhoto.map((photo, index) => (
                        <img
                          className="w-6 h-6 rounded-full"
                          key={index}
                          src={photo.imageUrl}
                          alt="Photo"
                        />
                      ))}
                  </div>
                  <button
                    onClick={() =>
                      deactivateUser(user.id, !user.isUserDeactivated)
                    }
                    className="text-black opacity-50 underline"
                  >
                    {user.isUserDeactivated ? "Reactivate" : "Deactivate"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>

      {
        //footer section
      }
      <div className="flex flex-row text-black justify-between">
        <p>Page 1 of 1</p>

        <div className="flex flex-col">
          <p className="text-center"> Showing 12 of 100,000 results</p>
          <div
            style={{
              //width: "100%",
              //height: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 16,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#979797",
                fontSize: 16,
                fontFamily: "DM Sans",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Go to page:
            </div>
            <div
              style={{
                width: 106,
                height: 34,
                background: "white",
                borderRadius: 16,
                border: "0.50px rgba(0, 0, 0, 0.25) solid",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "black",
                  fontSize: 14,
                  fontFamily: "DM Sans",
                  fontWeight: "400",
                  lineHeight: 18,
                  wordWrap: "break-word",
                }}
              >
                20
              </div>
            </div>
            <div
              style={{
                color: "#FF0A54",
                fontSize: 16,
                fontFamily: "DM Sans",
                fontWeight: "400",
                textDecoration: "underline",
                wordWrap: "break-word",
              }}
            >
              Load page
            </div>
          </div>
        </div>

        <div>
          <p>
            <button>Previous</button>
            <button>Next</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users;
