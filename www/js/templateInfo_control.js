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
}