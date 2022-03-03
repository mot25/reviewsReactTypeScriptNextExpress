import React, { useEffect, useState } from "react";
import cn from "classnames";
import { RatingProps } from "./Rating.Props";
import style from "./Rating.module.css";
import StarIcon from "./Star.svg";

export default function Rating({
  isEditable = false,
  rating,
  className,
  setRating,
  ...props
}: RatingProps): JSX.Element {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructorRating(rating);
  }, [rating]);

  const constructorRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          key={i}
          className={cn(style.ster, className, {
            [style.filled]: i < currentRating,
          })}
        />
      );
    });
    setRatingArray(updateArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
}
