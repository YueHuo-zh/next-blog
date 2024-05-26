import styles from "./sidemenu.module.css"

type Mode = 'vertical' | 'horizontal'

interface SideMenuProps {
  mode: Mode
}

const SideMenu:React.FC<SideMenuProps> = ({ ...props }) => {
  return (
    <div></div>
  );
}

export default SideMenu;