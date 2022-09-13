import classNames from "classnames/bind";
import styles from './Logo.module.scss'

const cx=classNames.bind(styles)
function Logo() {
    return (
      <div className={cx("logo")}>
        <img src="https://movie-infov1.surge.sh/static/media/Netflix_Logo_RGB.f4070143.png" alt=""></img>
      </div>
    );
}

export default Logo;
