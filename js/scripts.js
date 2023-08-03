/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function openPopup(event) {
    event.preventDefault(); // 기본 동작(링크 이동) 방지
    
    // 클릭한 위치를 기준으로 팝업 생성
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = '이메일 주소: wlsrlgk1@naver.com';
    if (event === 'jin'){
        popup.innerHTML = '이메일 주소: wlsrlgk1@naver.com';
    } else if (event === 'ook') {
        popup.innerHTML = '이메일 주소: wjd6056@naver.com';
    }

    // 팝업 창을 클릭한 위치로 이동
    var x = event.clientX;
    var y = event.clientY + window.scrollY; // 스크롤된 위치를 보정합니다.
    popup.style.left = x + 'px';
    popup.style.top = y + 'px';

    // 생성된 팝업 창을 body에 추가
    document.body.appendChild(popup);

    // 팝업 스타일을 변경하여 보이도록 처리
    popup.style.display = 'block';

    // 문서 클릭 시 팝업 닫기
    document.addEventListener('click', function closePopup(event) {
        if (!event.target.matches('#emailLink') && !event.target.matches('.popup')) {
            popup.remove();
            document.removeEventListener('click', closePopup);
        }
    });
}

function showHideScrollButton() {
    var scrollButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', showHideScrollButton);

// 초기 상태에서 스크롤 버튼 보이기/감추기 함수 호출
showHideScrollButton();

Highcharts.chart('container', {
	
    /* 차트명 */
title: {},

/* 차트 부제 */
subtitle: {},

/* X축 */
xAxis: {},

/* Y축 */
yAxis: {},

    /* 범례 속성 */
legend: {},

/* 범례, 데이터 값 */
series: [ {} ],

/* 반응형 속성 */
responsive: {}
});

// 차트 크기 자동 조절 함수
function resizeChart() {
    var chart = Highcharts.charts[0]; // 첫 번째 차트를 가져옴
    var containerWidth = document.getElementById('chartContainer').clientWidth;
    var containerHeight = document.getElementById('chartContainer').clientHeight;
    
    chart.setSize(containerWidth, containerHeight, false);
}

// 창 크기 변경 시 차트 크기 자동 조절
window.addEventListener('resize', resizeChart);