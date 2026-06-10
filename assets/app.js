
document.getElementById('navtoggle')?.addEventListener('click',()=>{
  document.querySelector('.sidebar')?.classList.toggle('open');});
document.getElementById('themetoggle')?.addEventListener('click',()=>{
  const light=document.body.classList.toggle('light');
  localStorage.setItem('e-theme',light?'light':'dark');});
window.addEventListener('DOMContentLoaded',()=>{
  if(window.PagefindUI){new PagefindUI({element:'#search',showSubResults:true,
    showImages:false,bundlePath:(window.__ROOT__||'./')+'pagefind/',
    translations:{placeholder:'Search symbols, functions, docs…'}});}
});
