function tojson(obj, filename) {
    var a = document.createElement('a');
    a.setAttribute("href", "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj)));
    a.setAttribute("download", filename + ".json");
    a.click();
}
tojson({
    CreateYourObject: 'here'
}, 'filename');