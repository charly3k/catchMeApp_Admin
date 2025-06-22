"use client";
import { deleteUser } from "@/networking/deleteUser";
import { getDeletedUsers } from "@/networking/getDeletedUsers";
import { UserProfile } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();

  const [deletedUsers, setDeletedUsers] = useState<UserProfile[]>();
  const handleGetDeletedUsers = async () => {
    const result = await getDeletedUsers();
    if (result) {
      if (result.status) {
        setDeletedUsers(result.data);
      }
    }
  };

  console.log({ deletedUsers });

  const handleDeleteUser = async (id: string) => {
    const result = await deleteUser(id);

    if (result.status) {
      handleGetDeletedUsers();
    }
  };

  useEffect(() => {
    handleGetDeletedUsers();
  }, []);
  return (
    <div className="py-6 pr-6">
      <table className="h-screen overflow-y-auto py-2.5 bg-white rounded-3xl px-10 w-full ">
        <thead>
          <tr>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] p-3   text-left">
              First Name
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] p-3 text-left">
              Last Name
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] p-3 text-left">
              Email
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] p-3 text-left">
              Reason
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] p-3 text-left">
              Profile Picture
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] p-3 text-left">
              Photos
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] p-3 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {deletedUsers &&
            deletedUsers.map((item) => {
              return (
                <tr className="hover:bg-gray-100 " key={item.id}>
                  <td
                    onClick={() => router.push(`/dashboard/users/${item.id}`)}
                    className="text-black text-base font-normal font-['DM Sans'] px-3 py-2 text-left underline cursor-pointer"
                  >
                    {item.firstName}
                  </td>
                  <td
                    onClick={() => router.push(`/dashboard/users/${item.id}`)}
                    className="text-black text-base font-normal font-['DM Sans'] px-3 py-2 text-left underline cursor-pointer"
                  >
                    {item.lastName}
                  </td>
                  <td
                    onClick={() => router.push(`/dashboard/users/${item.id}`)}
                    className="text-black text-base font-normal font-['DM Sans'] px-3 py-2 text-left underline cursor-pointer"
                  >
                    {item.email}
                  </td>
                  <td
                    onClick={() => router.push(`/dashboard/users/${item.id}`)}
                    className="text-black text-base font-normal font-['DM Sans'] px-3 py-2 text-left underline cursor-pointer"
                  >
                    {item.userDeletionReason}
                  </td>
                  <td className="px-3 py-3 text-left">
                    <img
                      src={item?.userPhoto ? item?.userPhoto[0]?.imageUrl : ""}
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="flex items-center gap-4 px-3 py-2">
                    {item?.userPhoto?.map((photo, index) => (
                      <img
                        key={index}
                        src={photo.imageUrl}
                        alt={`Photo ${index}`}
                        className="w-10 h-10 rounded-full"
                      />
                    ))}
                  </td>
                  <td className="px-3 py-2 text-left">
                    <button
                      onClick={() => handleDeleteUser(item.id.toString())}
                      className="text-[#979797] text-base font-normal font-['DM Sans'] underline "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
