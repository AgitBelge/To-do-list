
let showArea3 = document.getElementById("show3");
let alertElement = document.getElementById("show3");
let isim = document.getElementById("nameInput");
let yas = document.getElementById("ageInput");
const alert =(color,mesage,mesage2)=> `<div class="alert  alert-${color} alert-dismissible fade show" role="alert">
<strong>${mesage}!</strong> ${mesage2}
</div>`;




function getData() {
    if((yas.value) <= 0){
        showArea3.innerHTML = alert("danger","hatali veya eksik","lüften eksiksiz girin!!");
        alertElement.style.display = "block";
    }
    else if (isim.value && yas.value) {
        addItem(isim.value.toUpperCase(),yas.value)
        showArea3.innerHTML = alert("success","başarılı","ekleme başarılı");
        alertElement.style.display = "block";
    }
    
    else{
        showArea3.innerHTML = alert("danger","hatali veya eksik","lüften eksiksiz girin!!");
        alertElement.style.display = "block";
    }
    setTimeout(function() {
        alertElement.style.display = "none";
    }, 1500);
    isim.value = "";
    yas.value = "";
}

let userListdom = document.getElementById("userList");

const close_btn=`<button type="button" class="btn-close float-end" aria-label="Close" onclick="deleteListItem()"></button>`;

const addItem = (userName,userAge)=>{
    let liDom = document.createElement("li");
    liDom.innerHTML = `isim : ${userName} yaşı : ${userAge} ${close_btn}`;
    liDom.classList.add('list-group-item');
    liDom.id = "itemToDelete";
    userListdom.append(liDom);
}

function deleteListItem() {
    var itemToDelete = document.getElementById("itemToDelete");
    itemToDelete.parentNode.removeChild(itemToDelete);
  }