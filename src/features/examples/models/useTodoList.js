import { useState } from "react";
import { createModel } from "hox";

// 1 未完成， 2 完成 3 删除
export const STATUS = {
  UNFINISH: 1,
  FINISHED: 2,
};

function useTodoList() {
  const [todoList, setTodoList] = useState([]);

  const addItem = (item) => {
    setTodoList((list) => [
      ...todoList,
      {
        item,
        status: STATUS.UNFINISH,
        id: list.length,
      },
    ]);
  };
  const finishItem = (id) => {
    setTodoList((list) =>
      list.map((item) =>
        item.id === id
          ? { ...item, status: STATUS.FINISHED }
          : item
      )
    );
  };
  const deleteItem = (id) => {
    setTodoList((list) =>
      list.filter((item) => item.id !== id)
    );
  };

  const unfinishItem = (id) => {
    setTodoList((list) =>
      list.map((item) =>
        item.id === id
          ? { ...item, status: STATUS.UNFINISH }
          : item
      )
    );
  };
  return {
    todoList,
    addItem,
    deleteItem,
    finishItem,
    unfinishItem,
  };
}

export default createModel(useTodoList);
