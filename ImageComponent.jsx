import React from "react";
import bedroom1 from "../images/bedroom1.jpg";
import bedroom2 from "../images/bedroom2.jpg";
import bedroom3 from "../images/bedroom3.jpg";
import bedroom4 from "../images/bedroom4.jpg";
import bedroom5 from "../images/bedroom5.jpg";
import bedroom6 from "../images/bedroom6.jpg";
export default function Imagecomponent() {
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gridGap: "20px",
      }}
    >
      <div
        style={{
          gridRow: "1 / 2",
          gridColumn: "1 / 2",
          backgroundImage: `url(${bedroom1})` ,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          borderRadius: '10px'
        }}
      />
      <div
        style={{
          gridRow: "1 / 2",
          gridColumn: "2 / 3",
          backgroundImage: `url(${bedroom2})` ,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          borderRadius: '10px'
        }}
      />
      <div
        style={{
          gridRow: "2 / 3",
          gridColumn: "1 / 2",
          backgroundImage: `url(${bedroom3})` ,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          borderRadius: '10px'
        }}
      />
      <div
        style={{
          gridRow: "2 / 3",
          gridColumn: "2 / 3",
          backgroundImage: `url(${bedroom4})` ,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          borderRadius: '10px'
        }}
      />
      <div
        style={{
          gridRow: "3 / 4",
          gridColumn: "1 / 2",
          backgroundImage: `url(${bedroom5})` ,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          borderRadius: '10px'
        }}
      />
      <div
        style={{
          gridRow: "3 / 4",
          gridColumn: "2 / 3",
          backgroundImage: `url(${bedroom6})` ,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          borderRadius: '10px'
        }}
      />
    </div>
  );
}
