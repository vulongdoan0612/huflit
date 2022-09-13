import classNames from "classnames/bind";
import styles from "./Ads.module.scss"

const cx=classNames.bind(styles)
const pics = [
    "https://ads-cdn.fptplay.net/static/banner/2022/08/23_6304b5dc39486e00014e5944.jpg",
    "https://ads-cdn.fptplay.net/static/banner/2022/08/17_62fc9fb839486e00012f9bd6.png",

];

function Ads(props) {
    return ( 
        <div className={cx("pic")}>
            {pics.map((pic, index) => (
                <img key={index} src={pic}></img>
           ))}
        </div>
     );
}

export default Ads;