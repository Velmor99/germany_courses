import { TextComponentProps } from "./Text.props";
import styles from './Text.module.scss';
import cn from 'classnames';

const TextComponent = ({text, targets, textColor, fontWeight}: TextComponentProps) => {
  console.log(fontWeight)
  const wrapWords = () => {
    const arr = text.split(" ")
    const result: Array<string & {target: string}> = arr.map((item) => {
      targets.map((target) => {
        if(item === target) {
          return item = {target: target}
        }
      })
      return item;
    })
    console.log(result)
    return (
      <span>
        {result.map(item => {
          if(item.target) {
            return <span className={cn(styles["text__"+textColor], styles["text__weight-"+fontWeight])}>{item.target + " "}</span>
          } else {
            return item + " "
          }
        })}
      </span>
    )
  }
  
  return (
    <>
    {wrapWords()}
    </>
  )
}

export default TextComponent;