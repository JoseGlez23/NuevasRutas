import React from "react";
import useForm from "../hook/useForm";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { name, email, password, onInPutChange, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const OnRegister = (e) => {
    e.preventDefault();

    navigate("/dashboard", {
      replace: true,
      state: {
        logged: true,
        name,
      },
    });

    onResetForm();
  };

  return (
    <div className="wrapper">
      <form onSubmit={OnRegister}>
        <h1>Registrarse</h1>

        <div className="input-group">
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onInPutChange}
            required
            autoComplete="off"
          />
          <label htmlFor="name">Nombre:</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onInPutChange}
            required
            autoComplete="off"
          />
          <label htmlFor="emial">Email:</label>
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onInPutChange}
            required
            autoComplete="off"
          />
          <label htmlFor="name">Password:</label>
        </div>
        <button>Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterPage;
