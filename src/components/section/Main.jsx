import React from 'react';
import { useNavigate } from 'react-router-dom';
import section1Video from '../../assets/video/section1.mp4';
import Section2 from '../../assets/img/section2.webp';
import Section3 from '../../assets/img/section3.webp';
import Section4 from '../../assets/img/section4.webp';
import Section5 from '../../assets/img/section5.jpg';
import story1 from '../../assets/img/story1.jpg'
import story2 from '../../assets/img/story2.jpg'
import story3 from '../../assets/img/story3.jpg'
import story4 from '../../assets/img/story4.jpg'
import story5 from '../../assets/img/story5.jpg'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { recommendedProducts, productData, productData1, productData2, productData3 } from '../data/data'


const PrevArrow = ({ onClick }) => (
  <button className="slick-prev-custom" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g transform="translate(40 40) rotate(180)"><g fill="rgba(255,255,255,0.45)" stroke="rgba(0,0,0,0.1)" stroke-width="1"><circle cx="20" cy="20" r="20" stroke="none" /><circle cx="20" cy="20" r="19.5" fill="none" /></g><g transform="translate(8 8)"><path d="M33.05,12.694l.864.9L25.636,21.52l8.278,7.923-.864.9L23.828,21.52Z" transform="translate(-16.828 -9.443)" /><rect width="24" height="24" fill="none" /></g></g></svg></button>
);
const NextArrow = ({ onClick }) => (
  <button className="slick-next-custom" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g transform="translate(40 40) rotate(180)"><g fill="rgba(255,255,255,0.45)" stroke="rgba(0,0,0,0.1)" stroke-width="1"><circle cx="20" cy="20" r="20" stroke="none" /><circle cx="20" cy="20" r="19.5" fill="none" /></g><g transform="translate(8 8)"><path d="M33.05,12.694l.864.9L25.636,21.52l8.278,7.923-.864.9L23.828,21.52Z" transform="translate(-16.828 -9.443)" /><rect width="24" height="24" fill="none" /></g></g></svg></button>
);
const PrevButton = ({ onClick }) => (
  <button className="slick-prev-button" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9.5" viewBox="0 0 13 9.5" data-di-res-id="73dca76e-35cd6d55" data-di-rand="1762613541262">
      <path id="path" d="M7.72,1.28A.75.75,0,0,1,8.78.22l4,4a.75.75,0,0,1,0,1.061l-4,4A.75.75,0,0,1,7.72,8.22l2.72-2.72H.75A.75.75,0,0,1,.75,4h9.689Z"></path>
    </svg></button>
);
const NextButton = ({ onClick }) => (
  <button className="slick-next-button" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9.5" viewBox="0 0 13 9.5" data-di-res-id="73dca76e-35cd6d55" data-di-rand="1762613541262">
      <path id="path" d="M7.72,1.28A.75.75,0,0,1,8.78.22l4,4a.75.75,0,0,1,0,1.061l-4,4A.75.75,0,0,1,7.72,8.22l2.72-2.72H.75A.75.75,0,0,1,.75,4h9.689Z"></path>
    </svg></button>
);

const Main = () => {
  const navigate = useNavigate();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settings2 = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <div>
      <div className="wrap">
        <div className="Section1">
          <div className="Section1_wrap">
            <video autoPlay loop muted playsInline width="1920" height="960"><source src={section1Video} type="video/mp4" /></video>
            <div className="text">
              <p>갤럭시 AI 매일매일 페스타, 11월의 특별 혜택!</p>
              <div className="text_button">
                <p>더 알아보기</p>
                <button onClick={() => navigate('/Zfold')}>구매하기</button></div>
            </div>
          </div>
        </div>

        <div className="Section2">
          <div className="Section2_wrap">
            <img src={Section2} alt="Section 2" />
            <div className="Section2_text">
              <p>더 알아보기</p>
              <button>구매하기</button></div>
            <Slider {...settings} className="product1_wrap">
              {productData.map((product) => (
                <div key={product.id} className={product.className}>
                  <h1>{product.title}</h1>
                  <img src={product.imageSrc} alt={product.title} />
                  <button>구매하기</button>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="Section3">
          <div className="Section3_wrap">
            <img src={Section3} alt="Section 3" width={1920} />
            <div className="Section3_text">
              <h1>2025 Neo QLED TV</h1>
              <p>으뜸효율가전도 삼닷에서 만나보세요</p>
              <div className="Section3_text_button">
                <p>제품 모두보기</p>
                <button>구매하기</button>
              </div>
            </div>
            <div className="product2_wrap">
              <Slider {...settings} className="product2_wrap">
                {productData1.map((product) => (
                  <div key={product.id} className={product.className}>
                    <h1>{product.title}</h1>
                    <img src={product.imageSrc} alt={product.title} />
                    <button>제품 모두 보기</button>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="Section4">
          <div className="Section4_wrap">
            <img src={Section4} width={1920} />
            <div className="Section4_text">
              <h1>Bespoke AI 김치플러스</h1>
              <p>으뜸효율가전도 삼닷에서 만나보세요</p>
              <div className="Section4_text_button">
                <p>제품 모두보기</p>
                <button>구매하기</button>
              </div>
            </div>
            <div className="product3_wrap">
              <Slider {...settings} className="product3_wrap">
                {productData2.map((product) => (
                  <div key={product.id} className={product.className}>
                    <h1>{product.title}</h1>
                    <img src={product.imageSrc} alt={product.title} />
                    <button>제품 모두 보기</button>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="Section5">
          <div className="Section5_wrap">
            <img src={Section5} width={1920} />
            <div className="Section5_text">
              <h1>Bespoke AI 콤보</h1>
              <p>으뜸효율가전도 삼닷에서 만나보세요</p>
              <div className="Section5_text_button">
                <p>제품 모두보기</p>
                <button>구매하기</button>
              </div>
            </div>
            <div className="product4_wrap">
              <Slider {...settings} className="product4_wrap">
                {productData3.map((product) => (
                  <div key={product.id} className={product.className}>
                    <h1>{product.title}</h1>
                    <img src={product.imageSrc} alt={product.title} />
                    <button>제품 모두 보기</button>
                  </div>
                ))}
              </Slider>
              <div className="section-title"><h1>당신에게 딱 맞는 추천제품</h1></div>
              <Slider {...settings2} className="product4_slider">
                {recommendedProducts.map(product => (
                  <div key={product.id} className="product-item">
                    <div className="product-image-area">
                      <img src={product.image} alt={product.name} className="product-img" /></div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-price">
                        <span className="price-name">{product.price}</span><br />
                        <span className="original-price">{product.originalPrice}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="product-info-border">
                <div className="product-info-border-fill"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="Section6">
          <div className="Section6_wrap">
            <div className="product5_wrap">
              <div className="section-title"><h1>삼성의 다양한 스토리</h1></div>
              <Slider {...settings2} className="product5_slider">
                <div className="product5_1"><img src={story1} /><p>스마트싱스</p></div>
                <div className="product5_2"><img src={story2} /><p>삼성 스마트 TV를 선택한 이유</p></div>
                <div className="product5_3"><img src={story3} /><p>삼성 헬스</p></div>
                <div className="product5_4"><img src={story4} /><p>갤럭시로 스위치</p></div>
                <div className="product5_5"><img src={story5} /><p>Art TV</p></div>
              </Slider>
              <div className="product-info-border">
                <div className="product-info-border-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
