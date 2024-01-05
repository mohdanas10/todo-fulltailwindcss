import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [button, setButton] = useState("Add");
  const [index, setIndex] = useState(-1);

  const submitHandler = (event) => {
    event.preventDefault();
    if (index == -1) {
      setTodoList((todoList) => {
        const updateList = [...todoList, todo];
        return updateList;
      });
      setTodo("");
      console.log(index);
    }
    if (index >= 0) {
      todoList[index] = todo;
      setTodoList(todoList);
      setButton("Add");
      setIndex(-1);
    }
    setTodo("");
    console.log(index);
  };

  const updateHandler = (i) => {
    setButton("Update");
    setIndex(i);
    setTodo(todoList[i]);
  };

  const deleteHandler = (i) => {
    console.log(i);
    const update = todoList.filter((elem, id) => {
      return i != id;
    });
    setTodoList(update);
  };
  return (
    <>
      <div className="max-w-md mx-auto bg-red-300 shadow-lg rounded-lg overflow-hidden mt-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">
            To-Do List
          </h1>
        </div>
        <form
          onSubmit={submitHandler}
          className="w-full max-w-sm mx-auto px-4 py-2"
        >
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Add a task"
            />
            <button
              onClick={submitHandler}
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              {button}
            </button>
            {todoList.length >= 1 && (
              <button
                onClick={() => {
                  setTodoList([]);
                }}
                className="ml-3 flex-shrink-0 bg-red-700  hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                DeleteAll
              </button>
            )}
          </div>
        </form>
        <ul className="divide-y divide-gray-200 px-4">
          {todoList.map((data, i) => {
            return (
              <li key={i} className="py-4">
                <div className="flex items-center">
                  <label htmlFor="todo1" className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium">{data}</span>
                    <span className="text-sm font-light text-gray-500">
                      <button
                        onClick={() => updateHandler(i)}
                        className="h-8 w-14 bg-blue-500 text-white ml-5"
                      >
                        Update
                      </button>
                    </span>
                    <span className="text-sm font-light text-gray-500">
                      <button
                        onClick={() => deleteHandler(i)}
                        className="h-8 w-14 bg-red-500 text-white ml-5"
                      >
                        Delete
                      </button>
                    </span>
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
