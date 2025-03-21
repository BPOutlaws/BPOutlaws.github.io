function main() {
    update_version();
    salt = "8baJhNJta!EK&wkLvIrHT0@F*ACLjx9LenN@GMX*SkLFVRc#&kMLg9#Cr88zBg8k#B9ywDIc#Nbrc$FZ!LFkH#pvWzhHL%FQb8QYvz5OZW&#ozsJC%r7e@!#MJ9^&MwK";
    clear_all();
}

function encrypt() {
    var _str = getID("input").value,
        _str = get_hash(_str),
        _str = btoa(_str);

    getID("output").value = _str;
    getID("output").select();
    set_clipboard();
}

function decrypt() {
    var _str = getID("input").value,
        _str = atob(_str),
        _str = get_hash(_str);
    
    //clear to avoid slips
    getID("output").value = "http://";
    getID("output").select();
    set_clipboard();
    
    getID("output").value = _str;
}

function get_hash(_str) {
    var _str_new   = "",
        _key       = getID("key").value + salt,
        _key_index = 0;
    
    if (_key === "") {return _str;}
    
    for (_i = 0; _i < _str.length; ++_i) {
        _str_new += String.fromCharCode(
            _key.charCodeAt(_key_index) ^ _str.charCodeAt(_i)
        );

        //key wraparound
        if (++_key_index > _key.length) {
            _key_index = 0;
        }
    }

    return _str_new;
}

function clear_all() {
    clear_box("input");
    clear_box("key");
    clear_box("output");
}

function clear_box(_id) {
    getID(_id).value = "";
}

