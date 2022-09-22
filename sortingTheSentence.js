/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(" ");
    let r = [...arr];
    arr.map(a=>{
        r[parseInt(a[a.length -1]) -1] = a.substring(0,a.length -1);
    })
    
    return r.toString().replace(/,/gi, " ");
};
