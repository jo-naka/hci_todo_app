// ローカルストレージのタスク情報を読み込む
function get_tasks() {
    var tasks_json = localStorage.getItem('task');
    var tasks = [];
    if (tasks_json != null) tasks = JSON.parse(tasks_json);
    // console.log(tasks[0].taskname);
    // console.log(tasks[0].date);
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
}

// ローカルストレージのタスクリストを表示する
function display_task() {
    var tasks = get_tasks();
    var list = document.querySelector('#task_list');
    list.innerHTML = '';    // 表示内容をクリア

    for (var n = 0; n < tasks.length; n++) {
        // ここから HTMLを直接記述
        var listitem = document.createElement('ons-list-item');
        listitem.setAttribute('modifier', 'tappable');

        var left_div = document.createElement('div');
        var center_div = document.createElement('div');
        left_div.className = 'left';
        center_div.className = 'center';

        var result = document.createElement('ons-checkbox');
        var title_span = document.createElement('span');
        var sub_span = document.createElement('span');

        result.num = n;
        result.checked = 0; //tasks[n].result;
        title_span.className = 'list-item__title';
        title_span.innerHTML = tasks[n].taskname;
        sub_span.className = 'list-item__subtitle';
        sub_span.innerHTML = tasks[n].date;
        // sub_span.innerHTML = moment(tasks[n].date).format('LLL');

        left_div.appendChild(result);
        center_div.appendChild(title_span);
        center_div.appendChild(sub_span);
        center_div.taskname = tasks[n].taskname;  // 詳細ページで表示するタイトル
        center_div.num = n; // todo キーの何番目の項目か
        listitem.appendChild(left_div);
        listitem.appendChild(center_div);
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