import styles from "./MainAdditionalServicesCard.module.scss";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { MainAdditionalServicesCardProps } from "./MainAdditionalServicesCard.props";

const MainAdditionalServicesCard = ({
  title,
  price,
  linkHref,
  className
}: MainAdditionalServicesCardProps) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles["card"])}>
      <div className={cn(styles["card__content"])}>
        <div className={cn(styles["card__background-image"], className)}>
          <h3 className={cn(styles["card__title"])}>{t(title)}</h3>
        </div>
        <div className={cn(styles["card__price-block"])}>
          {price === 0 ? (
            <p className={cn(styles["card__free-price"])}>{t("free")}</p>
          ) : (
            <p className={cn(styles["card__price"])}>{`€${price}`}</p>
          )}
          <Link className={cn(styles["card__link"])} href={linkHref}>{t("detailed")}</Link>
        </div>
      </div>
    </div>
  );
};

export default MainAdditionalServicesCard;
