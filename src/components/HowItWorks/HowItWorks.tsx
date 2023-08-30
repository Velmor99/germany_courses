import styles from "./HowItWorks.module.scss";
import cn from "classnames";
import { useTranslation } from "next-i18next";
import { HowItWorksProps } from "./HowItWorks.props";
import HowItWorksCard from "./HowItWorksCard/HowItWorksCard";
import data from "@/../public/locales/de/common.json";

const HowItWorks = ({ title, dataString }: HowItWorksProps) => {
  const { t } = useTranslation();

  const createFormatedData = (): { strong: string; text: string }[] | [] => {
    const elements = Object.keys(data[`${dataString}`]);
    const targetData = data[`${dataString}`][1];
    if (typeof targetData !== 'string') {
      return elements.map((item) => {
        return {
          strong: t(`${dataString}.${item}.strong`),
          text: t(`${dataString}.${item}.text`),
        };
      });
    } else {
      return elements.map((item) => {
        return {
          strong: t(`${dataString}.${item}`),
          text: "",
        };
      });
    }
  };

  return (
    <div className={cn(styles["how-it-works"])}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["how-it-works__content"])}>
          <div className={cn(styles["how-it-works__title-block"])}>
            <h2 className={cn(styles["how-it-works__title"])}>
              {t(`${title}`)}
            </h2>
          </div>
          <ul className={cn(styles["how-it-works__list"])}>
            {createFormatedData().map((item, idx) => (
              <li key={idx} className={cn(styles["how-it-works__list-item"])}>
                <HowItWorksCard
                  strong={item.strong}
                  text={item.text}
                  order={idx + 1}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
