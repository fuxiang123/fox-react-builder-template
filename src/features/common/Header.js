import React from "react";
import ReactLogo from "@/images/logo.svg";

export default function Header() {
  return (
    <header className="common-header">
      <a className="header-bar" href="/">
        <img src={ReactLogo} alt="React Logo" />
        <div>Fox-Builder</div>
      </a>
    </header>
  );
}
