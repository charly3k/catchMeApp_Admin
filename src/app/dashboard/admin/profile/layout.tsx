"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const adminProfile = pathname === "/dashboard/admin/profile";
  const allAdmins = pathname === "/dashboard/admin/profile/all";
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
          your Profile
        </Link>
        <Link
          href={"/dashboard/admin/profile/all"}
          className={`${
            allAdmins ? "bg-red-500 text-white" : "bg-white text-slate-400"
          } rounded-4xl py-2.5 px-3.5`}
        >
          Other admins
        </Link>
      </div>
      <div>{children}</div>
      <Link
        href={"/dashboard/admin/create"}
        className="h-[51px] px-[52px] py-5 bg-[#ff0a54] rounded-[32px] justify-center items-center gap-2.5 inline-flex absolute bottom-6 right-6 text-right text-white text-base font-bold font-['DM Sans']"
      >
        Create an admin user
      </Link>
    </div>
  );
};

export default AdminLayout;
