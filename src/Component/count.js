import React from "react";

export default function Count({ counter, children ,name}) {
  return (
    <div>
      <h2>this is Count component</h2>
      <h3>{counter}</h3>
      <h3>{name}</h3>
      {children}
    </div>
  );
}
