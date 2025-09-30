"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { deactivateUser } from "@/networking/deactivateUser";
import { getAllUsers } from "@/networking/getAllUsers";

import { useBoundStore } from "@/store/store";
import React, { useEffect, useState } from "react";

import { Arrow } from "@/assets/Arrow";
import { NextArrow } from "@/assets/Next";
import { Suspense } from "react";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import { searchUser } from "@/networking/searchUser";
import { Search } from "@/assets/Search";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Users />
    </Suspense>
  );
}
const Users = () => {
  const allUsers = useBoundStore((state) => state.allUsers);
  const setAllUsers = useBoundStore((state) => state.setAllUsers);
  const [search, setSearch] = useState<string>("");

  const pageParams = useSearchParams().get("page");

  const currentPage = pageParams ? Number(pageParams) - 1 : 0;

  const [totalPages, setTotalPages] = useState<number>(0);

  const [totalElements, setTotalElements] = useState<number>(0);
  const [numberOfElements, setNumberOfElements] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  /*   const handleDeactivateUser = async (id: number, type: boolean) => {
    const result = await deactivateUser(id, type);
    if (result.status == 200) {
      await handleGetUsers(); // Reload data after deactivation
    } else {
      toast(result.message, {
        autoClose: 5000,
      });
    }
  }; */

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

  if (!allUsers) {
    return <div>No users</div>;
  }

  const handleDeactivateUser = async (id: number, type: boolean) => {
    try {
      setIsLoading(true);
      const result = await deactivateUser(id, type);
      if (result.status == 200) {
        await handleGetUsers();
        setIsLoading(false);
      } else {
        toast(result.message, {
          autoClose: 5000,
          hideProgressBar: false,
        });
        setIsLoading(false);
      }
    } catch (error) {
      toast("an error occurred try again", {
        autoClose: 5000,
        hideProgressBar: false,
      });
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      if (search === "") return;
      const result = await searchUser(search, currentPage);

      if (!result || result.status !== 200) return;
      setAllUsers(result?.data?.content);
      setTotalPages(result?.data?.totalPages);
      //setPageNumber(result?.data?.number);
      setNumberOfElements(result?.data?.numberOfElements);
      setTotalElements(result?.data?.totalElements);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-6 pr-6">
      {isLoading && <Loader />}

      <div className="w-[36.68rem]   flex justify-between items-center bg-white rounded-3xl border border-black/25 mb-6">
        <input
          placeholder="search for a user"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => {
            if (search === "") {
              handleGetUsers();
            }
          }}
          type="text"
          className="w-11/12 py-3 rounded-3xl px-6 text-black text-base font-normal font-['DM Sans'] leading-[30px] border-none"
        />
        <button onClick={handleSearch} className="px-6">
          <Search />
        </button>
      </div>

      <table className=" h-screen overflow-y-auto py-2.5 bg-white rounded-3xl px-10 w-full  ">
        <thead>
          <tr>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] p-3 text-left">
              First Name
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] p-3 text-left">
              Last Name
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] p-3 text-left">
              Email
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
        <tbody className="gap-6">
          {allUsers.map((user) => (
            <tr
              onClick={() => router.push(`/dashboard/users/${user.id}`)}
              className="hover:bg-gray-100 cursor-pointer "
              key={user.id}
            >
              <td
                onClick={() => router.push(`/dashboard/users/${user.id}`)}
                key={user.id}
                className="text-black text-base font-normal font-['DM Sans']  px-3 py-3 text-left"
              >
                {user.firstName}
              </td>
              <td
                onClick={() => router.push(`/dashboard/users/${user.id}`)}
                key={user.id}
                className="text-black text-base font-normal font-['DM Sans'] px-3 py-3 text-left"
              >
                {user.lastName}
              </td>
              <td
                onClick={() => router.push(`/dashboard/users/${user.id}`)}
                key={user.id}
                className="text-black text-base font-normal font-['DM Sans'] px-3 py-3 text-left"
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
              <td className="px-3 py-3 text-left">
                <button
                  disabled={isLoading}
                  onClick={() => {
                    handleDeactivateUser(
                      user.id,
                      user.isUserDeactivated ? false : true
                    );
                  }}
                  className="text-[#979797] text-base font-normal font-['DM Sans'] underline "
                >
                  {user.isUserDeactivated ? "Reactivate" : "Deactivate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
                className="opacity-50"
                placeholder="1"
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
  );
};
