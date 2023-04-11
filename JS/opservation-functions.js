import hasPermission from "./permissions.js";
import {actions} from "./constants.js";
// const imgContainer = document.getElementsByClassName('main__singleImgContainer');
const deleteBtn = document.querySelectorAll('.main__delete');
for(i = 0; i < deleteBtn.length; i++){
    deleteBtn[i].addEventListener('click', () => {

        if(hasPermission(actions.DELETE_FILE)){
            this.parentNode.remove();
            console.log('clicked');
            return true;
        }else{
            console.log('idk what im doing :[');
            return false;
        }
    })
}