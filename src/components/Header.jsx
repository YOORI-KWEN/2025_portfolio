import React from "react";

const  Header = () => {
  return(
    <>
    <Header id="header" role="banner">
      <div class="header_inner">
        <div class="header_logo">
          <a href="#">PORTFOLIO <em>developer</em></a>
        </div>
        <nav class="header_nav" role="navgation" aria-label="메인 메뉴">
          <ul>
            <li><a href="#intro">intro</a></li>
            <li><a href="#skill">skill</a></li>
            <li><a href="#site">site</a></li>
            <li><a href="#port">port</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
        <div
          class="header_nav_moile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded="false"
          role="button"
          tabindex="0"  
        >
          <span></span>
        </div>
      </div>
    </Header>
    </>
  )
}

export default Header;