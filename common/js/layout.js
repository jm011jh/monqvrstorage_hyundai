$(document).ready(function(){
    const btnPopupOpen1 = document.getElementById('btnPopupOpen1')
    const btnPopupOpen2 = document.getElementById('btnPopupOpen2')
    const btnPopupClose1 = document.getElementById('btnPopupClose1')
    const btnPopupClose2 = document.getElementById('btnPopupClose2')
    var popups = document.getElementsByClassName('popup')
    var popupSW = false;
    function popupFn(e){
        var targetID = String(e.target.id);
        var i = Number(targetID.charAt(targetID.length-1)) - 1
        if(popupSW){
            popups[i].classList.remove('on')
        }else{
            popups[i].classList.add('on');
        }
        popupSW = !popupSW;
    }
    btnPopupOpen1.addEventListener('click',function(e){
        popupFn(e)
    })
    btnPopupClose1.addEventListener('click',function(e){
        popupFn(e)
    })
    btnPopupOpen2.addEventListener('click',function(e){
        popupFn(e)
    })
    btnPopupClose2.addEventListener('click',function(e){
        popupFn(e)
    })
    $('.popup__bg').click(function(){
        $('.popup').removeClass('on')
        popupSW = false;
    })
})