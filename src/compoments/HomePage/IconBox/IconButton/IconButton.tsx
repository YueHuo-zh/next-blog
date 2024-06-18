import Button from "@/compoments/Button/Button";
import styles from "./iconbutton.module.css"


type Icon = {
  icon: React.ReactNode;
  onClick: () => void;
};

interface IconButtonProps {
  icon : Icon,
}

const IconButton:React.FC<IconButtonProps> = ({ icon }) => {

  return (
    <>
      <Button onClick={ icon.onClick } className={ styles['icon-button'] }>
        { icon.icon }
      </Button>
    </>
  )
}

export default IconButton