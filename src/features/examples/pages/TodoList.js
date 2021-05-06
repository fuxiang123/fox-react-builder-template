import React, { useState } from "react";
import useTodoListModal, {
  STATUS,
} from "../models/useTodoList";

export default function Counter() {
  const {
    todoList,
    addItem,
    deleteItem,
    finishItem,
    unfinishItem,
  } = useTodoListModal();
  const [userInput, setUserInput] = useState("");
  const [status, setStatus] = useState(0); // 0显示全部

  const onInputChange = (event) => {
    setUserInput(event.target.value);
  };
  const onAddItem = () => {
    if (userInput !== "") {
      addItem(userInput);
    } else {
      alert("请输入待办事项");
    }
  };

  const handleShowAll = () => {
    setStatus(0);
  };
  const handleShowUnfinish = () => {
    setStatus(STATUS.UNFINISH);
  };
  const handleShowFinish = () => {
    setStatus(STATUS.FINISHED);
  };
  const listItems = todoList.map((todo) => {
    const changeTodoState = () => {
      if (todo.status === STATUS.FINISHED) {
        unfinishItem(todo.id);
      } else {
        finishItem(todo.id);
      }
    };
    const deleteTodo = () => {
      deleteItem(todo.id);
    };
    if (
      todo.status === STATUS.DELETED ||
      (todo.status !== status && status !== 0)
    ) {
      return <div key={todo.id} />;
    }

    return (
      <li key={todo.id} className="todo-item">
        <div
          onClick={changeTodoState}
          className={
            todo.status === STATUS.FINISHED
              ? "todo-finished"
              : ""
          }
        >
          {todo.item}
        </div>
        <button onClick={deleteTodo} type="button">
          删除
        </button>
      </li>
    );
  });

  return (
    <div className="todolist-page">
      <div className="imgs">
        <h1>待办列表</h1>
        <input
          type="text"
          onChange={onInputChange}
          value={userInput}
          placeholder="请输入待办事项"
        />
        <button onClick={onAddItem} type="button">
          添加
        </button>
        <p>单击待办事项，可改变其完成状态</p>
        <ul className="list-area">{listItems}</ul>
        <button onClick={handleShowAll} type="button">
          显示全部
        </button>
        <button onClick={handleShowUnfinish} type="button">
          未完成
        </button>
        <button onClick={handleShowFinish} type="button">
          已完成
        </button>
      </div>

      <article>
        <section>
          <p>
            该示例主要用于演示如何使用<dfn>hox</dfn>
            进行状态管理 。<br />
            <dfn>hox</dfn>
            是一款基于hooks的全局状态管理工具，你可以
            <a
              target="_blank"
              href="https://github.com/umijs/hox"
              rel="noreferrer"
            >
              点击这里阅读hox文档
            </a>
            。
          </p>
        </section>

        <section>
          <p>
            <dfn>hox</dfn>
            定义的状态可在不同组件间进行共享（功能上类似redux,只是使用上要简单很多）。
            <br />
            如果多个组件使用了useTodoList中的状态，
            当某个组件通知useTodoList中的状态改变时，
            所有组件中的状态会一同改变，并且切换页面后状态也不会丢失。
          </p>
        </section>

        <section>
          <p>
            该页面位于
            <mark>
              /src/features/examples/pages/TodoList.js
            </mark>
            。
          </p>
          <p>
            页面中的状态定义于
            <mark>
              /src/features/examples/models/useTodoList.js
            </mark>
            , 由<dfn>hox</dfn>进行创建和更新。
          </p>
        </section>
      </article>
    </div>
  );
}
