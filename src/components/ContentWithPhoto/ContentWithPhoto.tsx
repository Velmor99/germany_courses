import cn from "classnames";
import styles from "./ContentWithPhoto.module.scss";
import { useTranslation } from "next-i18next";
import { ContentWithPhotoProps } from "./ContentWithPhoto.props";
import MediumGreenWeIcon from "../../../public/common/medium_green_we.svg";

const ContentWithPhoto = ({ partOne, partTwo }: ContentWithPhotoProps) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles["content-with-photo"])}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["content-with-photo__content"])}>
          <div className={cn(styles["content-with-photo__image-block"])}>
            <div className={cn(styles["content-with-photo__image"])}></div>
            <div className={cn(styles["content-with-photo__icon-block"])}>
              <MediumGreenWeIcon />
            </div>
          </div>

          <div>
            <p className={cn(styles["content-with-photo__text-part-one"])}>
              {t(partOne)}
            </p>
            <p className={cn(styles["content-with-photo__text-part-two"])}>
              {t(partTwo)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWithPhoto;
