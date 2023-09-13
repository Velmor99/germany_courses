import ButtonComponent from "@/components/Button/Button";
import { BannerContentProps } from "./BannerContent.props";
import styles from "./BannerContent.module.scss";
import cn from "classnames";

const BannerContent = ({
  strong,
  text,
  greenText,
  buttonText,
  className,
}: BannerContentProps) => {
  return (
    <div className={cn(styles["banner-content"], className)}>
      <h1 className={cn(styles["banner-content__title"])}>
        <span>
          <strong className={cn(styles["banner-content__strong"])}>
            {strong}
            <span className={cn(styles["banner-content__symbol"])}>- </span>
          </strong>
          <span className={cn(styles["banner-content__text"])}>{text}</span>
        </span>
      </h1>
      {greenText && (
        <p className={cn(styles["banner-content__greenText"])}>{greenText}</p>
      )}
      <ButtonComponent
        className={cn(styles["banner-content__button"])}
        buttonType="green"
      >
        {buttonText}
      </ButtonComponent>
    </div>
  );
};

export default BannerContent;