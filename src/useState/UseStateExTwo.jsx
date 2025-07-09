import React, { useState } from "react";

const initialState = {
  name: "",
  city: "",
};

export default function UseStateExTwo() {
  const [formData, setFormData] = useState(initialState);
  console.log(initialState);

  function handleNameChange(e) {
    setFormData({ ...formData, name: e.target.value });
  }

  function handleCityChange(e) {
    setFormData({ ...formData, city: e.target.value });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  console.log(formData);

  return (
    <div>
      <h1>UseState</h1>

      <input
        onChange={
          // handleNameChange
          handleChange
        }
        type="text"
        name="name"
        placeholder="enter name"
      />
      <select
        onChange={
          // handleCityChange
          handleChange
        }
        name="city"
      >
        <option value={""} id={""}>
          select city
        </option>
        <option value={"delhi"} id={"delhi"}>
          delhi
        </option>
        <option value={"mumbai"} id={"mumbai"}>
          mumbai
        </option>
      </select>

      <h2>Name: {formData.name}</h2>
      <h2>City: {formData.city}</h2>
    </div>
  );
}
