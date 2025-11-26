import React from 'react';
import '../assets/sass/footer.scss';
import logo1 from '../assets/img/icon-footer-dcxi.jpg'
import logo2 from '../assets/img/icon-footer-ccm.png'
import logo3 from '../assets/img/icon-footer-wa-mo.jpg'
import logo4 from '../assets/img/icon-footer-eprivacy.svg'
import { footerData } from '../components/data/data.js'

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="Footer_wrap">
          {footerData.map((section, sectionIndex) => (
            <div className={`Footer${sectionIndex + 1}`} key={sectionIndex}>
              <p>{section.title}</p>
              <ul className="submenu">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} id={itemIndex === 0 ? 'sub1' : undefined}>
                    <a href="/" dangerouslySetInnerHTML={{ __html: item }}></a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="F_Section1">
          <p>
            삼성전자 주식회사 대표이사 : 전영현 | 사업자등록번호 : 124-81-00998{' '}
            <span>사업자 정보확인</span> | 통신판매업 신고 : 2000-경기수원-0515
            <br />
            사업장주소 : 경기도 수원시 영통구 삼성로 129(매탄동) | 호스팅서비스사업자 : 한국아이비엠(주)｜대표번호 : 02-2255-0114 | 제품/서비스/멤버십: 1588-3366(통화요금 : 발신자부담)｜삼성닷컴 구매문의 : 1588-6084 | #Samsung Experience 문의 : 1811-9228
            <br />
            본 사이트에서 판매되는 상품 중에는 등록된 개별 판매자가 판매하는 상품이 포함되어 있습니다.
            개별 판매자 판매 상품의 경우 삼성전자(주)는 통신판매중개업자로서 통신판매의 당사자가 아니므로, 개별 판매자가 등록한 상품, 거래정보 및 거래 등에 대해 책임을 지지 않습니다.{' '}
            <span>소비자분쟁해결기준</span>
            <br />
            본 사이트의 컨텐츠는 저작권법의 보호를 받는 바 무단 전재, 복사, 배포 등을 금합니다.
          </p>
        </div>
        <div className="F_Section2">
          <p>Copyright © 1995-2025 Samsung. All Rights Reserved.</p>
          <div className="logo_F">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
          </div>
        </div>
        <div className="F_Section3">
          <p><span>한국/한국어</span> | 이메일 무단 수집거부  아이디어 정책  사이트맵  <span>이용약관  개인정보처리방침</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;