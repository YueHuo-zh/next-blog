import Button from "@/compoments/Button/Button"
import Link from "next/link"
import styles from "./navlinks.module.css"
import clsx from "clsx"

type Links = {
  label: string,
  key: string,
  path: string,
  enabled: boolean
}

interface NavlinksProps {
  className?: string | Array<string>,
  links?: Array<Links>,
}

const Navlinks: React.FC<NavlinksProps> = ({ links, className }) => {

  const Navlink = links?.map((link, index) => {
    let item = (
      <li key={link.key} className={styles['navigation-links-item']}>
        <Button size="small" text>
          <Link href={link.path}>{link.label}</Link>
        </Button>
      </li>
    )
    return (
      link.enabled ? item : null
    )
  })

  return (
    <ul className={clsx(styles['navigation-links'], className)}>
      {Navlink}
    </ul>
  )
}

export default Navlinks;