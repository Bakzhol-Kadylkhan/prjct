$( document ).ready(function() {
    $(".link").click (function(){
        var hh = $(this).data("num")

        // $('.modal-img').attr('src', 'images/'+hh+'.jpg' )
        $('.modal_okno').toggleClass("active")
            $(".p1").html("Жүгіру- " + 0.5*hh + " KM")
            $(".p2").html("Приседания- " + 1*hh +" Рет")
            $(".p").html("Отжимания- " + 1*hh +" рет")
            $(".p4").html("Жүгіру- " + 1*hh + " KM")
            $(".p5").html("Приседания- " + 2*hh +" Рет")
            $(".p6").html("Отжимания- " + 2*hh +" рет")
            $(".p7").html("Жүгіру- " + 1.5*hh + " KM")
            $(".p8").html("Приседания- " + 3*hh +" Рет")
            $(".p9").html("Отжимания- " + 3*hh +" рет")
            $(".xday").html(30-hh +" күн қалды")
            $(".yday").html(0+hh +" күн өтті")
    })

    $(".modal_okno").click (function(){
        $('.modal_okno').removeClass('active')
    })
});
// app.js

// 引入 Express.js 模块
const express = require('express');

// 创建 Express.js 应用程序实例
const app = express();

// 设置路由和中间件
// ... 在这里添加你的路由和中间件 ...

// 启动服务器
const port = 3000; // 设置服务器监听的端口号
app.listen(port, () => {
  console.log(`服务器已启动，监听端口号 ${port}`);
});