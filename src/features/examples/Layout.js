import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="example-page">
      <div className="examples-container">
        <nav className="side-panel">
          <ul>
            <li>
              <Link to="/examples/todolist">
                示例：待办列表
              </Link>
            </li>
            <li>
              <Link to="/examples/RedditList">
                示例：数据请求
              </Link>
            </li>
            <li>
              <Link to="/">返回首页</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  );
}
