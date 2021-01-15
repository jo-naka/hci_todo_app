// ローカルストレージのタスク情報を読み込む
function get_tasks() {
    var tasks_json = localStorage.getItem('task');
    var tasks = [];
    if (tasks_json != null) tasks = JSON.parse(tasks_json);
    return tasks;
}

// タスク情報をローカルストレージに追加
function add_task(taskname, date) {
    var tasks = get_tasks();
    var task_data = {
        'taskname': taskname,
        'date': date,
    };
    tasks.unshift(task_data);
    var new_tasks_json = JSON.stringify(tasks);
    localStorage.setItem('task', new_tasks_json);
    display_task();
}

// ローカルストレージのタスクリストを表示する
function display_task() {
    var tasks = get_tasks();
    var list = document.querySelector('#task_list');
    list.innerHTML = '';    // 表示内容をクリア

    for (var n = 0; n < tasks.length; n++) {
        // ここからHTMLを動的に記述
        // 一つのタスク情報を表示するlistitemの定義
        var listitem = document.createElement('ons-list-item');
        listitem.setAttribute('modifier', 'tappable');

        // 以下，listitem内の要素
        // タスク情報(タスク名，期日)の表示を包括するwrapper
        var center_div = document.createElement('div');
        center_div.className = 'center';

        // チェックボックスの表示を包括するwrapper
        var right_div = document.createElement('div');
        right_div.className = 'right';

        // タスク名を取得して表示
        var title_span = document.createElement('span');
        title_span.className = 'list-item__title';
        title_span.innerHTML = tasks[n].taskname;

        // 期日を取得して表示
        var sub_span = document.createElement('span');
        sub_span.className = 'list-item__subtitle';
        sub_span.innerHTML = tasks[n].date;
        // sub_span.innerHTML = moment(tasks[n].date).format('LLL');

        // チェックボックスを表示(テスト段階でチェックなし確定表示)
        var result = document.createElement('ons-checkbox');
        result.num = n;
        result.checked = 0; //tasks[n].result;

        // 各要素を親子定義
        center_div.appendChild(title_span);
        center_div.appendChild(sub_span);
        right_div.appendChild(result);
        listitem.appendChild(center_div);
        listitem.appendChild(right_div);
        list.appendChild(listitem);
    }
    var rows = document.querySelector('#task_list').querySelectorAll('ons-list-item');
    for (var n = 0; n < rows.length; n++) {
        rows[n].querySelector('.center').addEventListener('click', function() {
            // document.querySelector('#myNavigator').pushPage('task_edit.html', { data: { taskname: this.taskname, num: this.num } });
        });
        // rows[n].querySelector('ons-checkbox').addEventListener('click', function() {
        //     change_todo_result(this.num, this.checked);
        // });
    }
}