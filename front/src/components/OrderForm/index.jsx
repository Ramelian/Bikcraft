import { useForm } from "react-hook-form";
import {
  phoneValidationSchema,
  emailValidationSchema,
  nameValidationSchema,
  numberValidationSchema,
} from "../ValidationSchemas";
import "./OrderForm.scss";

import axios from "../../axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification";

const OrderForm = ({ option }) => {
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
    const { Bairro, CEP, Logradouro, Número, email, name, phone } = data;
    const newData = {
      email,
      name,
      phone,
      postIndex: CEP,
      number: Número,
      street: Logradouro,
      district: Bairro,
      productId: option,
    };

    try {
      const response = await axios.post("/order", newData);
      if (response.status === 200) {
        setResult("success");
        setTimeout(() => {
          return navigate("/");
        }, 2000);
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
      <h4 className="light font-1-s">Dados Pessoais</h4>
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

      <h4 className="light font-1-s">ENTREGA</h4>
      <div className="gap-20">
        <div className="input">
          <label htmlFor="CEP">CEP</label>
          <input
            placeholder=""
            type="text"
            id="CEP"
            className={`${errors.CEP && "false"}`}
            {...register("CEP", numberValidationSchema)}
          />
          {errors.CEP && <span>{errors.CEP.message}</span>}
        </div>

        <div className="input">
          <label htmlFor="Número">Número</label>
          <input
            placeholder=""
            type="text"
            id="Número"
            className={`${errors.Número && "false"}`}
            {...register("Número", numberValidationSchema)}
          />
          {errors.Número && <span>{errors.Número.message}</span>}
        </div>
      </div>
      <div className="gap-20">
        <div className="input">
          <label htmlFor="Logradouro">Logradouro</label>
          <input
            placeholder="Rua, avenida..."
            type="text"
            id="Logradouro"
            className={`${errors.Logradouro && "false"}`}
            {...register("Logradouro", { required: true })}
          />
          {errors.Logradouro && <span>{errors.Logradouro.message}</span>}
        </div>

        <div className="input">
          <label htmlFor="Bairro">Bairro</label>
          <input
            placeholder=""
            type="text"
            id="Bairro"
            className={`${errors.Bairro && "false"}`}
            {...register("Bairro", { required: true })}
          />
          {errors.Bairro && <span>{errors.Bairro.message}</span>}
        </div>
      </div>

      <button className="btn" type="submit">
        ENVIAR MENSAGEM
      </button>
    </form>
  );
};
export default OrderForm;
