import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  // console.log(input)
  const navigate = useNavigate();

  const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/"+input);
  }

  return (
    <form className="formDiv" onSubmit={submitHandler} >
       <div className="searchDiv">
       <FaSearch></FaSearch>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
       </div>
    </form>
  );
};

export default Search;
