import React from "react";
const e = React.createElement;
export function IntroSection() {
  return e(
    "section",
    null,
    e("h1", { className: "centered", key: 1 }, "QWERTY"),
    e(
      "h3",
      { className: "centered", style: { color: "#666" }, key: 2 },
      "Лучшее предложение на рынке телекоммуникационных услуг"
    )
  );
}
