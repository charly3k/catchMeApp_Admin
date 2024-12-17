"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { deactivateUser } from "@/networking/deactivateUser";
import { getAllUsers } from "@/networking/getAllUsers";

import { useBoundStore } from "@/store/store";
import React, { useEffect, useState } from "react";

import { Arrow } from "@/assets/Arrow";
import { NextArrow } from "@/assets/Next";
import { Suspense } from "react";

// const header = [
//   "first name",
//   "last name",
//   "email",
//   "profile pic",
//   "photos",
//   "actions",
// ];

const Users = () => {
  const allUsers = useBoundStore((state) => state.allUsers);
  const setAllUsers = useBoundStore((state) => state.setAllUsers);

  const pageParams = useSearchParams().get("page");

  const currentPage = pageParams ? Number(pageParams) - 1 : 0;

  const [totalPages, setTotalPages] = useState<number>(0);

  const [totalElements, setTotalElements] = useState<number>(0);
  const [numberOfElements, setNumberOfElements] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const totalUsers = allUsers.length;

  console.log({ totalUsers });

  const handleGetUsers = async () => {
    if (!pageParams) return;
    const result = await getAllUsers(currentPage as number);
    console.log(result);

    setAllUsers(result?.data?.content);
    setTotalPages(result?.data?.totalPages);
    //setPageNumber(result?.data?.number);
    setNumberOfElements(result?.data?.numberOfElements);
    setTotalElements(result?.data?.totalElements);
  };

  const nextPage = () => {
    if (Number(pageParams) === totalPages) return;
    router.push(`/dashboard/users?page=${(currentPage as number) + 2}`);
  };

  const previousPage = () => {
    if (pageParams == "1") return;
    router.push(`/dashboard/users?page=${currentPage}`);
  };

  useEffect(() => {
    handleGetUsers();
  }, [pageParams]);

  const router = useRouter();

  const goToPage = () => {
    if (Number(page) > totalPages) {
      return;
    }
    if (Number(page) < 1) {
      return;
    }
    router.push(`/dashboard/users?page=${page}`);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="my-6">
        <div className="w-[1179px] h-[703px] p-12 bg-white rounded-3xl border border-black/25 inline-flex">
          <div className="w-full h-full overflow-y-auto flex gap-16">
            <div className="flex flex-col justify-start items-start gap-[38px]">
              <h4 className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px] ">
                First Name
              </h4>
              {allUsers.map((user) => (
                <h4
                  onClick={() => router.push(`/dashboard/users/${user.id}`)}
                  key={user.id}
                  className="text-black text-base font-normal font-['DM Sans'] underline leading-[30px] cursor-pointer"
                >
                  {user.firstName}
                </h4>
              ))}
            </div>
            <div className="flex flex-col justify-start items-start gap-[38px]">
              <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
                Last Name
              </div>
              {allUsers.map((user) => (
                <p
                  onClick={() => router.push(`/dashboard/users/${user.id}`)}
                  key={user.id}
                  className="text-black text-base font-normal font-['DM Sans'] underline leading-[30px] cursor-pointer"
                >
                  {user.lastName}
                </p>
              ))}
            </div>
            <div className="flex flex-col justify-start items-start gap-[38px]">
              <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
                Email
              </div>
              {allUsers.map((user) => (
                <div
                  key={user.id}
                  className="text-black text-base font-normal font-['DM Sans'] leading-[30px]"
                >
                  {user.email}
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-start items-start gap-[38px]">
              <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
                Profile Picture
              </div>
              {allUsers.map((user) => (
                <div key={user.id} className="flex items-center gap-2">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={user?.userPhoto ? user?.userPhoto[0]?.imageUrl : ""}
                    alt="Profile"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-start items-start gap-[38px]">
              <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
                Photos
              </div>
              {allUsers.map((user) => (
                <div key={user.id} className="flex items-center gap-2">
                  {user.userPhoto &&
                    user.userPhoto.map((photo, index) => (
                      <img
                        key={index}
                        className="w-6 h-6 rounded-full"
                        src={photo.imageUrl}
                        alt={`Photo ${index}`}
                      />
                    ))}
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-start items-start gap-[38px]">
              <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
                Actions
              </div>
              {allUsers.map((user) => (
                <div key={user.id} className="flex items-center gap-6">
                  <button
                    onClick={async () => {
                      await deactivateUser(user.id, !!user.isUserDeactivated);
                    }}
                    className="text-[#979797] text-base font-normal font-['DM Sans'] underline leading-[30px]"
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
        <div className="flex flex-row text-black justify-between  items-center  pt-6">
          <p>
            Page {pageParams} of {totalPages}
          </p>

          <div className="flex flex-col">
            <p className="text-center">
              {" "}
              Showing {numberOfElements} of {totalElements} results
            </p>
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
                <input
                  value={page}
                  onChange={(e) => setPage(Number(e.target.value))}
                  style={{
                    width: "100%",
                    height: "100%",
                    // background: "white",
                    borderRadius: 16,
                    border: "0.50px rgba(0, 0, 0, 0.25) solid",

                    textAlign: "center",
                  }}
                />
              </div>
              <button
                onClick={goToPage}
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
              </button>
            </div>
          </div>

          <div>
            <p>
              <button onClick={previousPage}>
                <Arrow />
              </button>
              <button onClick={nextPage}>
                <NextArrow />
              </button>
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Users;
