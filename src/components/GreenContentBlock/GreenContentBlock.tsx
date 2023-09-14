import cn from "classnames";
import styles from "./GreenContentBlock.module.scss";
import { GreenContentProps } from "./GreenContentBlock.props";
import { useTranslation } from "next-i18next";
import MediumWhiteWeIcon from "../../../public/common/medium_white_we.svg";

const GreenContentBlock = ({ content, revers }: GreenContentProps) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles["green-content"])}>
      <div className={cn(styles["green-content__green-diagonal-background"])}>
        <div className={cn(styles["green-content__green-square-background"])}>
          <div className={cn(styles["container"])}>
            <div className={cn(styles["green-content__text-with-photo-block"])}>
              <p className={cn(styles["green-content__text-with-photo"])}>
                {" "}
                {t(`${content}.with_photo`)}{" "}
              </p>
              <div
                style={revers ? { order: -1 } : { order: 1 }}
                className={cn(styles["green-content__image-block"])}
              >
                <div className={cn(styles["green-content__image"])}></div>
                <div className={cn(styles["green-content__icon-block"])}>
                  <MediumWhiteWeIcon />
                </div>
              </div>
            </div>
            <p className={cn(styles["green-content__text-below-photo"])}>
              {t(`${content}.below_photo`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenContentBlock;
