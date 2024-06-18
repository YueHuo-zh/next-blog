import React from "react";
import styles from "./iconbox.module.css"
import IconButton from "./IconButton/IconButton";


type Icon = {
  icon: React.ReactNode;
  onClick: () => void;
};

interface IconBoxProps {
  icons : Array<Icon>
}

const IconBox:React.FC<IconBoxProps> = ({ ...props }) => {

  const iconItem = props.icons?.map((item, index) => {
    return (
      <li key={index} className={styles['icon-item']}>
        <IconButton icon={item} />
      </li>
    )
  })

  return (
    <ul className={ styles['icon-list'] }>
      {iconItem}
    </ul>
  );
}

export default IconBox;