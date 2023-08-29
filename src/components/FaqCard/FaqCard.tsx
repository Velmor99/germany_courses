import styles from "./FaqCard.module.scss";
import cn from "classnames";
import ArrowIcon from "../../../public/common/arrow.svg";
import { FaqCardProps } from "./FaqCard.props";
import { useState } from "react";

const FaqCard = ({ title, innerContent }: FaqCardProps): JSX.Element => {
  const [isShowedInnerContent, setIsShowedInnerContent] = useState(false);
  return (
    <div className={cn(styles["card"])}>
      <div className={cn(styles["card__title-block"])}>
        <p className={cn(styles["card__title"])}>{title}</p>
        <button
          onClick={() => setIsShowedInnerContent(!isShowedInnerContent)}
          className={cn(styles["card__button"])}
        >
          <ArrowIcon />
        </button>
      </div>
      {isShowedInnerContent && (
        <div className={cn(styles["card__content-block"])}>
          <p className={cn(styles["card__content"])}>{innerContent}</p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
