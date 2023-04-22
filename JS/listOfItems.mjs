const container = document.querySelector('.main__imagesContainer');
const viewItemNum = document.getElementById('numberOfItems--1');
const singleContainer = document.getElementsByClassName('main__singleImgContainer')[0];
const specialContainer = document.querySelector('.man__singleImgContainer--special');

// Function for cloning 'first' original item 
function listTemplate(){
    let copySingleCont = singleContainer.cloneNode(true); 
    container.appendChild(copySingleCont,specialContainer.nextElementSibling);
}
//function that creates a new Element(cloning element with listTemplate function,and adding Delete function to new item)
let number = 22;
function createListItems(){
    for(i = 0; i < number; i++){
        listTemplate();
        deleteListItem();
    }
}
createListItems();

//3 functions for View changing on button Press. 
function changeImage1() {
    const description = document.querySelectorAll('.main__description');
    const chat = document.querySelectorAll('.main__chatImg');
    const del = document.querySelectorAll('.main__deleteImg');
    const mainText = document.querySelectorAll(".main__text");
    const singleCont = document.querySelectorAll(".main__singleImgContainer");
    const infoCont = document.querySelectorAll(".main__info");
    const buttons = document.querySelectorAll(".main__picBtns");
    const searchDescr = document.querySelectorAll(".man__singleImgContainer--special");
    const searchText = document.querySelectorAll(".main__text--special");

    if (document.getElementById("main__View1").src == "../Images/grid.png"){
        document.getElementById("main__View1").src = "../Images/grid-blue.png";
        
}else{
    document.getElementById("main__View1").src = "../Images/grid-blue.png";
    container.style.cssText="grid-gap:24px;grid-template-columns: repeat(auto-fit, minmax(279px, 6fr));";
    document.querySelector(".main__picBtns").style.cssText ="min-width:279px;";

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
    const description = document.querySelectorAll('.main__description');
    const chat = document.querySelectorAll('.main__chatImg');
    const del = document.querySelectorAll('.main__deleteImg');
    const mainText = document.querySelectorAll(".main__text");
    const singleCont = document.querySelectorAll(".main__singleImgContainer");
    const infoCont = document.querySelectorAll(".main__info");
    const buttons = document.querySelectorAll(".main__picBtns");
    const searchDescr = document.querySelectorAll(".man__singleImgContainer--special");
    const searchText = document.querySelectorAll(".main__text--special");

    if (document.getElementById("main__View2").src == "../Images/menu.png"){
          document.getElementById("main__View2").src = "../Images/menu-blue.png";
          
    } else {
        document.getElementById("main__View2").src = "../Images/menu-blue.png";
        document.getElementsByClassName("main__imagesContainer")[0].style.cssText ="grid-template-columns: repeat(auto-fit(3fr));grid-gap:29px;";
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
    const description = document.querySelectorAll('.main__description');
    const chat = document.querySelectorAll('.main__chatImg');
    const del = document.querySelectorAll('.main__deleteImg');
    const mainText = document.querySelectorAll(".main__text");
    const singleCont = document.querySelectorAll(".main__singleImgContainer");
    const infoCont = document.querySelectorAll(".main__info");
    const buttons = document.querySelectorAll(".main__picBtns");
    const searchDescr = document.querySelectorAll(".man__singleImgContainer--special");
    const searchText = document.querySelectorAll(".main__text--special");

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
            singleCont[i].style.cssText="display:flex;flex-direction:row;border-top:1px solid gray;max-height:82px;justify-content:space-between;padding:12px 0 12px 0;max-width:100%;margin-top:0px;";
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




// function that checks the number of Elements(posts in this case),and if theres more then 'numPerPage',adds new Pagination Number that is cloned from previously added one in HTML. Or removes if theres less elements.
//Also changes the current and total number of elements
function changePageNum(){
    let arrayOfitems = Array.from(container.children);
    const arrayOfPosts = [...arrayOfitems].filter(item => item.classList.contains('main__singleImgContainer'));
    const numCont = document.querySelectorAll('.main__pagesNumCont');
    const pageNum = document.querySelector('.main__viewPageNum');
    const totalElementsNum = document.querySelectorAll('.main__pageItemNum');
    const numPerPage = 30;
    const totalPages = Math.ceil(arrayOfPosts.length/numPerPage);
    // writes current page element numbers and total number of elements
    //check the length of the array of elements called with SelectorAll(2 containers have page numbers) and then check their children length.
    for(let i = 0; i < numCont.length; i++){
        const currentNumPages = numCont[i].children.length;
        const start = (currentNumPages - 1) * numPerPage;
        const end = start + numPerPage;
        const pageElements = arrayOfPosts.slice(start,end);

        for(element of totalElementsNum){
            if(totalElementsNum.length - 1 < end){
                element.textContent = "Prikaz " + start + "-" + arrayOfPosts.length + " od " + arrayOfPosts.length + " proizvoda";
            }
            else if(totalElementsNum.length - 1 > end){
                element.textContent = "Prikaz " + start + "-" + end + " od " + arrayOfPosts.length + " proizvoda";
            }
        }
        //if there is more elements then current pages can fit, clone the last number and add + 1 to its textContent value
        if(currentNumPages < totalPages){
            for(let j = currentNumPages + 1; j <= totalPages; j++){
                let clonePageNum = pageNum.cloneNode(true);
                clonePageNum.textContent = j;
                clonePageNum.classList.remove('current-slideNumber');
                numCont[i].appendChild(clonePageNum);
            }
            // if theres more pages then number of elements need, removes last one = [1,2,3,4]
        }else if (currentNumPages > totalPages && totalPages >= 1){
            while(numCont[i].children.length > totalPages){
                numCont[i].removeChild(numCont[i].lastChild);
                displayPage(numPerPage,arrayOfPosts,currentNumPages);
            }
        }
    }
}
changePageNum();

// On click of button " + " add new Element calling createListItem(), and check if pagination is neccesery with changePageNum();
const singImgContbp = document.querySelector('.mainContainer').innerHTML; 
const addItemBtn = document.querySelector('.add-item');
//adding new Item 
function addingNewItem(){
    addItemBtn.addEventListener('click', ()=>{
        number = 1;
        createListItems();
        changePageNum();
    })
}
addingNewItem();

// Function that adds event listener on all buttons, and removes that item if ' X ' is pressed
function deleteListItem(){
    const singleCont = document.querySelectorAll(".main__singleImgContainer");
    for(let i = 0; i < singleCont.length; i++){
        const deleteBtn = singleCont[i].querySelector('.main__deleteImg');
        deleteBtn.addEventListener('click', () =>{
            singleCont[i].remove();
            changePageNum();
        })
    }
}
deleteListItem();

    // viewItemNum.innerHTML = "Prikaz"+ arrayOfPosts[0] + "-" + numberOfItems-1 + numberOfItems + "proizvoda";
    const pagePrevBtn = document.querySelectorAll('.main__pageBtnPrev');
    const pageNextBtn = document.querySelectorAll('.main__pageBtnNext');
    const mainContainer = document.querySelector('main__imagesContainer');

    // const slide = (currentSlide,targetSlide) =>{
     
    // }
    const pageNum = (currentPage,targetPage) =>{
        currentPage.classList.remove('current-slideNumber');
        targetPage.classList.add('current-slideNumber');
    }
   //DISABLING BTMS
    const disabledBtn = (targetIndex ,pagePrevBtn, pageNextBtn)=>{
        if(targetIndex === 0 ){
            pagePrevBtn.classList.add('disabled');
            pageNextBtn.classList.remove('disabled');
        }else if(targetIndex === numCont - 1 ){
            pagePrevBtn.classList.remove('disabled');
            pageNextBtn.classList.add('disabled');
        }else{
            pagePrevBtn.classList.remove('disabled');
            pageNextBtn.classList.remove('disabled');
        }
    }
    //CHANGING PAGE WITH BUTTONS
function changingPage(){
    pagePrevBtn.forEach(pagePrevBtn => {
        pagePrevBtn.addEventListener('click', () =>{
            // const currentSlide =  document.querySelector('current-slideNumber');
            // const prevSlide = currentSlide.previousElementSibling;
            const currentPage = document.querySelector('.current-slideNumber');
            const prevPage = currentPage.previousElementSibling;

            // const prevIndex = currentSlide.indexOf(slide => slide == prevSlide)
            pageNum(currentPage, prevPage);
            // disabledBtn(prevIndex,pagePrevBtn);
        })
    })
    pageNextBtn.forEach(pageNextBtn =>{
        pageNextBtn.addEventListener('click', () =>{
            const currentPage = document.querySelector('.current-slideNumber');
            const nextPage = currentPage.nextElementSibling;
            // const currentSlide = document.querySelector('current-slideNumber');
            // const nextSlide = currentSlide.nextElementSibling;

            // const nextIndex = currentSlide.indexOf(slide => slide == nextSlide)
            pageNum(currentPage, nextPage);
            // disabledBtn(nextIndex, pageNextBtn);
        });
    })
 }
changingPage()