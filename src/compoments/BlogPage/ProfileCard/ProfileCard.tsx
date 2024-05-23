import styles from "./profile.module.css"
import Card from "@/compoments/Card/Card"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"

interface ProfileCardProps {
    avatar: string | StaticImport,
    name?: string,
    description?: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
    avatar,
    name,
    description,
}) => {
    return (
        <Card>
            <div className={styles['profile-box']}>
                <div className={styles['avatar']}>
                    <Image src={ avatar } alt="avatar" width={95} height={95} />
                </div>
                <div className={styles['board']}>
                    <div className={styles['name']}>
                        <span>{ name }</span>
                    </div> 
                    <div className={styles['description']}>
                        { description }
                    </div>
                    <ul className={styles['dashboard']}>
                        <li className={styles['dashboard-item']}>
                            <span className={styles['data']}>post: 1</span>
                        </li>
                        <li className={styles['dashboard-item']}>
                            <span className={styles['data']}>pv: 1</span>
                        </li>
                        <li className={styles['dashboard-item']}>
                            <span className={styles['data']}>uv: 1</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    );
}

export default ProfileCard;