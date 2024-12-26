"use client";

import { useBoundStore } from "@/store/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Cookies from "universal-cookie";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const adminProfile = pathname === "/dashboard/admin/profile";
   const setIncreaseLimitModal = useBoundStore((state) => state.setIsIncreaseLimitModalVisible);
  const allAdmins = pathname === "/dashboard/admin/profile/all";

  const cookies = new Cookies();
  const adminRole = cookies.get("adminRole");
  return (
    <div className="py-6 px-6">
      {" "}
      <div className="flex">
        <Link
          href={"/dashboard/admin/profile"}
          className={` rounded-4xl py-2.5 px-3.5 mr-3.5 ${
            adminProfile ? `bg-red-500 text-white` : `bg-white text-slate-400`
          }`}
        >
          Your Profile
        </Link>
      { adminRole=='SUPER_ADMIN'&&  <Link
          href={"/dashboard/admin/profile/all"}
          className={`${
            allAdmins ? "bg-red-500 text-white" : "bg-white text-slate-400"
          } rounded-4xl py-2.5 px-3.5`}
        >
          Other admins
        </Link>}
      </div>
      <div>{children}</div>
      {adminRole=='SUPER_ADMIN'&& <div className="fixed bottom-6 right-6 flex flex-row gap-4 items-center">


      <button
      onClick={() => setIncreaseLimitModal(true)}

        className="h-[51px] px-[52px] py-5 bg-white rounded-[32px] justify-center items-center gap-2.5 inline-flex  text-right text-[#ff0a54] text-base font-bold font-['DM Sans'] border border-[#ff0a54]"
      >
        Set admin limit
      </button>
      <Link
        href={"/dashboard/admin/create"}
        className="h-[51px] px-[52px] py-5 bg-[#ff0a54] rounded-[32px] justify-center items-center gap-2.5 inline-flex text-right text-white text-base font-bold font-['DM Sans']"
      >
        Create an admin user
      </Link>
      </div>}
    </div>
  );
};

export default AdminLayout;
