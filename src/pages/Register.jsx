import React, { useState } from "react";
import Button from "../components/Button";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useSignup } from "../hooks/useSignup";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signup, isLoading, error } = useSignup();

  const handleRegister = async (e) => {
    e.preventDefault();

    await signup(formFields.name, formFields.email, formFields.password);

    // // clear states
    // setFormFields({
    //   name: "",
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <div className="register flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register ..."} />

        <FormControl
          label="name"
          labelInnerText="Name"
          inputType="text"
          placeholder="Write your name"
          formFields={formFields}
          setFormFields={setFormFields}
        />

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

        <Button text={isLoading ? "Registering..." : "Register"} submit />

        {error && (
          <p className="bg-rose-50 text-rose-500 p-5 rounded border border-rose-500">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default React.memo(Register);
