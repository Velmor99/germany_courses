import cn from "classnames";
import styles from "./Banner.module.scss";
import { BannerProps } from "./Banner.props";
import BannerContent from "./BannerContent/BannerContent";
import { useTranslation } from "next-i18next";

const Banner = ({ bannerName, greenContent = false }: BannerProps) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles["banner"])}>
      <div className={cn(styles["banner__background-desktop"])}>
        <div className={cn(styles["banner__gradient"])}>
        <div className={cn(styles["container"])}>
          <div className={cn(styles["banner__content"])}>
            <div className={cn(styles["banner__background"])}>
              {/* <img src=""></img> */}
            </div>
            <BannerContent
             className={cn(styles["banner__inner-content"])}
              strong={t(`${bannerName}.strong`)}
              text={t(`${bannerName}.text`)}
              buttonText={t(`${bannerName}.button`)}
              greenText={
                greenContent ? t(`${bannerName}.green_text`) : undefined
              }
            />
          </div>
        </div>
        {greenContent && (
          <div className={cn(styles["banner__mobile-green-block"])}>
            <p className={cn(styles["banner__mobile-green-text"])}>
              Мы поможем шагнуть уверенно!
            </p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
