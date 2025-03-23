"use client";
import { getReportedUsers } from "@/networking/getReportedUsers";
import { reportedUsers } from "@/types/types";
import React, { useEffect, useState } from "react";

const Reports = () => {
  const [reportedUsers, setReportedUsers] = useState<reportedUsers[]>([]);

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
  console.log(reportedUsers);
  return (
    <div className="py-6">
      <div className=" p-12 bg-white rounded-3xl border border-black/25 justify-start items-start gap-28 inline-flex">
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Reported name
          </div>

          {reportedUsers &&
            reportedUsers.map((user) => (
              <div
                key={user.reportId}
                className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]"
              >
                {user.reportedUserName
                  ? user.reportedUserName
                  : "reported user"}
              </div>
            ))}
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Reason for report
          </div>
          {reportedUsers &&
            reportedUsers.map((user) => (
              <div
                key={user.reportId}
                className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]"
              >
                {user.reason}
              </div>
            ))}
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Date of report
          </div>

          {reportedUsers &&
            reportedUsers.map((user) => (
              <div
                key={user.reportId}
                className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]"
              >
                {user.reportDate}
              </div>
            ))}
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Reportee
          </div>

          {reportedUsers &&
            reportedUsers.map((user) => (
              <div
                key={user.reportId}
                className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]"
              >
                {user.reportingUserName
                  ? user.reportingUserName
                  : "reporting user"}
              </div>
            ))}
        </div>
        <div className="flex-col justify-start items-start gap-[38px] inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Action
          </div>

          {reportedUsers &&
            reportedUsers.map((user) => (
              <button
                key={user.reportId}
                className="justify-start items-start inline-flex text-[#979797] text-base font-normal font-['DM Sans'] underline leading-[30px]"
              >
                Deactivate user
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
