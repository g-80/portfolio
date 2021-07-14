import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../styles/Contact.module.css";
import Head from "next/head";

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ reValidateMode: "onSubmit" });

  interface formInput {
    name: string;
    email: string;
    subject: string;
    details: string;
  }

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onSubmit: SubmitHandler<formInput> = async (data) => {
    const reqBody = {
      subject: data.subject,
      name: data.name,
      email: data.email,
      details: data.details,
      timestamp: Date.now().toLocaleString(),
    };
    const serverURL = "https://sleepy-chamber-27617.herokuapp.com/";
    const res = await fetch(serverURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    if (res.status === 200) {
      setSubmitStatus("success");
      reset({
        name: "",
        email: "",
        subject: "",
        details: "",
      });
    } else {
      setSubmitStatus("failed");
    }
  };

  return (
    <>
      <Head>
        <title>Contact | G-web</title>
        <meta name="description" content="Contact me page" />
      </Head>
      <div className={styles.content}>
        <h1>Contact Me</h1>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.input_container}>
            <label htmlFor="name">Name</label>
            <input
              autoComplete="off"
              id="name"
              {...register("name", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors?.name?.type === "required" && <p>Please enter your name</p>}
            {errors?.name?.type === "maxLength" && (
              <p>You exceeded the maximum length</p>
            )}
          </div>
          <div className={styles.input_container}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              {...register("email", {
                required: true,
                pattern: emailRegex,
              })}
            />
            {errors?.email?.type === "required" && (
              <p>Please enter your email</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p>Please enter a valid email address</p>
            )}
          </div>
          <div className={styles.input_container}>
            <label htmlFor="subject">Subject</label>
            <input
              autoComplete="off"
              id="subject"
              {...register("subject", {
                required: true,
                maxLength: 20,
              })}
            />
            {errors?.subject?.type === "required" && (
              <p>Please enter a subject</p>
            )}
            {errors?.subject?.type === "maxLength" && (
              <p>You exceeded the maximum length</p>
            )}
          </div>
          <div className={styles.textarea_container}>
            <label htmlFor="details">Details</label>
            <textarea
              id="details"
              {...register("details", {
                required: true,
                maxLength: 1000,
              })}
            />
            {errors?.details?.type === "required" && (
              <p>Please enter some details</p>
            )}
            {errors?.details?.type === "maxLength" && (
              <p>You exceeded the maximum length</p>
            )}
          </div>
          <button type="submit">Send</button>
          <div className={styles.submit_status}>
            {submitStatus === "success" && (
              <p>
                Thank you for your email. I will get back to you as soon as
                possible.
              </p>
            )}
            {submitStatus === "failed" && (
              <p>Something went wrong. Your email was not sent.</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
