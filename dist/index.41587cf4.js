let e,t;let o=[],n=0;const l=document.querySelectorAll(".game__card");let u=!1;function r(){if(this.classList.toggle("is-flipped"),!u){u=!0,e=this;return}t=this,u=!1,function(){if(e.getAttribute("data-id")===t.getAttribute("data-id")){o.push([e,t]),e.setAttribute("style","pointer-events: none"),t.setAttribute("style","pointer-events: none"),8===o.length&&function(){let e=document.querySelector(".modal");e.classList.add("modal--open")}();return}setTimeout(()=>{e.classList.remove("is-flipped"),t.classList.remove("is-flipped")},"800")}(),function(){let e=document.getElementById("count");e&&(++n,e.textContent=n,console.log(n))}()}!function(){let e=document.querySelectorAll(".button--restart"),t=document.querySelector(".modal");e.forEach(e=>{e.addEventListener("click",()=>{window.location.reload(),t.classList.remove("modal--open")})})}(),l.forEach(e=>{e.addEventListener("click",r)}),function(){let e=document.querySelector(".game__grid"),t=[...e.children];t.forEach(e=>e.remove());let o=t.map(e=>({child:e,random:Math.random()}));o.sort((e,t)=>t.random-e.random),o.forEach(t=>e.appendChild(t.child))}(),function(){let e=`https://ena0berzerk.github.io/team-28/?moves=${n}`,t=document.querySelectorAll(".share");t&&t.forEach(t=>{t.addEventListener("click",()=>{console.log(t),t.setAttribute("data-title",`\u{42F} \u{441}\u{43F}\u{440}\u{430}\u{432}\u{438}\u{43B}_\u{430}\u{441}\u{44C} \u{437}\u{430} ${n} \u{445}\u{43E}\u{434}\u{43E}\u{432}!`),t.setAttribute("data-url",e)})})}();//# sourceMappingURL=index.41587cf4.js.map

//# sourceMappingURL=index.41587cf4.js.map