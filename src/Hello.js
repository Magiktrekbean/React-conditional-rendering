import React from "react";

export default function Hello(props) {
  return (
    <h2>
      {props.language === "English" && "Hello"}
      {props.language === "French" && "Bonjour"}
      {props.language === "Spanish" && "Hola"}
    </h2>
  );
}
