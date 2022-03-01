import React from "react";
import Button from "../components/button/Button";
import Htag from "../components/Htag/Htag";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">titel</Htag>
      <Button className='4534545343245' mode="primary">tesdthd</Button>
      <Button
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
