var regPhone = /^1[0-9]{10}$/;  //电话号码的正则匹配式
var regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
function message(text) {
    var fiexBox = $("<div class='box'></div>")
    $('body').append(fiexBox)
    var message = text
    var messageBox = '<div class="messageBox"><img class="close_style" onclick="closeMessage()" src="assets/img/boxClose.png" alt=""><div class="message">' + message + '</div></div>'
    var height = window.innerHeight
    var width = window.innerWidth
    $('.box').css('position', 'fixed')
    $('.box').css('background-color', 'rgba(1, 1, 1, 0.5)')
    $('.box').css('top', '0')
    $('.box').css('display', 'none')
    $('.box').css('width', width)
    $('.box').css('height', height)
    $('.box').html(messageBox)
    $('.close_style').css({ 'cursor': 'pointer', 'top': '45px', 'position': 'absolute', 'margin-left': '-15px', 'left': '50%' })
    $('.messageBox').css({ 'position': 'relative', 'padding': '30px 0', 'width': '30%', 'margin': '15% auto', 'background-color': 'white', 'text-align': 'center','border-radius': '5px'})
    $('.message').css('text-algin', 'center')
}
function showMessage(text) {
    message(text)
    $(".box").fadeIn();
    $(".box").fadeIn("slow");
    $(".box").fadeIn(3000);
}
function closeMessage() {
    $(".box").fadeOut(300, function() {
        $(this).remove();
    });
}
