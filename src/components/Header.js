import React, { useState } from "react";
import doubleTickImage from "../assets/images/double-tick.png";
import nodeImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { added, allcompleted, clearcompleted } from "../redux/todos/actions";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const inputHandle = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  const completedHandler = () => {
    dispatch(allcompleted());
  };

  const clearHandler = () => {
    dispatch(clearcompleted());
  };

  return (
    <div>
      <form
        class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <img src={nodeImage} class="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          onChange={inputHandle}
          value={input}
        />
        <button
          type="submit"
          class={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul class="flex justify-between my-4 text-xs text-gray-500">
        <li class="flex space-x-1 cursor-pointer" onClick={completedHandler}>
          <img class="w-4 h-4" src={doubleTickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li class="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
