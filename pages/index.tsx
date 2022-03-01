import React from "react";
import Button from "../components/button/Button";
import Htag from "../components/Htag/Htag";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">titel</Htag>
      <Button arrow="right" mode="primary">
        tesdthd
      </Button>
      <Button
        arrow="down"
        mode="ghost"
        onClick={() => {
          console.log("wergawegere");
        }}
      >
        tesdthd
      </Button>
    </>
  );
}
