import {usersRequest} from "./users.api.js";

let data = usersRequest();

 export const getUsers = async() => {
     let section,div;
     await new Promise(function (resolve, reject) {
        section = document.createElement("section");
        section.setAttribute("class","sec");
        div = document.createElement("div");
        div.setAttribute("class","lds-grid");
        let d1 = document.createElement("div");
        let d2 = document.createElement("div");
        let d3 = document.createElement("div");
        let d4 = document.createElement("div");
        let d5 = document.createElement("div");
        let d6 = document.createElement("div");
        let d7 = document.createElement("div");
        let d8 = document.createElement("div");
        let d9 = document.createElement("div");
        div.append(d1,d2,d3,d4,d5,d6,d7,d8,d9);
        section.append(div);
        document.body.appendChild(section);
        resolve(section);
    }).then((response)=> response);

    let response = await data;
    section.remove();
    let divElement = document.createElement("div");
    divElement.setAttribute("class","bigDiv");
    let DIV = document.createElement("div");
    DIV.setAttribute("class","inp_div");

    let inp = document.createElement("input");
    inp.setAttribute("class","inp");
    inp.setAttribute("placeholder","writeName");


    let deleteAll = document.createElement("button");
    deleteAll.setAttribute("class","deleteAll");
    deleteAll.innerText = "Delete All";
    let lb = document.createElement("label");
    lb.setAttribute("for","searching");
    let sp = document.createElement("span");
    sp.setAttribute("class","icon");
    let im = document.createElement("i");
    im.setAttribute("class","ri-mail-line");
    sp.append(im);
    lb.append(sp);
    inp.append(lb);
    DIV.append(inp);
    DIV.append(deleteAll);
    document.body.appendChild(DIV);

    let ul,deletebtn,divBlock,li,div2;

    response.forEach((val)=>{
        div2 = document.createElement("div");
        div2.setAttribute("class","li_div");
        ul = document.createElement("ul");
        ul.setAttribute("class","ul");
        for (const key in val) {
            li = document.createElement("li");
            deletebtn = document.createElement("button");
            deletebtn.setAttribute("class","delete")
            divBlock = document.createElement("div");
            deletebtn.innerText = "Delete";
            divBlock.appendChild(deletebtn);
            li.style.listStyle = "circle";
            li.innerHTML = `${key} : ${val[key]}`;
            li.appendChild(divBlock);
            ul.append(li);
        }
        div2.append(ul);
        divElement.append(div2);
    })
    document.body.append(divElement);

     let exp = document.querySelectorAll(".ul");
     let arr = [...exp];
     let liArr = [];
     let namesArr = [];
     arr.forEach((val)=>{
         liArr.push(val.children[1]);
     })

     liArr.forEach((val)=>{
         namesArr.push(val.innerText.replace("name : ",""));
     })
     let val;
     let bigDiv = document.querySelector(".bigDiv");
     let a = [...bigDiv.children];
     a.shift();

     inp.addEventListener("input",(evt)=>{
         let li_div = document.querySelector(".li_div");
         if(li_div !== null){
             val = evt.target.value;
             if(val.length <= 3){
                 evt.target.style.color = "red";
             }else if(val.length > 3){
                 evt.target.style.color = "green";
             }

             namesArr.forEach(function (value,index) {
                 if(!(value.includes(val))){
                     liArr.forEach(function (value1, index1) {
                         if(index === index1){
                             value1.parentElement.parentElement.style.display = "none";
                         }
                     })
                 }else {
                     liArr.forEach(function (val2, index2) {
                         if(index === index2){
                             val2.parentElement.parentElement.style.display = "block";
                         }
                     })
                 }
             })
         }


     })
     let D = document.querySelectorAll(".delete");
     let UL = document.querySelectorAll(".ul");

     D.forEach(function (value) {
         value.addEventListener("click",function (evt) {
             evt.target.parentElement.parentElement.remove();
             UL.forEach(function (value1) {
                 if([...value1.children].length === 0){
                     value1.parentElement.remove();
                 }
             })
         })
         })
     deleteAll.addEventListener("click",(evt)=>{
         divElement.remove();
         deleteAll.style.opacity = 0.6;
         deleteAll.style.cursor = "not-allowed";
     })

};
















