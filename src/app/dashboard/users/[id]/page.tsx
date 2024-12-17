"use client";

import { getUser } from "@/networking/getUser";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { UserProfile } from "@/types/types";
import { Redo } from "@/assets/Redo";
import { ArrowBack } from "@/assets/ArrowBack";

const UserDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, SetUser] = useState<UserProfile>();

  const userId = params.id;
  console.log({ pathname });

  useEffect(() => {
    (async () => {
      const result = await getUser(userId);

      SetUser(result.data);
    })();
  }, [userId]);

  console.log({ user });

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-6">
      <div className="flex  items-center justify-between">
        <div className="flex items-center gap-6">
          <button
            onClick={() => router.back()}
            className="w-12 h-12 p-3 bg-white rounded-3xl border border-black/25 justify-center items-center inline-flex"
          >
            <ArrowBack />
          </button>
          <h4 className="text-black text-2xl font-bold font-['Raleway'] leading-9">
            User details
          </h4>

          <div className="h-[34px] px-6 bg-white rounded-2xl border border-black/25 justify-center items-center inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <div className="text-[#ff0a54] text-base font-normal font-['DM Sans']">
                View audit trail
              </div>
              <Redo />
            </div>
          </div>
        </div>

        <div className="h-[46px] flex-col justify-center items-end gap-6 inline-flex">
          <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Actions
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]">
              Edit
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] underline leading-[30px]">
              Chat
            </div>
            <div className="text-[#979797] text-base font-normal font-['DM Sans'] underline leading-[30px]">
              Delete
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1179px]  p-12 bg-white rounded-3xl border border-black/25 flex-col justify-start items-start gap-12 inline-flex  mt-6">
        <div className="justify-start items-start gap-[40.50px] inline-flex w-full">
          <div className="w-[119px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              First Name
            </div>
            <div className="text-black text-base font-normal font-['DM Sans']">
              {user.firstName}
            </div>
          </div>
          <div className="w-[119px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Last Name
            </div>
            <div className="text-black text-base font-normal font-['DM Sans']">
              {user.lastName}
            </div>
          </div>
          <div className="w-[147px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Email
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              {user.email}
            </div>
          </div>
          <div className="w-[147px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              School email
            </div>
            <div className="text-black text-base font-normal font-['DM Sans'] leading-[30px]">
              {user.studentEmail}
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-[41px] inline-flex">
          <div className="w-[119px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Creation date
            </div>
            <div className="text-black text-base font-normal font-['DM Sans']">
              20-Oct-24
            </div>
          </div>
          <div className="w-[186px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Course of study
            </div>
            <div className="text-black text-base font-normal font-['DM Sans']">
              {user.courseOfStudy}
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              School
            </div>
            <div className="text-black text-base font-normal font-['DM Sans']">
              {user.schoolName}
            </div>
          </div>
          <div className=" flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Age (Date of birth)
            </div>
            <div className="text-black text-base font-normal font-['DM Sans']">
              {/*   23 (10-June-2001) */}
              {user.dateOfBirth
                ? new Date(user.dateOfBirth).toLocaleDateString()
                : "N/A"}
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-[44.20px] inline-flex">
          <div className="w-[275px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Bio
            </div>
            <div className="self-stretch text-black/75 text-base font-normal font-['DM Sans']">
              {user.userBio}
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              My perfect first date idea
            </div>
            <div className="w-[275px] text-black/75 text-base font-normal font-['DM Sans']">
              {user.idealFirstDate}
            </div>
          </div>
          <div className="w-[198px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Fun fact about me...
            </div>
            <div className="w-[275px] text-black/75 text-base font-normal font-['DM Sans']">
              {user.funFactAboutYou}
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[319px]  h-[115px] flex-col justify-start items-start gap-6 ">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Interests
            </div>
            <div className="self-stretch h-20 justify-start items-start gap-2 flex flex-wrap">
              {user &&
                user.interests &&
                user.interests.map((interest) => (
                  <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
                    <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                      {interest.interestName}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex-col justify-start items-start gap-6 ">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Basics
            </div>
            <div className="self-stretch h-20 justify-start items-start gap-2 flex flex-wrap">
              {user.height && (
                <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
                  <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                    {user.height} cm
                  </div>
                </div>
              )}
              {user.zodiacSign && (
                <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
                  <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                    {user.zodiacSign}
                  </div>
                </div>
              )}
              {user.religion && (
                <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
                  <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                    {user.religion}
                  </div>
                </div>
              )}
              {user.smokingPreference && (
                <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
                  <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                    {user.smokingPreference}
                  </div>
                </div>
              )}
              {user.datingPreference && (
                <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
                  <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                    {user.datingPreference}
                  </div>
                </div>
              )}
              {user.drinkingPreference && (
                <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
                  <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                    {user.drinkingPreference}
                  </div>
                </div>
              )}
              {user.educationalLevel && (
                <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
                  <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                    {user.educationalLevel}
                  </div>
                </div>
              )}
              {user.lookingFor && (
                <div className="px-3.5 py-2.5 bg-[#f9bec7] rounded-2xl justify-center items-center gap-2 flex">
                  <div className="text-[#ff0a54] text-sm font-normal font-['DM Sans'] leading-[18px]">
                    {user.lookingFor}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
