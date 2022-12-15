function solution(new_id) {
    var answer = "";
    new_id = new_id.toLowerCase()
        .replace(/[^\w\.\-]/g, '')
        .replace(/[\.]{2,}/g, '.')
        .replace(/^\./, '')
        .replace(/\.$/, '');
    let id = new_id.split("");

    for (let i = 0; i < id.length; i++) {
        if (id[i] == "." && id[i-1] == ".") {
            id.splice(i,1);
        } 
    }
    if (id.length > 15) {
        id.splice(15);
        if (id[14] == ".") {
            id.pop();
        }
    }
    while (id.length < 3) {
        if (id.length == 0) {
            id.push("a");
        }
        id.push(id[id.length-1]);
    }
    return id.join("");
}