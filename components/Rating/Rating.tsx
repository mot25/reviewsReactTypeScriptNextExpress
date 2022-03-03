import React, { KeyboardEvent, useEffect, useState } from "react";
import cn from "classnames";
import { RatingProps } from "./Rating.Props";
import style from "./Rating.module.css";
import StarIcon from "./Star.svg";
import { serialize } from "v8";

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
        <span
          key={i}
          className={cn(style.ster, className, {
            [style.filled]: i < currentRating,
            [style.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updateArray);
  };

  const changeDisplay = (i: number) => {
    if (isEditable) {
      constructorRating(i);
    }
  };

  const onClick = (i: number) => {
    if (isEditable && setRating) {
      setRating(i);
    }
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
}
