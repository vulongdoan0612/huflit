import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./LeftBtn.module.scss";
import './LeftBtn.css'
import Menu2 from "../Menu/Menu2";
import { useEffect } from "react";
const cx = classNames.bind(styles);

function LeftBtn(props) {

    // const [show, setShow] = useState(false);
    const [click,setClick]=useState(false)
    // const handleShow = () => {
    //   setClick((click) => !click);
    //   // setShow((show) => !show);

    //   //   if (setClick(click) === false) {
    //   //     setClick(show === false);
    //   //   } else {
    //   //     setClick(show === false);
    //   //   }
    //   // if (setShow(show) === false) {
    //   //   setClick(click === false);
    //   // } else {
    //   //   setClick(click === true);
    //   // }
     
   
    // };

  const handleClick = () => {
            // setClick((click) => !click);
setClick((click) => !click);
    // setShow((show) => !show);
      
     
      // if (setShow(show) === false) {
      //     setShow(click===false)
      // }
      // else {
      //     setShow(click === true);
      // }
      // if (setClick(click) === true) {
      //   setShow(show === true);
      // } else {
      //   setShow(show === false);
      // }
    };
    
    return (
      <div>
        {/* <div
          className={`show ${show ? "block" : "none"}`}
          onClick={handleShow}
        ></div> */}
        <div className={`toggle ${click ? "active" : " "}`}>
          <div className={`toggleMenu`}>
            <Menu2></Menu2>
          </div>
          <button onClick={handleClick} className={cx("leftBtn")}>
            <span className={cx("leftSpan")}></span>
            <span className={cx("leftSpan")}></span>
            <span className={cx("leftSpan")}></span>
          </button>
        </div>
      </div>
    );
}

export default LeftBtn;
