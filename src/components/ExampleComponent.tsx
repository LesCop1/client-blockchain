import React from "react";
import "./index.scss";

export function ButtonValidation(): JSX.Element {
  return (
    <button className="validation" type="submit">
      Valider
    </button>
  );
}

export function Icone(): JSX.Element {
  return (
    <div>
      <div className="icone" />
      <div className="ecocoin text_color_main">Ecocoin</div>
    </div>
  );
}
