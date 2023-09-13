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
          <span className={cn(styles["card__strong"])}>{`${strong} `}</span>
          <span className={cn(styles["card__text"], {
            [styles["card__non-text"]]: text.length === 0
          })}>{text}</span>
        </p>
      </div>
    </div>
  )
}

export default HowItWorksCard;