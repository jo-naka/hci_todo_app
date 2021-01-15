// ローカルストレージのテンプレート情報を読み込む
function get_templates() {
    var templates_json = localStorage.getItem('template');
    var templates = [];
    if (templates_json != null) templates = JSON.parse(templates_json);
    // console.log(templates[0].taskname);
    return templates;
}

// テンプレート情報をローカルストレージに追加
function add_template(taskname) {
    var templates = get_templates();
    var template_data = {
        'taskname': taskname,
    };
    templates.unshift(template_data);
    var new_templates_json = JSON.stringify(templates);
    localStorage.setItem('template', new_templates_json);
    display_template()
}

// ローカルストレージのテンプレートリストを表示する
function display_template() {
    var templates = get_templates();
    var list = document.querySelector('#template_list');
    list.innerHTML = '';    // 表示内容をクリア

    for (var n = 0; n < templates.length; n++) {
        // ここから HTMLを動的に記述
        // 一つのテンプレート情報を表示するlistitemの定義
        var listitem = document.createElement('ons-list-item');
        listitem.setAttribute('modifier', 'tappable');

        // 以下，listitem内の要素
        // テンプレート情報(タスク名)の表示を包括するwrapper
        var center_div = document.createElement('div');
        center_div.className = 'center';

        // テンプレートのタスク名を取得して表示
        var title_span = document.createElement('span');
        title_span.className = 'list-item__title';
        title_span.innerHTML = templates[n].taskname;

        // 各要素を親子定義
        center_div.appendChild(title_span);
        listitem.appendChild(center_div);
        list.appendChild(listitem);
    }
    var rows = document.querySelector('#template_list').querySelectorAll('ons-list-item');
    for (var n = 0; n < rows.length; n++) {
        rows[n].querySelector('.center').addEventListener('click', function() {
            // document.querySelector('#myNavigator').pushPage('task_edit.html', { data: { taskname: this.taskname, num: this.num } });
        });
        // rows[n].querySelector('ons-checkbox').addEventListener('click', function() {
        //     change_todo_result(this.num, this.checked);
        // });
    }
}