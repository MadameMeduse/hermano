document.addEventListener("DOMContentLoaded",(()=>{const e=window.location.pathname;document.querySelectorAll(".header li a").forEach((t=>{t.getAttribute("href")===e&&t.classList.add("active")}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".menu-btn"),t=document.querySelector(".menu");e.addEventListener("click",(function(){t.classList.toggle("open")}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".slide");let t=0;setInterval((function(){var n;t=(t+1)%e.length,n=t,e.forEach(((e,t)=>{t===n?e.classList.add("active"):e.classList.remove("active")}))}),3e3)}));const currentYear=(new Date).getFullYear();document.getElementById("currentYear").textContent=currentYear;