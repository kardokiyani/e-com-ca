import React from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your full name should be at least 3 characters.")
      .max(15, "Your full name cannot be longer than 15 characters.")
      .required("Please enter your full name"),
    subject: yup
      .string()
      .min(3, "Your subject name should be at least 3 characters.")
      .max(20, "Your subject cannot be longer than 20 characters.")
      .required("Please enter your subject"),
    email: yup
      .string()
      .min(3, "Must be a valid email address")
      .required("Please enter your mail"),
    body: yup
      .string()
      .min(3, "Your body should be at least 3 characters.")
      .max(50, "Your body cannot be longer than 15 characters.")
      .required("Please enter your body"),
  })
  .required();

export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form className="formStyle" onSubmit={handleSubmit(onSubmit)}>
      <input className="inputStyle" {...register("fullName")} />
      <p className="errorStyle">{errors.fullName?.message}</p>
      <input className="inputStyle" {...register("subject")} />
      <p className="errorStyle">{errors.subject?.message}</p>
      <input className="inputStyle" {...register("email")} />
      <p className="errorStyle">{errors.email?.message}</p>
      <input className="inputStyle" {...register("body")} />
      <p className="errorStyle">{errors.body?.message}</p>
      <input className="buttonStyle" type="submit" />
    </form>
  );
}

export default ContactPage;
