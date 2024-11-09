"use client";
import CatchMe from "@/assets/CatchMe";
import { superAdminLogin } from "@/networking/superAdminLogin";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    superAdminLogin(data.email, data.password);
  };

  console.log(watch("password")); // watch input value by passing the name of it

  console.log(errors);

  return (
    <div className="flex flex-col  items-center h-screen justify-center">
      <CatchMe />
      <p className="text-black opacity-50 mt-6">
        {" "}
        To access the CatchMeApp Dashboard
      </p>
      <h1 className="text-black text-2xl">Login to your account</h1>
      <form
        className="bg-white flex flex-col w-494 border border-slate-200 pt-10 px-6 rounded-3xl mt-6 min-h-[21.125rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="rounded-3xl bg-lightWhite py-2.5 px-3.5  text-black"
          // defaultValue="test"
          placeholder="email"
          {...register("email", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.email && (
          <span className="text-black px-6">Email is required</span>
        )}

        {/* include validation with required or other standard HTML validation rules */}
        <input
          placeholder="password"
          className="bg-lightWhite py-2.5 px-3.5 rounded-3xl my-6 text-black"
          {...register("password", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.password && (
          <span className="text-black px-6">Password is required</span>
        )}

        <Link href={"#"} className="text-red-500 text-right">
          Forgot password?
        </Link>

        <input
          className="bg-red-500 w-36 rounded-4xl p-2.5 mx-auto mt-6"
          type="submit"
          value={"Login"}
        />
      </form>
      <Link href={"/register"} className="text-red-500 text-center mt-6">
        Create an account
      </Link>
    </div>
  );
};

export default Login;
