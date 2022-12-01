//タスク追加関数
const onClickAdd = () => {
    //入力タスクの取得と初期化
    const taskInput = document.getElementById('taskInput').value;
    document.getElementById('taskInput').value = "";


    //liタグ
    const li = document.createElement('li');
    li.className = "list__item flex column align-end"

    //pタグ
    const p = document.createElement('p');
    p.innerText = taskInput;

    //button(完了)タグ生成
    const completeBtn = document.createElement('button');
    completeBtn.className = "btn_grad_orange"
    completeBtn.innerText = '完了';
    completeBtn.addEventListener('click', () => {
        //1:親要素のliタグごと削除
        const deleteTarget = completeBtn.closest('li');
        deleteFromIncompleteList(deleteTarget);

        //2:完了したリストのテキスト内容を取得
        const completeFromTask = completeBtn.closest('li');
        const task = completeFromTask.firstElementChild.innerText;
        
        
        //3:li以下を削除
        // completeFromTask.textContent = null;
        completeFromTask.removeChild(btnWrap);
        
        //3の状態に「元に戻すボタン」を追加する
        completeFromTask.appendChild(backBtn);
        console.log(completeFromTask)
       
    });

    //button(削除)タグ生成
    const deleteBtn = document.createElement('button');
    deleteBtn.className = "btn_color_grey"
    deleteBtn.innerText = '削除';
    deleteBtn.addEventListener('click', () => {
        //親要素のliタグごと削除
        const deleteTarget = deleteBtn.closest('li');
        deleteFromIncompleteList(deleteTarget);
    });

    //button(元に戻す)タグ生成
    const backBtn = document.createElement('button');
    backBtn.className = 'btn_color_grey mt-10';
    backBtn.innerText = '元に戻す';

    //buttonラップ要素の生成
    const btnWrap = document.createElement('div');
    btnWrap.className = 'list__control flex mt-10';
    btnWrap.appendChild(completeBtn);
    btnWrap.appendChild(deleteBtn);

    //liタグの子要素にpタグ追加
    li.appendChild(p);
    li.appendChild(btnWrap);

    //ulタグの子要素のliタグ追加
    document.getElementById('taskList').appendChild(li);
}

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById('taskList').removeChild(target);
}
//追加ボタン取得
const addButton = document.getElementById('taskAdd');
addButton.addEventListener('click', onClickAdd);