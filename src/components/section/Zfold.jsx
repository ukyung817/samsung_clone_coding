import React from 'react'
import '../../assets/sass/zfold.scss'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import tip from '../../assets/img/tip.svg'
import Toggle from '../../assets/img/toggle.svg'
import Zfold1 from '../../assets/img/zfold2.webp'
import Zfold2 from '../../assets/img/zfold2.webp'
import Zfold3 from '../../assets/img/zfold3.webp'
import Zfold4 from '../../assets/img/zfold4.webp'
import OrderTop1 from '../../assets/img/order1.webp'
import OrderTop2 from '../../assets/img/order2.avif'
import OrderTop3 from '../../assets/img/order3.avif'
import Gemini from '../../assets/img/gemini.webp'

const PrevArrow = ({ onClick }) => (
  <button className="slick-prev-custom" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g transform="translate(40 40) rotate(180)"><g fill="rgba(255,255,255,0.45)" stroke="rgba(0,0,0,0.1)" stroke-width="1"><circle cx="20" cy="20" r="20" stroke="none" /><circle cx="20" cy="20" r="19.5" fill="none" /></g><g transform="translate(8 8)"><path d="M33.05,12.694l.864.9L25.636,21.52l8.278,7.923-.864.9L23.828,21.52Z" transform="translate(-16.828 -9.443)" /><rect width="24" height="24" fill="none" /></g></g></svg></button>
);
const NextArrow = ({ onClick }) => (
  <button className="slick-next-custom" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g transform="translate(40 40) rotate(180)"><g fill="rgba(255,255,255,0.45)" stroke="rgba(0,0,0,0.1)" stroke-width="1"><circle cx="20" cy="20" r="20" stroke="none" /><circle cx="20" cy="20" r="19.5" fill="none" /></g><g transform="translate(8 8)"><path d="M33.05,12.694l.864.9L25.636,21.52l8.278,7.923-.864.9L23.828,21.52Z" transform="translate(-16.828 -9.443)" /><rect width="24" height="24" fill="none" /></g></g></svg></button>
);

const zfoldData = [
    {
        className: "zfold1",
        title: "zfold1",
        imageSrc: Zfold1
    },
    {
        className: "zfold2",
        title: "zfold2",
        imageSrc: Zfold2
    },
    {
        className: "zfold3",
        title: "zfold3",
        imageSrc: Zfold3
    },
    {
        className: "zfold4",
        title: "zfold4",
        imageSrc: Zfold4
    },

];

const Zfold = () => {
  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <div className="Zfold_wrap">
        <div className="Zfold_header">
          <div className="Zfold_type">
            <div className="Zfold_type_text">
              <p><span>갤럭시 Z 폴드7</span></p><p>갤럭시 Z 플립7</p><p>갤럭시 Z 플립7 FE</p>
            </div>
            <div className="Zfold_type_review">
              <p>⭐️⭐️⭐️⭐️ 4.9 <span>(4423 건)</span></p>
            </div>
          </div>
          <div className="Zfold_banner">
            <div className="Zfold_banner_left">
              <p><span>New</span></p><h1>갤럭시 Z 폴드7 자급제</h1><p>SM-F966NDBPKOO</p>
            </div>
            <div className="Zfold_banner_right">
              <div className="Zfold_banner_right_text">
                <div className="Zfold_banner_right_top">
                  <p>최종 혜택 적용 예상가</p><img src={tip} alt="" /><p><span>2,207,600원</span></p>
                </div>
                <div className="Zfold_banner_right_bottom">
                  <p>최대 24개월 카드 무이자 할부</p><img src={tip} alt="" /><p><span>월 91,983원~</span></p></div></div>
              <button>구매하기</button>
            </div>
          </div>
          <div className="Zfold_compare">
            <p>특장점</p><p>비교하기</p>
          </div>
          <div className="Zfold_event">
            <p>★갤럭시 AI 매일매일 페스타★<br/>매일 달라지는 11월의 특별 할인 혜택을 확인해보세요!</p>
            <img src={Toggle} alt="" />
          </div>
        </div>
        <div className="Zfold_main">
          <div className="Zfold_img">
            <Slider {...settings3} className="Zfold_img_wrap">
              {zfoldData.map((zfold) => (
                  <img src={zfold.imageSrc} alt={zfold.title} />
              ))}
            </Slider>
          </div>
          <div className="Zfold_order">
            <div className="order_top">
              <div className="order_top1"><img src={OrderTop1} alt="" /><p>초슬림 디자인</p></div>
              <div className="order_top2"><img src={OrderTop2} alt="" /><p>2억 화소 카메라</p></div>
              <div className="order_top3"><img src={OrderTop3} alt="" /><p>Galaxy AI</p></div>
            </div>
            <div className="order_type">
              <h4>구매 방식</h4>
              <div className="order_type1"><h3>자급제</h3><p>새 기기만 사서 자유롭게 쓸래요</p></div>
              <div className="order_type2"><h3>통신사폰</h3><p>원하는 통신사와 요금제를 자유롭게 선택할래요</p></div>
            </div>
            <div className="order_model">
             <h4>모델</h4>
             <div className="order_model_box"><h3>갤럭시 Z 폴드7</h3></div>
             
            </div>
            <div className="order_data"></div>
            <div className="order_color"></div>
            <div className="order_amount"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zfold
