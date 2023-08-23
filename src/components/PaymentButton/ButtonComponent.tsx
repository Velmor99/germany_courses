import cn from 'classnames';
import { useState } from 'react';
import styles from './button.module.scss';
import { ButtonProps } from './button.props';

const PaymentButton = ({classname, children, apperance}: ButtonProps): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);
  const changeButtonState = (value: boolean) => {
    setIsClicked(value)
  }
  return (
    <button className={cn(styles.button, classname, {
      [styles["payment"]]: apperance === "payment",
      [styles["payment-active"]]: isClicked
    })}
    onMouseDown={() => changeButtonState(true)}
    onMouseUp={() => changeButtonState(false)}
    onMouseLeave={() => changeButtonState(false)}
    >
      {children}
    </button>
  )
}

export default PaymentButton;