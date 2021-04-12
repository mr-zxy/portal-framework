// //引入全局使用的js
import './main';
import xss from 'xss'
console.log(xss, 'xss')

// import './style/index.css'
// import xssFilter from 'xss'
// // import './footer'
// let url='<script>alert()</script>'
// let xssFil=xssFilter(url)
// $('#h1').html(xssFil)
// $(document).ready(function () {
//     $(".tab li").click(function () {
//         $(".tab li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
//         $("div").hide().eq($(this).index()).show();
//         //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on'); 

//     });
// });