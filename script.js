document.addEventListener('DOMContentLoaded',function(){
  // loader simulation removed for GitHub Pages speed
  const sendBtn = document.getElementById('sendBtn');
  const userMsg = document.getElementById('userMsg');
  if(sendBtn){
    sendBtn.addEventListener('click', function(){
      const msg = userMsg.value.trim();
      if(!msg) return alert('Please type a message.');
      const waUrl = 'https://wa.me/918767716242?text=' + encodeURIComponent(msg);
      window.open(waUrl, '_blank');
    });
  }
});