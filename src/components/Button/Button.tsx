import { ButtonProps } from "./Button.props";
import cn from 'classnames';
import styles from './Button.module.scss';


const ButtonComponent = ({children, className, buttonType, ...props}: ButtonProps) => {
  return (
    <button className={cn(styles["button"], className, {
      [styles["green"]]: buttonType === "green",
      [styles["white"]]: buttonType === "white"
    })}
    {...props}>
      {children}
    </button>
  )
}

export default ButtonComponent;