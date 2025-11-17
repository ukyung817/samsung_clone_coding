import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/sass/cart.scss';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import prevVectorImg from '../../assets/img/ico-mmi-prev.png'
import nextVectorImg from '../../assets/img/ico-mmi-next.png'
import iconCart from '../../assets/img/icon-cart.svg'
import cardDiscount from '../../assets/img/금융배너.webp'
import iconAdvice from '../../assets/img/icon-advice.svg'
import Cart01 from '../../assets/img/cart01.avif'
import Cart02 from '../../assets/img/cart02.webp'
import Cart03 from '../../assets/img/cart03.webp'
import Cart04 from '../../assets/img/cart04.webp'
import Cart05 from '../../assets/img/cart05.webp'
import Cart06 from '../../assets/img/cart06.webp'
import Cart07 from '../../assets/img/cart07.webp'
import Cart08 from '../../assets/img/cart08.avif'
import Cart09 from '../../assets/img/cart09.avif'

const cartRecommendProducts = [
  { id: 1, name: '2025 The Movingstyle', price: '기준가', originalPrice: '1,490,000원', point_name: '적립 예정 포인트', point: '1,490p', review: '⭐️4.8 (11)', imageSrc: Cart01 },
  { id: 2, name: '무빙스타일 Edge (80cm) 스탠다드', price: '쿠폰 적용 예상가', originalPrice: '679,000원', point_name: '적립 예정 포인트', point: '679p', review: '⭐️4.8 (14)', imageSrc: Cart02 },
  { id: 3, name: '무빙스타일 M7 (107.9cm) 스탠다드', price: '쿠폰 적용 예상가', originalPrice: '759,000원', point_name: '적립 예정 포인트', point: '759p', review: '⭐️4.9 (101)', imageSrc: Cart03 },
  { id: 4, name: '무빙스타일 QLED 4K (QFE1) (138cm) 스탠다드', price: '쿠폰 적용 예상가', originalPrice: '1,240,000', point_name: '적립 예정 포인트', point: '1240p', review: '⭐️4.6 (21)', imageSrc: Cart04 },
  { id: 5, name: '갤럭시 버즈3 프로', price: '쿠폰 적용 예상가', originalPrice: '229,000원', point_name: '적립 예정 포인트', point: '229p', review: '⭐️4.6 (8624)', imageSrc: Cart05 },
  { id: 6, name: '갤럭시 워치8(블루투스, 40mm)', price: '혜택가', originalPrice: '398,000원', point_name: '적립 예정 포인트', point: '398p', review: '⭐️4.8 (3734)', imageSrc: Cart06 },
  { id: 7, name: '갤럭시 S25 자급제(삼성닷컴/삼성 강남 전용컬러)', price: '쿠폰 적용 예상가', originalPrice: '1,047,500원', point_name: '적립 예정 포인트', point: '1,047p', review: '⭐️4.9 (6966)', imageSrc: Cart07 },
  { id: 8, name: '2025 QLED 4K QF8A(189cm)', price: '쿠폰 적용 예상가', originalPrice: '2,040,000원', point_name: '적립 예정 포인트', point: '2,040p', review: '⭐️4.8 (266)', imageSrc: Cart08 },
  { id: 9, name: 'BespokeAI 콤보 25/18kg(177.8mmLCD)', price: '기준가', originalPrice: '4,199,000원', point_name: '적립 예정 포인트', point: '4,199p', review: '⭐️4.9 (393)', imageSrc: Cart09 },
];

const NextVector = ({ onClick }) => (
  <button className="next-vector-img" onClick={onClick}>
    <img src={nextVectorImg} alt="" /></button>
);

const PrevVector = ({ onClick }) => (
  <button className="prev-vector-img" onClick={onClick}>
    <img src={prevVectorImg} alt="" /></button>
);

const RecommendProductItem = ({ product }) => (
  <div className="recommend-item-wrap">
    <div className="product-image">
      {product.imageSrc && (
        <img
          src={product.imageSrc}
          alt={product.name}
          className="product-image"
        />
      )}
    </div>
    <div className="product-detail">
    <p className="product-name">{product.name}</p>
    <div className="product-price-info">
      <span className="price-name">{product.price}</span>
      {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
    </div>
    <div className="product-point-info">
      <span className="point-name">{product.point_name}</span>
      {product.point_name && <span className="point-price">{product.point}</span>}
    </div>
    <div className="product-review"></div>
    <p className="review-name">{product.review}</p>
  </div></div>
);

const Cart = () => {
   const navigate = useNavigate();

  const settings3 = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    prevArrow: <PrevVector />,
    nextArrow: <NextVector />,
  };

  return (
    <div>
      <div className="Cart_wrap">
        <div className="Cart_left">
          <div className="Cart_menu"><p>{"Home > 장바구니"}</p></div>
          <div className="Cart_cart">
            <h1>장바구니</h1>
            <div className="Cart_banner">
              <img src={cardDiscount} alt="" /></div>
            <div className="Cart_empty">
              <img src={iconCart} alt="" />
              <p>아직 장바구니에 담은 제품이 없어요.<br />추천 제품부터 둘러볼까요?</p></div>
          </div>

          <div className="Cart_recommend">
            <h1>나를 위한 추천제품</h1>
            <h2>관심사&트렌드를 분석한 스마트 추천 제품이에요.</h2>
            <div className="recommend-slider-container">
              <Slider {...settings3}>
                {cartRecommendProducts.map((product) => (
                  <div key={product.id} className='cart-product'>
                    <RecommendProductItem product={product} />
                  </div>
                ))}
              </Slider>
              <div className="recommend-slider-button">
                <button className='recommend-1'>이전으로</button>
                <button className='recommend-2'onClick={() => navigate('/')}>홈으로</button>
              </div>
            </div>
          </div>

          <div className="Cart_footer">
            <div className="Cart_footer_left">
              <p>고객센터<span>1588-6084</span> | 평일 09시 ~ 18시 / 토요일 09시 ~ 13시 (일요일, 공휴일은 운영하지 않습니다.)</p>
              <p>e식품관 고객센터<span>1811-9228</span> | 평일 09시~ 18시(주말, 공휴일은 운영하지 않습니다.)</p>
            </div>
            <div className="Cart_footer_right">
              <p>주문취소 안내</p>
            </div>
          </div>
        </div>

        <div className="Cart_right">
          <div className="Cart_login">
            <div className="Cart_login1">
              <div className="Cart_login1_text">
                <img src={iconAdvice} alt="" />
                <p>로그인을 하시면 장바구니에 담긴 이전 상품을<br /> 확인하실 수 있습니다.</p></div>
              <button onClick={() => navigate('/section/Login')}>로그인</button>
            </div>
            <div className="Cart_login2">
              <p>전체 상품<span>0개</span></p>
              <p>주문 금액<span>0원</span></p>
              <p>할인 금액<span className='blue'>0원</span></p>
            </div>
            <div className="Cart_login3">
              <p>결제 예정 금액<span>0</span> 원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;