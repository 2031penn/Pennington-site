// highlight active nav link
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path) a.classList.add("active");
  });
})();

// mobile menu simple toggle
function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  if(!menu) return;
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}