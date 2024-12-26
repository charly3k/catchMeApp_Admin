"use client";
import { ArrowBack } from "@/assets/ArrowBack";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter,useParams } from "next/navigation";
import Loader from "@/components/Loader";
import { toast } from "react-toastify";
import { getAdminProfile } from "@/networking/getAdminProfile";
import { editAdminProfile } from "@/networking/editAdminProfile";

type FormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};


const Page = () => {
  
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const { admin } :{admin:string}= useParams();

 

  const [adminProfile, setAdminProfile] = useState<{
    firstname: string;
    lastname: string;
    email: string;
    defaultPassword: string;
  }>();
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      // errors
    },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await editAdminProfile(
          data.email,
          data.firstname,
          data.lastname,
          data.password,
          admin
        );

        if (result.status == 200 || result.status == 201) {
          console.log(result);
          router.push("/dashboard/admin/profile");
        }

        setIsLoading(false);
      } catch (error) {
        toast("an error occurred try again", {
          autoClose: 5000,
        });
        console.log(error);
        setIsLoading(false);
      }
    })();
  };
  const handleGetAdminProfile = async () => {
    const result = await getAdminProfile(admin);

    if (result) {
      setAdminProfile(result.data);
    }
  };

  console.log(watch("firstname")); // watch input value by passing the name of it
  useEffect(() => {
    handleGetAdminProfile();
  }, [admin]);

  console.log(adminProfile);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-6 px-6">
      <div className="flex flex-row justify-between items-center w-full">
        <button
           type="button"
          onClick={() => router.back()}
          className="w-12 h-12 p-3 bg-white rounded-3xl border border-black/25 justify-center items-center flex overflow-hidden"
        >
          <ArrowBack />
        </button>
        <button className="px-[52px] py-5 bg-[#ff0a54] rounded-[32px] justify-center items-center gap-2.5 flex text-white text-base font-normal font-['DM Sans']">
          {isLoading ? <Loader /> : "Save"}
        </button>
      </div>

      <div className="w-full p-12 bg-white rounded-3xl border border-black/25 flex-col justify-start items-start gap-12 inline-flex mt-6 px-6">
        <div className="h-[103px] flex-col justify-start items-start gap-[38px] flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            First Name
          </div>

          <input
            className="rounded-3xl bg-lightWhite py-2.5 px-3.5 mb-10 text-black h-[54px] pl-4 pr-[274px] bg-white rounded-3xl border border-black/25 justify-start items-center inline-flex overflow-hidden"
            // defaultValue="test"
            placeholder="first name"
            defaultValue={adminProfile?.firstname}
            {...register("firstname")}
          />
        </div>
        <div className="h-[103px] flex-col justify-start items-start gap-[38px] flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Last Name
          </div>

          <input
            className="rounded-3xl bg-lightWhite py-2.5 px-3.5 mb-10 text-black h-[54px] pl-4 pr-[274px] bg-white rounded-3xl border border-black/25 justify-start items-center inline-flex overflow-hidden"
            // defaultValue="test"
            placeholder="last name"
            defaultValue={adminProfile?.lastname}
            {...register("lastname")}
          />
        </div>
        <div className="h-[103px] flex-col justify-start items-start gap-[38px] flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Email
          </div>
          <input
            className="rounded-3xl bg-lightWhite py-2.5 px-3.5 mb-10 text-black h-[54px] pl-4 pr-[274px] bg-white rounded-3xl border border-black/25 justify-start items-center inline-flex overflow-hidden"
            // defaultValue="test"
            placeholder="email"
            defaultValue={adminProfile?.email}
            {...register("email")}
          />
        </div>
        <div className="h-[103px] flex-col justify-start items-start gap-[38px] flex">
          <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
            Password
          </div>
          <input
            className="rounded-3xl bg-lightWhite py-2.5 px-3.5 mb-10 text-black h-[54px] pl-4 pr-[274px] bg-white rounded-3xl border border-black/25 justify-start items-center inline-flex overflow-hidden"
            // defaultValue="test"
            placeholder="password"
            defaultValue={adminProfile?.defaultPassword}
            {...register("password")}
          />
        </div>
      </div>
    </form>
  );
};

export default Page;
