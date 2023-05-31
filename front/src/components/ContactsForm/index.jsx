import { useForm } from "react-hook-form";
import {
  phoneValidationSchema,
  emailValidationSchema,
  nameValidationSchema,
} from "../ValidationSchemas";

import "./ContactsForm.scss";
import Notification from "./../Notification/index";
import axios from "../../axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactsForm = () => {
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/contacts", data);
      if (response.status === 200) {
        setResult("success");
          setTimeout(() => {
            return navigate("/");
          }, 2000)
      } else {
        setResult("error");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      setResult("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!!result && (
        <Notification
          type={result}
          text={`${
            result === "success"
              ? "We have received yor questions! Redirecting..."
              : "Oops... Something went wrong"
          }`}
        />
      )}
      <div className="gap-20">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Your Name"
            type="text"
            id="name"
            className={`${errors.name && "false"}`}
            {...register("name", nameValidationSchema)}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className="input">
          <label htmlFor="phone">Telefone</label>
          <input
            placeholder="380 000000"
            type="tel"
            id="phone"
            className={`${errors.phone && "false"}`}
            {...register("phone", phoneValidationSchema)}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
      </div>

      <div className="input">
        <label htmlFor="email">Email</label>
        <input
          placeholder="email@mail.com"
          id="email"
          className={`${errors.email && "false"}`}
          {...register("email", emailValidationSchema)}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className="input">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          rows={4}
          cols={50}
          className={`${errors.message && "false"}`}
          {...register("message", { required: "This input is required" })}
        ></textarea>
        {errors.message && <span>{errors.message.message}</span>}
      </div>

      <button className="btn" type="submit">
        ENVIAR MENSAGEM
      </button>
    </form>
  );
};
export default ContactsForm;
