import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/sass/header.scss';
import Logo from '../assets/img/logo.png';
import { headerTopLinks, headerMainLinks } from '../components/data/data.js'

const Header = () => {
  const [showMypageMenu, setShowMypageMenu] = useState(false);
  const [activeMainMenu, setActiveMainMenu] = useState(null);
  const navigate = useNavigate();
  const currentActiveMenuData = headerMainLinks.find(
    (link) => link.name === activeMainMenu
  );

  const handleMypageSelect = (option) => {
    if (option === "로그인/회원가입") navigate("/section/Login");
    setShowMypageMenu(false);
  };

  const mypageDropdownOptions = [
    "로그인/회원가입",
    "삼성 계정을 만들어야 하는 이유",
    "주문/배송조회",
    "멤버십",
    "나의 제품 관리",
    "쿠폰존",
    "삼성닷컴 회원 혜택",
    "참여형 이벤트",
  ];

  const handleMouseLeave = () => {
    setActiveMainMenu(null);
  };

  const handleSubmenuMouseEnter = (menuName) => {
    setActiveMainMenu(menuName);
  };

  const handleMypageMouseEnter = () => {
    setShowMypageMenu(true);
  };

  const handleMypageMouseLeave = () => {
    setShowMypageMenu(false);
  };

  return (
    <div
      className="Header"
      onMouseLeave={handleMouseLeave}>
      <ul className="header_top">
        {headerTopLinks.map((link, index) => (
          <li key={`top-${index}`}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}</ul>

      <div className="header_main">
        <div className="logo_H">
          <img onClick={() => navigate('/')} src={Logo} alt="로고" /></div>

        <ul className="main_menu_list">
          {headerMainLinks.map((mainLink, index) => (
            <li
              key={`main-${index}`}
              onMouseEnter={() => setActiveMainMenu(mainLink.name)}
              className={activeMainMenu === mainLink.name ? 'active' : ''}
            >
              <a href={mainLink.href}>{mainLink.name}</a>
            </li>
          ))}
        </ul>
        <div className="function">
          <button className="search">
            <svg id="icon-svg-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-di-res-id="a311f385-4f3c3578" data-di-rand="1762521480477">
              <rect width="24" height="24" fill="none"></rect>
              <path d="M105.964,196.841a9.125,9.125,0,0,1,6.88,15.121l6.313,6.312-.884.884-6.313-6.312a9.125,9.125,0,1,1-6-16Zm0,1.25a7.875,7.875,0,1,0,7.876,7.875A7.875,7.875,0,0,0,105.964,198.091Z" transform="translate(-96 -196)"></path>
            </svg>
          </button>
          <div className="function_right">
            <button onClick={() => navigate('/Cart')} className='cart'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-di-res-id="fb72e3d3-7061186b" data-di-rand="1762521480478">
                <rect width="24" height="24" fill="none"></rect>
                <path d="M643.456,213.832a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,643.456,213.832Zm-8.736,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,634.72,213.832Zm8.736,1.25a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,643.456,215.082Zm-8.736,0a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,634.72,215.082Zm-6.049-17.832a.965.965,0,0,1,.9.663l.013.046.8,3.073H647.9a.806.806,0,0,1,.8.979l-.01.045-2.349,9.073a.965.965,0,0,1-.865.708l-.049,0H632.645a.967.967,0,0,1-.9-.662l-.013-.047-3.3-12.629h-2.9v-1.25Zm18.662,5.032h-16.62l2.168,8.307h12.3Z" transform="translate(-625.251 -196)"></path>
              </svg>
            </button>
            <div className="mypage"
              onMouseEnter={handleMypageMouseEnter} 
              onMouseLeave={handleMypageMouseLeave} >
              <svg id="icon-svg-mypage" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-di-res-id="43ce84b6-e4d0ef4c" data-di-rand="1762521480479">
                <rect width="26" height="26" fill="none"></rect>
                <path d="M204,256.875a7.661,7.661,0,0,1,7.625,7.389v1.986a.875.875,0,0,1-.875.875h-13.5a.875.875,0,0,1-.875-.875v-1.986A7.661,7.661,0,0,1,204,256.875Zm0,1.25a6.413,6.413,0,0,0-6.375,6.139v1.611h12.75v-1.611a6.412,6.412,0,0,0-6.272-6.138Zm0-13.25A5.125,5.125,0,1,1,198.875,250,5.125,5.125,0,0,1,204,244.875Zm0,1.25A3.875,3.875,0,1,0,207.875,250,3.876,3.876,0,0,0,204,246.125Z" transform="translate(-192 -243.875)"></path>
              </svg>

              <div className="mypage_bar">
                <div className="mypage_dropdown_container">
                  {showMypageMenu && (
                    <div className="mypage_dropdown">
                      {mypageDropdownOptions.map((option, index) => (
                        <p
                          key={`mypage-option-${index}`}
                          className={`mypage-item-${option.replace(/[\s/]/g, '')}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMypageSelect(option);
                          }}>
                          {option}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div></div>
          </div></div>
      </div>
      {currentActiveMenuData && (
        <div
          className="full_width_submenu"
          onMouseEnter={() => handleSubmenuMouseEnter(currentActiveMenuData.name)}>
          <div className="submenu_content_wrapper">
            {currentActiveMenuData.subCategories && currentActiveMenuData.subCategories.length > 0 && (
              <div className="submenu_left_categories">
                <ul>
                  {currentActiveMenuData.subCategories.map((cat, idx) => (
                    <li key={`subcat-${idx}`}>
                      <a href="/">{cat}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="submenu_center_products">
              {currentActiveMenuData.products && currentActiveMenuData.products.length > 0 && (
                <div className="product_grid">
                  {currentActiveMenuData.products.map((product, idx) => (
                    <div key={`prod-${idx}`} className="product_item">
                      <img src={product.img} alt={product.name} />
                      <p>{product.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {currentActiveMenuData.extraLinks && currentActiveMenuData.extraLinks.length > 0 && (
              <div className="submenu_right_links">
                {currentActiveMenuData.extraLinks.map((section, sectionIndex) => (
                  <div key={`extra-section-${sectionIndex}`} className="extra_link_section">
                    <h3 className={section.isBoldTitle ? 'bold-title' : ''}>
                      {section.title}
                    </h3>
                    <ul>
                      {section.items.map((item, itemIndex) => (
                        <li key={`extra-item-${sectionIndex}-${itemIndex}`}>
                          <a href={item.href}>{item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;