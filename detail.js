function sideNavFolding() {
  // 전체 내비게이션 영역 width 70px로 줄이기
  const wrapperNav = document.querySelector(".wrapper_nav");
  wrapperNav.classList.toggle("fold");

  //   display: none 속성
  const navTitleIcon = document.querySelector(".nav_title_icon");
  navTitleIcon.classList.toggle("fold");

  const sidenavSns = document.querySelector(".sidenav_sns");
  sidenavSns.classList.toggle("fold");

  const sidenavLang = document.querySelectorAll(".sidenav_lang");
  for (var i = 0; i < sidenavLang.length; i++) {
    sidenavLang[i].classList.toggle("fold");
  }

  const sidenavBlank = document.querySelector(".sidenav_blank");
  sidenavBlank.classList.toggle("fold");

  //   오른쪽 콘텐츠 사이즈 조절
  const wrapperContent = document.querySelector(".wrapper_content");
  wrapperContent.classList.toggle("fold");
}
