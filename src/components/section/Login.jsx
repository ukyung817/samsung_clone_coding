import React, { useState } from 'react'
import '../../assets/sass/login.scss'
import LoginLogo from '../../assets/img/login.svg'
import LoginLogo2 from '../../assets/img/login2.svg'
import Download from '../../assets/img/다운로드.svg'
import Download1 from '../../assets/img/다운로드1.svg'
import Google from '../../assets/img/구글.svg'
import Kakao from '../../assets/img/카카오.svg'


const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(prev => !prev);
  };

  return (
    <div>
      <div className="Login_wrap">
        <div className="Login_header">
          <img src={LoginLogo} alt="" />
        </div>
        <div className="Login_main">
          <div className="Login_box">
            <h1>하나의 계정으로, 모든 기기에서,<br />
              나만을 위한 서비스를!</h1>
            <h4>삼성 계정에 로그인하세요.</h4>
            <input name="email" placeholder=" " /><label for="user-input">이메일 주소 또는 비밀번호</label>
            <div className="Login_id">
              <div className="Login_id_text" onClick={toggleActive}>
                <img src={isActive ? Download1 : Download} alt="" />
                <p>ID 기억하기</p></div>
              <button className='Login_next'>다음</button></div>
            <div className="Login_link">
              <p>ID 찾기</p>
              <p>계정 생성</p></div>
            <div className="Login_sns">
              <button className='google_login'><img src={Google} alt="" />Google 계정으로 로그인</button>
              <button className='kakao_login'><img src={Kakao} alt="" />카카오 계정으로 로그인</button>
            </div>
          </div>
        </div>
        <div className="Login_footer">
          <div className="Login_footer_text">
            <p>이용약관</p><p>개인정보 처리방침</p><p>공지</p><p>문의하기</p>
          </div>
          <div className="Login_footer_logo">
            <img src={LoginLogo2} alt="" />
            <p>Copyright © 1995-2025 Samsung. All Rights Reserved.</p></div>
        </div>
      </div>
    </div>
  )
}

export default Login
