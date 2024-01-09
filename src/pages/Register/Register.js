import React from "react";
import FormRegister from "./Form";

const Register = () => {
  return (
    <div className="h-screen bg-gradient-to-tr from-[#e9d8fd] via-[#caccf7] to-[#a6c1ee] flex items-center justify-center">
      <div className="flex flex-col items-center p-10 bg-white shadow lg:flex-row rounded-2xl gap-x-5 shadow-purple-300 h-full md:h-auto">
        <FormRegister />
      </div>
    </div>
  );
};

export default Register;
