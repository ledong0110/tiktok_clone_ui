import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://repository-images.githubusercontent.com/135786093/b56ad700-6d50-11e9-9775-9f64c1e1414e" alt="username" />
            <div className={cx('info')}>
                <h4 className={cx('name')} >
                    <span>Nguyen A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>anguyevan</span>
            </div>
        </div>
     );
}

export default AccountItem;