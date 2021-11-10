$(document).ready(function(){
    const btnPopupOpen1 = document.getElementById('btnPopupOpen1')
    const btnPopupOpen2 = document.getElementById('btnPopupOpen2')
    const btnPopupClose1 = document.getElementById('btnPopupClose1')
    const btnPopupClose2 = document.getElementById('btnPopupClose2')
    const langBox = document.getElementById('langBox')
    const langBtn = document.getElementById('langBtn')
    const btnHam = document.getElementById('btnHam')
    const navPopup = document.getElementById('navPopup')
    const navBG = document.getElementById('navBG')
    const navCont = document.getElementById('navCont')
    var popups = document.getElementsByClassName('popup')
    var popupSW = false;
    var langSW = false;
    var hamSW = false;
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

    function langBoxFn(e){
        if(langSW){
            langBox.classList.remove('on')
        }else{
            langBox.classList.add('on')
        }
        langSW = !langSW;
    }
    langBtn.addEventListener('click',function(){
        langBoxFn()
    })

    function navPopupFn(e){
        if(hamSW){
            navCont.classList.remove('on')
            setTimeout(()=>{
                navPopup.classList.remove('on')
            },310)
        }else{
            navPopup.classList.add('on')
            setTimeout(()=>{
                navCont.classList.add('on')
            },10)
        }
        setTimeout(()=>{
            hamSW = !hamSW
        },320)
    }
    btnHam.addEventListener('click',function(){
        navPopupFn()
    })
    navBG.addEventListener('click',function(){
        navPopupFn()
    })
    window.onresize = function(e){
        setTimeout(()=>{
        if(hamSW==true){
            hamSW = false;
            navPopup.classList.remove('on')
            navCont.classList.remove('on')
            }
        },10)
    }
})