import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="app-main">
        <h2>欢迎使用fox-builder，您可以：</h2>
        <ul>
          <li>
            编辑此页面： 打开{" "}
            <strong>
              src/features/home/pages/HomePage.js
            </strong>{" "}
          </li>
          <li>
            查看文档：{" "}
            <a
              target="_blank"
              href="https://github.com/fuxiang123/fox-react-builder-template"
              rel="noreferrer"
            >
              点击查看
            </a>
          </li>
          <li>
            查看示例：{" "}
            <Link to="/examples/todolist">
              /examples/todolist
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
