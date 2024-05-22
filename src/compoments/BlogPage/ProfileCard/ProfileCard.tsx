import styles from "./profile.module.css"
import Card from "@/compoments/Card/Card"
import Image from "next/image"

interface ProfileCardProps {

}

const ProfileCard : React.FC<ProfileCardProps> = ({ ...props }) => {
    return (
        <Card>
            <div className={ styles['profile-box']}>
                <div className={ styles['avatar'] }>
                    <Image src="https://q1.qlogo.cn/g?b=qq&nk=2637476783&s=640" alt="avatar" width={ 95 } height={ 95 } />
                </div>
                <div className={ styles['board'] }>
                    <div className={ styles['name'] }>
                        <span>月火💤</span>
                    </div>
                    <div className={ styles['description'] }>
                        心里无法发出的声音就通过这个博客喊出来吧.
                    </div>
                    <ul className={ styles['dashboard'] }>
                        <li className={ styles['dashboard-item'] }>
                            <span className={ styles['data-header'] }>post</span>
                            <span className={ styles['count'] }>1</span>
                        </li>
                        <li className={ styles['dashboard-item'] }>
                            <span className={ styles['data-header'] }>pv</span>
                            <span className={ styles['count'] }>1</span>
                        </li>
                        <li className={ styles['dashboard-item'] }>
                            <span className={ styles['data-header'] }>uv</span>
                            <span className={ styles['count'] }>1</span>
                        </li>
                        <li className={ styles['dashboard-item'] }>
                            <span className={ styles['data-header'] }>踩一下</span>
                            <span className={ styles['count'] }>1</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    );
}

export default ProfileCard;