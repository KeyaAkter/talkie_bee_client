import React, { useState } from "react";
import Button from "../components/Button";
import ErrorMsg from "../components/ErrorMsg";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";

const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    // clear states
    setFormFields({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <SectionTitle title={"Login ..."} />

        <FormControl
          label="email"
          labelInnerText="Email Address"
          inputType="email"
          placeholder="Write your email"
          formFields={formFields}
          setFormFields={setFormFields}
        />

        <FormControl
          label="password"
          labelInnerText="Password"
          inputType="password"
          placeholder="Write your password"
          formFields={formFields}
          setFormFields={setFormFields}
        />

        <Button text="Login" submit />
      </form>
    </div>
  );
};

export default React.memo(Login);
