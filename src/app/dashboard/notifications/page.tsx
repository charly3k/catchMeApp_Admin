"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Notifications = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("title")); // watch input value by passing the name of it
  return (
    <div className="py-6">
      <h1 className="text-black text-2xl"> Send Email notification</h1>
      <form
        className=" flex flex-col w-494  pt-10 px-6 rounded-3xl mt-6 min-h-[23.8125rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}

        <input
          className="rounded-3xl bg-lightWhite py-2.5 px-3.5 mb-10 text-black bg-white border border-slate-200"
          // defaultValue="test"
          placeholder="title"
          {...register("title")}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <textarea
          placeholder="message"
          className="bg-lightWhite py-2.5 px-3.5 rounded-3xl mb-6 text-black bg-white border border-slate-200 h-[8.125rem]"
          {...register("message", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.message && <span>This field is required</span>}

        <input
          className="bg-red-500 w-full rounded-4xl p-2.5 mx-auto mt-6"
          type="submit"
          value={"Send notification to all users"}
        />
      </form>
    </div>
  );
};

export default Notifications;
