import React, { Component } from "react";

class SideMenuBar extends Component {
  render() {
    window.$("button.hamburger").click(function() {
      console.log("clicked");
      // window.$(this).toggleC lass("is-active");
      let bool = window.$(this).hasClass("is-active");

      if (bool) {
        window.$(".sidenav").css("height", "0");
        window
          .$(".menu")
          .css("display", "none")
          .css("opacity", "0");

        window.$(this).removeClass("is-active");
      } else {
        window.$(".sidenav").css("height", "135px");
        window
          .$(".menu")
          .css("display", "block")
          .css("opacity", "1");
        window.$(this).addClass("is-active");
      }
    });
    return (
      <div id="mySidenav" className="sidenav">
        <a className="menu" href="/">
          홈
        </a>
        <a className="menu" href="/info">
          회사소개
        </a>
        <a className="menu" href="/contact">
          상담문의
        </a>
      </div>
    );
  }
}
export default SideMenuBar;
