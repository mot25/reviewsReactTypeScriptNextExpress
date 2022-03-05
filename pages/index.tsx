import { GetStaticProps } from "next";
import React, { useState } from "react";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import Htag from "../components/Htag/Htag";
import Button from "../components/button/Button";
import Tag from "../components/tag/Tag";
import Rating from "../components/Rating/Rating";
import { MenuItem } from "../interfaces/menu.interfaces";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button mode="primary" arrow="right">
        Кнопка
      </Button>
      <Button mode="ghost" arrow="down">
        Кнопка
      </Button>

      <Tag size="s">Ghost</Tag>
      <Tag size="r" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag color="primary">Green</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map((item, i) => {
          return <li key={i}>{item._id.secondCategory}</li>;
        })}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    "https://courses-top.ru/api/top-page/find",
    {
      firstCategory,
    }
  );
  console.log(menu);

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
