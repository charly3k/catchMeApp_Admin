import Link from "next/link";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-6 px-6">
      {" "}
      <div className="flex">
        <button className=" text-white rounded-4xl py-2.5 px-3.5 mr-3.5 bg-red-500">
          your Profile
        </button>
        <button className="bg-white text-slate-400 rounded-4xl py-2.5 px-3.5">
          Other admins
        </button>
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
