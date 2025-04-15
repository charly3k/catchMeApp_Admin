"use client";
import { getReportedUsers } from "@/networking/getReportedUsers";
import { reportedUsers } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Reports = () => {
  const [reportedUsers, setReportedUsers] = useState<reportedUsers[]>([]);
  const router = useRouter();

  const handleGetReportedUsers = async () => {
    const result = await getReportedUsers(0);

    console.log({ result });

    setReportedUsers(result?.data?.content);
  };

  useEffect(() => {
    handleGetReportedUsers();
  }, []);

  /*   const handleDeactivateUser = async (userId: number) => {
   const result = await deactivateUser( userId);
  } */

  // Convert to a Date object (ignoring microseconds)

  // Format the date as a normal string
  const formattedDate = (date: string | Date) => {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  console.log(formattedDate); // e.g., "January 9, 2025, 9:26:04 PM"

  console.log(reportedUsers);
  return (
    <div className="py-6">
      <table>
        <thead>
          <tr>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] text-left">
              Reported name
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] text-left">
              Reason for report
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] text-left">
              Date of report
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] text-left">
              Reportee
            </th>
            <th className="text-[#ff0a54] text-base font-normal font-['DM Sans'] text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="gap-4">
          {reportedUsers.map((user) => (
            <tr
              className="hover:bg-gray-100 text-black text-base font-normal font-['DM Sans'] px-3 py-3 text-left"
              key={user.reportId}
            >
              <td
                onClick={() =>
                  router.push(`/dashboard/users/${user.reportedUserId}`)
                }
                className="underline cursor-pointer px-3 py-3"
              >
                {user.reportedUserName}
              </td>
              <td className="px-3 py-3">{user.reason}</td>
              <td className="px-3 py-3">{formattedDate(user.reportDate)}</td>
              <td
                onClick={() =>
                  router.push(`/dashboard/users/${user.reportingUserId}`)
                }
                className="px-3 py-3 underline cursor-pointer"
              >
                {user.reportingUserName}
              </td>
              <td className="px-3 py-3">
                <button className="text-[#979797] text-base font-normal font-['DM Sans'] underline leading-[30px]">
                  Deactivate user
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
