function changeDemo(){
  var demo = document.getElementById("demo");
  var noMoreDemo = document.getElementById("noMoreDemo");
  if(demo) {
    if(demo.innerHTML == "Hello JavaScript!"){
      demo.innerHTML = "This is a demo";        
      demo.style.color = "red"; 
      demo.style.fontWeight = "none";
      demo.id = "noMoreDemo";       
    } else {
      demo.innerHTML ="Hello JavaScript!";
      demo.style.color ="lightgreen";
      demo.style.fontWeight = "none";
    }
  } 
  else if (noMoreDemo){
    if(noMoreDemo.innerHTML == "This is a demo"){
      noMoreDemo.innerHTML = "Hello JavaScript with no demo!";        
      noMoreDemo.style.color = "lightgreen"; 
      noMoreDemo.style.fontWeight = "bold"; 
    } else {
      noMoreDemo.innerHTML ="This is not a demo!";
      noMoreDemo.style.color ="red";
      noMoreDemo.style.fontWeight = "bold";
      noMoreDemo.id = "demo";       
    }
  }
}
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Chặn hành động reset trang mặc định
    const data = new FormData(form);
    console.log("Dữ liệu bạn nhập là:", data.get('SensitiveData'));
    alert("Đã nhận dữ liệu: " + data.get('SensitiveData'));
});