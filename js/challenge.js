const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const heartBtn = document.getElementById("heart");
const likesList = document.querySelector(".likes");
const pauseBtn = document.getElementById("pause");

let intervalTimer = setInterval(incrementTimer, 1000);

plusBtn.addEventListener("click", incrementTimer);

function incrementTimer() {
  counter.innerText = ++counter.innerText;
}

minusBtn.addEventListener("click", () => {
  counter.innerText = --counter.innerText;
});

/*
As a user, I should see the timer increment every second once the page has loaded. - done
As a user, I can manually increment and decrement the counter using the plus and minus buttons. - done
*/

heartBtn.addEventListener("click", likeNum);

function likeNum() {
  const likedList = document.querySelector(
    `li[data-num="${counter.innerText}"]`
  );
  if (!likedList) {
    const list = document.createElement("li");
    list.dataset.num = counter.innerText;
    list.innerHTML = `${counter.innerText} has been liked <span>1</span> times`;
    likesList.append(list);
  } else {
    likedList.children[0].innerText = ++likedList.children[0].innerText;
  }
}

/*
As a user, I can 'like' an individual number of the counter. 
I should see the count of the number of 'likes' associated with that number displayed.
*/

pauseBtn.addEventListener("click", (event) => {
  if (event.target.innerText === "pause") {
    clearInterval(intervalTimer);
    event.target.innerText = "resume";
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    heartBtn.disabled = true;
  } else {
    intervalTimer = setInterval(incrementTimer, 1000);
    event.target.innerText = "pause";
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    heartBtn.disabled = false;
  }
});

/*
As a user, I can pause the counter, which should:
pause the counter
disable all buttons except the pause button
switch the label on the button from "pause" to "resume"
As a user, I should be able to click the "restart" button to restart the counter and re-enable the buttons.
*/

const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("list");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const sentence = document.createElement("p");
  sentence.innerText = commentInput.value;
  commentList.appendChild(sentence);
  event.target.reset();
});

//As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."*/
