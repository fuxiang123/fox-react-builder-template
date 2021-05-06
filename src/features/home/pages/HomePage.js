import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-page">
      <header className="app-header">
        <h1 className="app-title">欢迎使用fox-builder</h1>
      </header>
      <div className="app-main">
        <h2>欢迎使用fox-builder，您可以：</h2>
        <ul>
          <li>
            编辑此页面:{" "}
            <code>src/features/home/pages/HomePage.js</code>{" "}
          </li>
          <li>
            查看文档: <a>点击查看</a>
          </li>
          <li>
            查看示例:{" "}
            <Link to="/examples">/examples/RedditList</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
