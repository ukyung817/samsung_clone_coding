import React from 'react';
import '../assets/sass/footer.scss';
import logo1 from '../assets/img/icon-footer-dcxi.jpg'
import logo2 from '../assets/img/icon-footer-ccm.png'
import logo3 from '../assets/img/icon-footer-wa-mo.jpg'
import logo4 from '../assets/img/icon-footer-eprivacy.svg'

const footerData = [
  {
    title: '기획전',
    items: [
      '기획전 홈',
      '삼성닷컴에서 더 많은 혜택을',
      '삼성닷컴 앱 다운로드',
      '스마트싱스',
      'All for All',
      '삼성케어플러스 모바일/PC',
      '삼성케어플러스 가전/TV',
      '갤럭시 캠퍼스',
      '갤럭시 AI 클래스',
      'AI 구독클럽',
      '아울렛',
      '#Samsung Experience',
      '삼닷 Live',
      '비즈니스',
      '스토리',
    ],
  },
  {
    title: '제품',
    items: [
      '갤럭시 스마트폰',
      '갤럭시 탭',
      '갤럭시 북',
      '갤럭시 워치',
      '갤럭시 버즈',
      'TV',
      '프로젝터',
      '무빙스타일',
      '삼성 오디오',
      '하만 오디오',
      '냉장고',
      '김치냉장고',
      '식기세척기',
      '인덕션',
    ],
  },
  {
    title: '',
    items: [
      '세탁기 & 건조기',
      '에어드레서 & 슈드레서',
      '에어컨',
      '시스템에어컨',
      '공기청정기',
      '청소기',
      '모니터',
      '프린터',
      '메모리/스토리지',
      '스마트싱스 상품',
      '소모품/액세서리',
      '데이코'
    ],
  },
  {
    title: '고객지원',
    items: [
      '고객지원 홈',
      '고객서비스 알림',
      '전화상담 예약',
      '출장서비스 예약',
      '갤럭시 수리모드',
      '삼성닷컴 FAQ',
      '삼성스토어',
      '삼성스토어 찾기',
      '서비스센터 찾기',
      '오늘보장 & 시간 맞춤 설치 서비스',
      '비즈니스 협력제안(DX)',
      '비즈니스 협력제안(DS)',
      'E - 카탈로그',
      '공지사항'
    ],
  },
  {
    title: '계정',
    items: [
      '삼성계정을 만들어야 하는 이유',
      '삼성전자 멤버십',
      '삼성멤버스 커뮤니티',
      '주문/배송 조회',
      '나의 정보',
      '나의 제품 관리',
      '쿠폰존<br/><br/>',
      '<span style="font-weight: bold; font-size: 18px">윤리 & 준법경영',
      '경영원칙',
      '부정제보',
      '법위반제보<br/><br/>',
      '<span style="font-weight: bold; font-size: 18px">부가정보',
      '협력회사 고충 건의',
      '폐카트리지 회수 신청'
    ],

  },

  {
    title: '지속가능경영',
    items: [
      '환경',
      '보안 & 개인정보 보호',
      '접근성',
      '다양성 형평성 포용성',
      '사회공헌',
      'Corporate Sustainability<br/><br/>',
      '<span style="font-weight: bold; font-size: 18px">회사소개',
      '기업정보',
      '사업정보',
      '브랜드 아이덴티티',
      '채용',
      '투자자 정보',
      '뉴스룸',
      '윤리',
      '디자인 삼성'
    ],

  },

];

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
                    <a href="#" dangerouslySetInnerHTML={{ __html: item }}></a>
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