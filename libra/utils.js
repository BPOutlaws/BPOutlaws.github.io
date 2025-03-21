function log(_str) {
    console.log(_str);
}

function trace(_str) {
    log(_str);
    alert(_str);
}

function getID(_str) {
    return document.getElementById(_str);
}

function set_clipboard() {
    document.execCommand("copy");
}

function reload() {
    location.reload();
}

function update_version() {
    getID("version").innerHTML = app_info.title + " v" + app_info.version;
}

function pragma(_title, _version) {
    var _head  = document.head.innerHTML,
        _fname = _title
                 .replace(/(\W+)/gi, '-')
                 .toLowerCase();

    //title
    _head += '<title>' + _title + ' ' + _version + '</title>';
    
    //meta
    _head += '<meta charset="utf-8">';
    _head += '<meta name="viewport" content="width=device-width, initial-scale=1.0", maximum-scale=1.0, user-scalable=0/>';
    _head += '<meta name="apple-mobile-web-app-capable" content="yes">';
    _head += '<meta name="apple-mobile-web-app-status-bar-style" content="black">';
    _head += '<meta name="apple-mobile-web-app-title" content=' + _title + '>';
    _head += '<link rel="shortcut icon" href="'    + _fname + '.ico">';
    _head += '<link rel="apple-touch-icon" href="' + _fname + '.png">';
    
    //CSS
    _head += '<link rel="stylesheet" href="' + _fname + '.css">';

    document.head.innerHTML = _head;

    app_info = {
        fname:   _fname,
        title:   _title,
        version: _version
    };
}
