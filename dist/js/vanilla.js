"use strict";

//タスク追加関数
var onClickAdd = function onClickAdd() {
  //入力タスクの取得と初期化
  var taskInput = document.getElementById('taskInput').value;
  document.getElementById('taskInput').value = ""; //liタグ

  var li = document.createElement('li');
  li.className = "list__item flex column align-end"; //pタグ

  var p = document.createElement('p');
  p.innerText = taskInput; //button(完了)タグ生成

  var completeBtn = document.createElement('button');
  completeBtn.className = "btn_grad_orange";
  completeBtn.innerText = '完了';
  completeBtn.addEventListener('click', function () {
    //1:親要素のliタグごと削除
    var deleteTarget = completeBtn.closest('li');
    deleteFromIncompleteList(deleteTarget); //2:完了したリストのテキスト内容を取得

    var toCompleteFromTask = completeBtn.closest('li');
    var task = toCompleteFromTask.firstElementChild.innerText; //3:li以下を削除
    // toCompleteFromTask.textContent = null;

    toCompleteFromTask.removeChild(btnWrap); //4:3の状態に「元に戻すボタン」を追加する

    toCompleteFromTask.appendChild(backBtn); //5:4の状態のliタグを完了エリアのul配下に設置

    var completeList = document.getElementById('completeList');
    completeList.appendChild(toCompleteFromTask);
  }); //button(削除)タグ生成

  var deleteBtn = document.createElement('button');
  deleteBtn.className = "btn_color_grey";
  deleteBtn.innerText = '削除';
  deleteBtn.addEventListener('click', function () {
    //親要素のliタグごと削除
    var deleteTarget = deleteBtn.closest('li');
    deleteFromIncompleteList(deleteTarget);
  }); //button(元に戻す)タグ生成

  var backBtn = document.createElement('button');
  backBtn.className = 'btn_color_grey mt-10';
  backBtn.innerText = '元に戻す';
  backBtn.addEventListener('click', function () {
    //1:親要素のliタグごと削除
    var deleteTarget = backBtn.closest('li');
    document.getElementById('completeList').removeChild(deleteTarget); //2:元に戻すリストli要素を取得

    var toTaskFromComplete = backBtn.closest('li');
    var task = toTaskFromComplete.firstElementChild.innerText; //3:li以下を削除
    // toTaskFromComplete.textContent = null;

    toTaskFromComplete.removeChild(backBtn); //4:3の状態に「buttonラップ要素」を追加する

    toTaskFromComplete.appendChild(btnWrap); //5:4の状態のliタグを完了エリアのul配下に設置

    document.getElementById('taskList').appendChild(toTaskFromComplete);
  }); //buttonラップ要素の生成

  var btnWrap = document.createElement('div');
  btnWrap.className = 'list__control flex mt-10';
  btnWrap.appendChild(completeBtn);
  btnWrap.appendChild(deleteBtn); //liタグの子要素にpタグ追加

  li.appendChild(p);
  li.appendChild(btnWrap); //ulタグの子要素のliタグ追加

  document.getElementById('taskList').appendChild(li);
}; //未完了リストから指定の要素を削除


var deleteFromIncompleteList = function deleteFromIncompleteList(target) {
  document.getElementById('taskList').removeChild(target);
}; //追加ボタン取得


var addButton = document.getElementById('taskAdd');
addButton.addEventListener('click', onClickAdd);