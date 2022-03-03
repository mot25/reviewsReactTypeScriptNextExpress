import React, { useState } from "react";
import Button from "../components/button/Button";
import Htag from "../components/Htag/Htag";
import Paragraf from "../components/paragraf/Paragraf";
import Rating from "../components/Rating/Rating";
import Tag from "../components/tag/Tag";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rat, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">titel</Htag>
      <Button mode="primary">tesdthd</Button>
      <Button
        arrow="right"
        mode="ghost"
        onClick={() => {
          console.log("wergawegere");
        }}
      >
        tesdthd
      </Button>
      <Tag color="ghost">ghost</Tag>
      <Tag color="red">red</Tag>
      <Tag color="grey">grey</Tag>
      <Tag color="green">green</Tag>
      <Tag href="#" color="primary">
        primary
      </Tag>
      <Rating rating={rat} isEditable={true} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
