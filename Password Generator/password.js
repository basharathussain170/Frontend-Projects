const input = document.querySelector("input");
const pwdGenerator = document.querySelector(".pwd-generator");
const copyBtn=document.querySelector('.copyBtn')

pwdGenerator.addEventListener("click", () => {
  let char =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%*&^abcdefghijklmnopqrstuvwxyz1234567890";

  let pwd = "";
  for (let i = 0; i < 10; i++) {
    let randomIndex =  Math.floor(Math.random() * 69);
    pwd = pwd + char[randomIndex];
  }
  // console.log(pwd);
  input.value=pwd
  copyBtn.style.display="block"
});


copyBtn.addEventListener('click',()=>{
  input.select();
  
  // copy to clipboard
  navigator.clipboard.writeText(input.value);

  // alert("Copied: " + input.value);
  if(input.value){
    copyBtn.style.display="none"
  }

})
