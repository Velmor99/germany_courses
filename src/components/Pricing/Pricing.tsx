import { useTranslation } from "next-i18next";
import styles from "./Pricing.module.scss";
import cn from "classnames";
import { PricingProps } from "./Pricing.props";
import EuroIcon from '../../../public/common/euro.svg';

const Pricing = ({
  price,
  className,
  perLesson = false,
}: PricingProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles["pricing"], className)}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["pricing__block"])}>
          <div className={cn(styles["pricing__title-block"])}>
            <h1 className={cn(styles["pricing__title"])}>
              {t("pricing_title")}
            </h1>
          </div>
          <div className={cn(styles["pricing__price-block"])}>
            <p className={cn(styles["pricing__price"])}>{price}</p>
            <div className={cn(styles["pricing__thing"])}>
              <EuroIcon />
            </div>
          </div>
          {perLesson && (
            <div className={cn(styles["pricing__per-lesson-block"])}>
              <span className={cn(styles["pricing__per-lesson-text"])}>{t("per_lesson")}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
