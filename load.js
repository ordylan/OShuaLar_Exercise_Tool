/*var xhr = new XMLHttpRequest();
        xhr.open('GET', "questionlistver.ordylandata?v="+Number(new Date()) , true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhr.onload = function (e) {
     if (this.status === 200 || this.status === 304) {
         if(localStorage.OSHUA_ShouZiMuTianKong_QUESTIONver != xhr.responseText){getanswer();}
         localStorage.OSHUA_ShouZiMuTianKong_QUESTIONver = xhr.responseText;
        }
        xhr.onprogress = function (e) {
            console.log("正在检测题库更新: ", (e.loaded/e.total*100).toFixed(2) + '%')
        }};
xhr.send();
function getanswer(){
document.getElementById('loadingq').style.display='block';
var xhr = new XMLHttpRequest();
        xhr.open('GET', "lockedquestion.ordylandata" , true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhr.onload = function (e) {
     if (this.status === 200 || this.status === 304) {
            localStorage.OSHUA_ShouZiMuTianKong_QUESTION = xhr.responseText;
            document.getElementById("ldld").innerHTML = "正在升级题库, 请稍等! [ 已完成 ] ";
            alert("题库更新完成, 请刷新页面! ");location.reload();
        }
        xhr.onprogress = function (e) {
            document.getElementById("ldld").innerHTML = "正在升级题库, 请稍等! [ "+(e.loaded/e.total*100).toFixed(2)+" % ] ";
            console.log("正在加载题库: ", (e.loaded/e.total*100).toFixed(2) + '%');
        }};
xhr.send();}
if('serviceWorker' in navigator){
        navigator.serviceWorker.register('sw.js')
            .then(resitration => {
                console.log("register" , resitration);
            }).catch(err => console.error(err));
}*/





function getanswer(){
    
document.getElementById('loadingq').style.display='block';
var xhr = new XMLHttpRequest();
        xhr.open('GET', "lockedquestion.ordylandata" , true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        xhr.onload = function (e) {
     if (this.status === 200 || this.status === 304) {
         window.abaaa = xhr.responseText;
         window.abaaaa = localStorage.OSHUA_ShouZiMuTianKong_QUESTIONver;
                     localStorage.OSHUA_ShouZiMuTianKong_QUESTION = xhr.responseText;
/*alert("题库更新完成, 请刷新页面! ");*/ location.reload();
/*            

  let dbName1 = 'PAPERRWX', version1 = 1, storeName1 = 'PAPER';
  let indexedDB1 = window.indexedDB;
  let db1;
  const request1 = indexedDB1.open(dbName1, version1);
  request.onsuccess = function(event) {
    db1 = event.target.result; // 数据库对象
    console.log('数据库打开成功');
    let objectStore1;
    if (!db1.objectStoreNames.contains(storeName1)){
      objectStore1 = db1.createObjectStore(storeName1, { keyPath: 'paperid' });
    }
    db1.transaction([storeName1], 'readwrite').objectStore(storeName1).add({paperid:window.abaaaa,p:window.abaaa});
            document.getElementById("ldld").innerHTML = "正在升级题库, 请稍等! [ 已完成 ] ";
  };
  request.onerror = function(event) {
    console.log('数据库打开报错');
  };
  request.onupgradeneeded = function(event) {
    // 数据库创建或升级的时候会触发
    console.log('onupgradeneeded');
 
};*/
        }
        xhr.onprogress = function (e) {
            document.getElementById("ldld").innerHTML = "正在升级题库, 请稍等! [ "+(e.loaded/e.total*100).toFixed(2)+" % ] ";
            console.log("正在加载题库: ", (e.loaded/e.total*100).toFixed(2) + '%');
        }};
xhr.send();}
if(!localStorage.OSHUA_ShouZiMuTianKong_QUESTION){getanswer();}

if('serviceWorker' in navigator){
        navigator.serviceWorker.register('sw.js')
            .then(resitration => {
                console.log("register" , resitration);
            }).catch(err => console.error(err));
}
