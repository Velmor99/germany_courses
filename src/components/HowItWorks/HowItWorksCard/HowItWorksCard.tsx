import { HowItWorksCardProps } from "./HowItWorksCard.props";
import styles from './HowItWorksCard.module.scss';
import cn from 'classnames';

const HowItWorksCard = ({strong, text, order}: HowItWorksCardProps) => {
  return (
    <div className={cn(styles["card"])}>
      <div className={cn(styles["card__order-block"])}>
        <p className={cn(styles["card__order"])}>{`${order}.`}</p>
      </div>
      <div className={cn(styles["card__text-block"])}>
        <p className={cn(styles["card__content-block"])}>
          <strong className={cn(styles["card__strong"])}>{`${strong} `}</strong>
          <span className={cn(styles["card__text"])}>{text}</span>
        </p>
      </div>
    </div>
  )
}

export default HowItWorksCard;