import React, { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  class?: string;
};

export default function DashboardLayout(props: PropsType): JSX.Element {
  return (
    <div className={`DefaultLayout ${props.class ? props.class : ""}`}>
      <header className="header">
        <div className="logo">
          <img alt="EcoCoinApp" src="/logo.png" />
        </div>
        <div className="brand-name">EcoCoin</div>
      </header>
      <div>{props.children}</div>
    </div>
  );
}
