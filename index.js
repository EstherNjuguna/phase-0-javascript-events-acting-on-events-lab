// Your code here
moveDodgerRight()
const dodger = document.getElementById("dodger");
document.addEventListener("keydown", function (event) {
    console.log(event);
  });
  cument.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const rightNumbers = dodger.style.right.replace("px", "");
      const right= parseInt(rightNumbers, 10);
  
      dodger.style. right= `${right  +1}px`;
    }
  }); 
  function moveDodgerRight() {
    const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(leftNumbers, 10);
  
    if (right > 0) {
      dodger.style.right = `${right + 1}px`;
    }
  }
  