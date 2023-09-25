import styles from "./FaqCard.module.scss";
import cn from "classnames";
import ArrowIcon from "@/../public/common/arrow.svg";
import { FaqCardProps } from "./FaqCard.props";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqCard = ({ title, innerContent }: FaqCardProps): JSX.Element => {
  const [isShowedInnerContent, setIsShowedInnerContent] = useState(false);

  return (
    <div className={cn(styles["card"])}>
      <div className={cn(styles["card__title-block"])}>
        <p className={cn(styles["card__title"])}>{title}</p>
        <motion.div>
          <button
            onClick={() => setIsShowedInnerContent(!isShowedInnerContent)}
            className={cn(styles["card__button"])}
          >
            <ArrowIcon />
          </button>
        </motion.div>
      </div>
      <AnimatePresence>
        {isShowedInnerContent && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 0.25 }}
            className={cn(styles["card__content-block"], {
              [styles["card__content-block-active"]]: isShowedInnerContent,
            })}
          >
            <p className={cn(styles["card__content"])}>{innerContent}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqCard;
