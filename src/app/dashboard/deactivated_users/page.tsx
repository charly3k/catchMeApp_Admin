"use client";

import { deactivateUser } from "@/networking/deactivateUser";
import { getDeactivatedUsers } from "@/networking/getDeactivatedUsers";
import { useBoundStore } from "@/store/store";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { toast } from "react-toastify";

const Deactivated_Users = () => {
  const deactivtedUsers = useBoundStore((state) => state.deactivatedUsers);
  const setDeactivatedUsers = useBoundStore(
    (state) => state.setDeactivatedUsers
  );

  const router = useRouter();

  const handleGetDeativatedUsers = async () => {
    const result = await getDeactivatedUsers();
    setDeactivatedUsers(result.data);
    console.log(result);
  };

  const setDisplayDeleteModal = useBoundStore(
    (state) => state.setDisplayDeleteModal
  );

  const setDeleteUserId = useBoundStore((state) => state.setDeleteUserId);

  useEffect(() => {
    handleGetDeativatedUsers();
  }, []);

  const handleDeactivateUser = async (id: number, type: boolean) => {
    const result = await deactivateUser(id, type);
    if (result.status == 200) {
      console.log(result);

      handleGetDeativatedUsers(); // Reload data after deactivation
    } else {
      toast(result.message, {
        autoClose: 5000,
      });
    }
  };

  const openModal = (userId: string) => {
    setDeleteUserId(userId);
    setDisplayDeleteModal(true);
  };

  return (
    <div className="py-6 pr-6">
      <table className=" h-screen overflow-y-auto py-2.5 bg-white rounded-3xl px-10 w-full  ">
        <thead>
          <tr>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] ">
              First Name
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] ">
              Last Name
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] ">
              Email
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] ">
              Profile Picture
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] ">
              Photos
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] ">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {deactivtedUsers.map((user) => (
            <tr className="hover:bg-gray-100" key={user.id}>
              <td
                onClick={() => {
                  router.push(`/dashboard/users/${user.id}`);
                }}
                className="text-black text-base font-normal font-['DM Sans']  px-3 py-3 text-left underline cursor-pointer"
              >
                {user.firstName}
              </td>
              <td
                onClick={() => {
                  router.push(`/dashboard/users/${user.id}`);
                }}
                className="text-black text-base font-normal font-['DM Sans']  px-3 py-3 text-left underline cursor-pointer"
              >
                {user.lastName}
              </td>
              <td
                onClick={() => {
                  router.push(`/dashboard/users/${user.id}`);
                }}
                className="text-black text-base font-normal font-['DM Sans']  px-3 py-3 text-left underline cursor-pointer"
              >
                {user.email}
              </td>
              <td className="px-3 py-3 text-left">
                <img
                  src={user?.userPhoto ? user?.userPhoto[0]?.imageUrl : ""}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="flex items-center gap-4 px-3 py-6">
                {user?.userPhoto?.map((photo, index) => (
                  <img
                    key={index}
                    src={photo.imageUrl}
                    alt={`Photo ${index}`}
                    className="w-10 h-10 rounded-full"
                  />
                ))}
              </td>
              <td className="gap-4 px-3 py-6">
                <button
                  onClick={() =>
                    handleDeactivateUser(
                      user.id,
                      user.isUserDeactivated ? false : true
                    )
                  }
                  className="text-[#979797] text-base font-normal font-['DM Sans'] underline "
                >
                  {user.isUserDeactivated ? "Reactivate" : "Deactivate"}
                </button>
                <button
                  className="text-[#979797] text-base text-black font-normal font-['DM Sans'] underline "
                  onClick={() => openModal(user.id.toString())}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deactivated_Users;
