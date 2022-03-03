import React, { useState } from "react";
import Button from "../components/button/Button";
import Htag from "../components/Htag/Htag";
import Paragraf from "../components/paragraf/Paragraf";
import Rating from "../components/Rating/Rating";
import Tag from "../components/tag/Tag";

export default function Home(): JSX.Element {
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
      <Paragraf mode="s">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
        cupiditate facilis voluptatem repudiandae fuga quia, quam adipisci vel
        ullam laborum sapiente quibusdam fugit. Dolores rerum, esse repudiandae
        quo commodi atque?
      </Paragraf>
      <Paragraf mode="r">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
        cupiditate facilis voluptatem repudiandae fuga quia, quam adipisci vel
        ullam laborum sapiente quibusdam fugit. Dolores rerum, esse repudiandae
        quo commodi atque?
      </Paragraf>
      <Paragraf mode="b">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
        cupiditate facilis voluptatem repudiandae fuga quia, quam adipisci vel
        ullam laborum sapiente quibusdam fugit. Dolores rerum, esse repudiandae
        quo commodi atque?
      </Paragraf>
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
