import React, { useState } from "react";
import { istate } from "../App";
interface person {
  peo: istate["person"];
  setpe: React.Dispatch<React.SetStateAction<istate["person"]>>;
}
const AddToLists: React.FC<person> = ({ peo, setpe }): JSX.Element => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });
  const [error, setError] = useState("");
  const handleClick = () => {
    if (!input.name || !input.age || !input.url) {
      setError("please fill all inputs");
      return "error";
    }
    setpe([
      ...peo,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
    setError("");
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Add name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        placeholder="your age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />{" "}
      <input
        type="text"
        placeholder="url"
        className="AddToList-input"
        value={input.url}
        name="url"
        onChange={handleChange}
      />{" "}
      <textarea
        name="note"
        placeholder="note"
        value={input.note}
        className="AddToList-input"
        onChange={handleChange}
      />{" "}
      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
      <span>{error}</span>
    </div>
  );
};

export default AddToLists;
