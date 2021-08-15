import{C as e}from"./vendor-ec965bd2.js";const s=e(null);s.set(JSON.parse(localStorage.getItem("user"))||null),s.subscribe((e=>{localStorage.setItem("user",JSON.stringify(e))}));export{s as u};
