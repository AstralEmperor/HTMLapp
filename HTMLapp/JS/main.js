const description = document.querySelectorAll('.main__description');
const chat = document.querySelectorAll('.main__chatImg');
const del = document.querySelectorAll('.main__deleteImg');
const imgCont = document.querySelectorAll(".main__imagesContainer");
const imgfruit = document.querySelectorAll(".main__image");
const mainText = document.querySelectorAll(".main__text");
const singleCont = document.querySelectorAll(".main__singleImgContainer");
const infoCont = document.querySelectorAll(".main__info");
const buttons = document.querySelectorAll(".main__picBtns");
const searchDescr = document.querySelectorAll(".man__singleImgContainer--special");
const searchText = document.querySelectorAll(".main__text--special");

function changeImage1() {
    if (document.getElementById("main__View1").src == "../Images/grid.png"){
        document.getElementById("main__View1").src = "../Images/grid-blue.png";
        
}else{
    document.getElementById("main__View1").src = "../Images/grid-blue.png";
    document.getElementsByClassName("main__imagesContainer")[0].style.cssText="grid-gap:24px;grid-template-columns: repeat(auto-fit, minmax(279px, 6fr));";
    document.getElementsByClassName("main__picBtns")[0].style.cssText ="min-width:279px;";

    for(let i=0; i < description.length; i++){
        description[i].style.cssText ="display:grid;";
        mainText[i].style.cssText="display:flex";
    }
    for(let i=0; i < chat.length; i++){
        chat[i].style.cssText ="width:20px;height:18px; ";
    }
    for(let i=0; i < del.length; i++){
        del[i].style.cssText ="width:18px;height:18px; ";
    }
    for(let i=0; i < mainText.length; i++){
        mainText[i].style.cssText="display:flex";
    }
    for(let i=0; i < singleCont.length; i++){
        singleCont[i].style.cssText="display:flex;flex-direction:column;margin-top:30px;";
    }
    for(let i=0; i < infoCont.length; i++){
    infoCont[i].style.cssText ="display:flex;flex-direction:column;";
    }
    for(let i=0; i < buttons.length; i++){
     buttons[i].style.cssText="height:41px";
    }
    for(let i=0; i < searchText.length; i++){
        searchText[i].style.cssText="display:none;";
    }
    for(let i=0; i < searchDescr.length; i++){
        searchDescr[i].style.cssText="display:none;";
    }

    document.getElementById("main__View2").src="../Images/menu.png";
    document.getElementById("main__View3").src="../Images/list.png";
 }
}
function changeImage2() {
    if (document.getElementById("main__View2").src == "../Images/menu.png"){
          document.getElementById("main__View2").src = "../Images/menu-blue.png";
          
    } else {
        document.getElementById("main__View2").src = "../Images/menu-blue.png";
        document.getElementsByClassName("main__imagesContainer")[0].style.cssText ="grid-template-columns: repeat(auto-fit, minmax(429px, 3fr));grid-gap:29px;";
        document.getElementsByClassName("main__picBtns")[0].style.cssText ="min-width:429px;";

        for(let i=0; i < description.length; i++){
            description[i].style.cssText ="display:none;";
            mainText[i].style.cssText="display:flex";
        }
        for(let i=0; i < chat.length; i++){
            chat[i].style.cssText ="width:26px;height:26px;";
        }
        for(let i=0; i < del.length; i++){
            del[i].style.cssText ="width:24px;height:24px;";
        }
        for(let i=0; i < mainText.length; i++){
            mainText[i].style.cssText="display:none";
        }
        for(let i=0; i < singleCont.length; i++){
            singleCont[i].style.cssText="display:flex;flex-direction:column;padding-top:0px;max-width:100%;margin-top:30px;"
        }
        for(let i=0; i < infoCont.length; i++){
            infoCont[i].style.cssText ="display:flex;flex-direction:column;";
        }
        for(let i=0; i < buttons.length; i++){
            buttons[i].style.cssText="height:63px;";
           }
        for(let i=0; i < searchText.length; i++){
            searchText[i].style.cssText="display:none;";
        }
        for(let i=0; i < searchDescr.length; i++){
            searchDescr[i].style.cssText="display:none;";
        }
  
        document.getElementById("main__View1").src="../Images/grid.png";
        document.getElementById("main__View3").src="../Images/list.png";
    }
}
function changeImage3(){
    if (document.getElementById("main__View3").src == "../Images/list.png"){
          document.getElementById("main__View3").src = "../Images/list-blue.png";

} else {
        document.getElementById("main__View3").src = "../Images/list-blue.png";
        document.getElementsByClassName("main__imagesContainer")[0].style.cssText ="grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));grid-gap:29px;";
        document.getElementsByClassName("main__picBtns")[0].style.cssText ="min-width:93px;max-height:70px";

        for(let i=0; i < description.length; i++){
            description[i].style.cssText ="display:flex;justify-content:space-between;flex-basis:100%;";
        }
        for(let i=0; i < chat.length; i++){
            chat[i].style.cssText ="width:20px;height:20px; ";
        }
        for(let i=0; i < del.length; i++){
            del[i].style.cssText ="width:18px;height:18px; ";
        }
        for(let i=0; i < mainText.length; i++){
            mainText[i].style.cssText="display:none";
        }
        for(let i=0; i < singleCont.length; i++){
            singleCont[i].style.cssText="display:flex;flex-direction:row;border-top:1px solid gray;max-height:82px;justify-content:space-between;padding-top:12px;max-width:100%;margin-top:0px;";
        }
        for(let i=0; i < infoCont.length; i++){
            infoCont[i].style.cssText ="display:flex;flex-direction:row-reverse;flex-basis:80%;";
            }
         for(let i=0; i < buttons.length; i++){
                buttons[i].style.cssText="height:41px;flex-basis:10%;border:none;";
         }
         for(let i=0; i < searchText.length; i++){
            searchText[i].style.cssText="display:flex;justify-content:flex-start;border:none;";
        }
        for(let i=0; i < searchDescr.length; i++){
            searchDescr[i].style.cssText="display:flex;";
        }

        document.getElementById("main__View1").src="../Images/grid.png";
        document.getElementById("main__View2").src="../Images/menu.png";
}
}