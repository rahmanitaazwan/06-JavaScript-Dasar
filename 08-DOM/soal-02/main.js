const elBtnComment = document.querySelector('#btn-comment');
const elCommentList = document.querySelector('#comment-list');

const elCommentSection = document.querySelector('#comment-form-section');
const elCommentForm =document.querySelector('#comment-form');
const elInputUsername = document.querySelector('#input-username');
const elInputComment = document.querySelector('#input-comment');
const elBtnSubmit = document.querySelector('btn-submit');
const elBtnCancel = document.querySelector('btn-cancel');

//edit

elBtnSubmit.addEventListener("click", addComment);
elBtnComment.addEventListener("click", showForm);

//function
function showForm(){
  elCommentSection.ClassList.remove("d-none");
  elBtnComment.ClassList.add("d-none");
}

function adComment(e){
  e.preventDefault();

  const newComCont = document.createElement("div");
  newComcont.ClassList.add("fw-bold", "text-capitalize");
  newComCont.innerText = elInputUsername.value;

  const wrap = document.createElement("div");
  wrap.classList.add("ms-2", "me-auto");
  wrap.append(newComCont);
  wrap.append(elInputComment.value);

  const newCom = document.createElement("li");
  newCom.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");
  newCom.append(wrap);

  elCommentList.prepend(newCom);

  elCommentSection.classList.add("'d-none");
  elBtnComment.classList.remove("d-none");
  }