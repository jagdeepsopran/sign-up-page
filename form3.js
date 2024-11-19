let icon = document.querySelector("i");
console.log(icon);
let password=document.querySelector("#password");
let passChecks=document.querySelector(".pass-checks");
let flag=0;
icon.addEventListener("click", () => {
  if (flag==0){
  icon.classList.remove("bi-eye");
  icon.classList.add("bi-eye-slash");
  password.type="text";
  flag=1;
  }else{
    icon.classList.remove("bi-eye-slash");
    icon.classList.add("bi-eye");
    password.type="password";
    flag=0;
  }
});
let flag2=0;
password.addEventListener("focus",()=>{
  if(flag2==0){
    passChecks.style.display="block";  
    flag2=1;
  }else{
    passChecks.style.display="none";
    flag2=0;
  }
});
