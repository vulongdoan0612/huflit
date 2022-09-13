import classNames from "classnames/bind";
import styles from './Introduce.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const cx =classNames.bind(styles)
function Introduce(props) {
    useEffect(() => {
      AOS.init({
        duration: 600,
        offset: 200,
      });
    }, []);
    return (
      <div>
        <div className={cx("part1")}>
          <div className={cx("introduce1")}>
            <div className={cx("introImg")}>
              <div className={cx("img")}></div>
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/2dc90a8e-4441-4703-8b73-1ca831fb0733/VN-vi-20220822-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
            </div>
            <div className={cx("introContent")}>
              <div
                data-aos="zoom-in-up"
                data-aos-anchor-placement="top-bottom"
                className={cx("introTitle")}
              >
                <h1>
                  Chương trình truyền hình, phim không giới hạn và nhiều nội
                  dung khác.
                </h1>
                <h3>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h3>
                <h4>
                  Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại
                  tư cách thành viên của bạn.
                </h4>
              </div>
              <div className={cx("start")}>
                <input
                  type="email"
                  placeholder="Địa chỉ email"
                  className={cx("email")}
                ></input>
                <button className={cx("batdau")}>BẮT ĐẦU</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Introduce;