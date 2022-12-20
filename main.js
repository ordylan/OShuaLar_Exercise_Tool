if(!localStorage.OSHUA_ShouZiMuTianKong_QUESTION){getanswer();}

//数据库
  let dbName = 'MyResults', version = 1, storeName = 'MyPaperResult';
  let indexedDB = window.indexedDB;
  let db;
  const request = indexedDB.open(dbName, version);
  request.onsuccess = function(event) {
    db = event.target.result; // 数据库对象
    console.log('数据库打开成功');
  };
  request.onerror = function(event) {
    console.log('数据库打开报错');
  };
  request.onupgradeneeded = function(event) {
    // 数据库创建或升级的时候会触发
    console.log('onupgradeneeded');
    db = event.target.result; // 数据库对象
    let objectStore;
    if (!db.objectStoreNames.contains(storeName)){
      objectStore = db.createObjectStore(storeName, { keyPath: 'paperid' });
    }
};
//console
var consolea = new Array("\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u002f\u005c\u005c\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u002f\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u004f\u5237\u002c\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f",
"\u0020\u005f\u005f\u005f\u005f\u005f\u002f\u005c\u005c\u005c\u002f\u002f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u002f\u005c\u005c\u005c\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u005c\u005c\u005c\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u4f60\u7684\u5b66\u4e60\u5229\u5668\u0021\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f",
"\u0020\u0020\u005f\u005f\u005f\u002f\u005c\u005c\u005c\u002f\u005f\u005f\u005c\u002f\u002f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u54c8\u54c8\u8981\u5929\u5929\u5f00\u5fc3\u54e6\u0021\u005f\u005f\u005f\u005c\u002f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u002f\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u2014\u2014\u2014\u2014\u005f\u004f\u0052\u0044\u0059\u004c\u0041\u004e\u51fa\u54c1\u0021\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f",
"\u0020\u0020\u0020\u005f\u005f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u795d\u6211\u6210\u7ee9\u597d\u597d\u005f\u005f\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u002f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u002f\u005c\u005c\u005c\u005f\u005f\u002f\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005f\u005f\u005f\u005f",
"\u0020\u0020\u0020\u0020\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u8eab\u4f53\u5065\u5eb7\u0021\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u002f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005c\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u005c\u005c\u005c\u005f\u005f\u005f",
"\u0020\u0020\u0020\u0020\u0020\u005f\u005c\u002f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u002f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u002f\u002f\u002f\u002f\u002f\u005c\u005c\u005c\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u002f\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005f\u005f",
"\u0020\u0020\u0020\u0020\u0020\u0020\u005f\u005f\u005c\u002f\u002f\u002f\u005c\u005c\u005c\u005f\u005f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u005c\u005c\u005c\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005f\u002f\u005c\u005c\u005c\u002f\u002f\u002f\u002f\u002f\u005c\u005c\u005c\u005f\u005f",
"\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u002f\u005c\u005c\u005c\u005c\u005c\u002f\u005f\u005f\u005f\u005f\u005f\u005f\u002f\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005f\u005c\u002f\u002f\u002f\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u002f\u005f\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005f\u005f\u005c\u002f\u005c\u005c\u005c\u005f\u005c\u002f\u002f\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005f\u005f\u005c\u002f\u002f\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u005c\u002f\u005c\u005c\u005f",
"\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005f\u005f\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u002f\u002f\u002f\u005f\u005f\u005f\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u005f\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u002f\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u002f\u005f\u005f\u005f\u005c\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u005f\u005f\u005f\u005f\u005c\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u002f\u005c\u002f\u002f\u005f\u005f");
var consoleb = "";/*var consoleaaaa = "\u0020";*/
for (var i = 0; i < consolea.length; i++) {
   /* for (var j = 0; j < i; j++) {
        consoleaaaa = consoleaaaa + "\u0020";
    }*/
    consoleb = /*consoleaaaa + */consoleb + "\n" +consolea[i];
    /*consoleaaaa = "\u0020";*/
}
console.log(consoleb);
//updatedomain
var domainaaa3 = "oshua.on.ordylan.cn";
var domainabb2 = "on.ordylan.cn";
var domainacc1 = "ordylan.cn";
if(window.location.hostname == domainacc1){
    console.log("域: "+window.location.hostname);
    console.error("域过老需升级! ");
    if(confirm("我们升级啦! 去新域看看吧! ")){
    window.location.href = "http://" + domainaaa3 + "/ShouZiMuTianKong/"/*+ window.location.pathname*/;}
}
else if(window.location.hostname == domainabb2){
    console.log("域: "+window.location.hostname);
    console.error("域过老需升级! ");
    if(confirm("我们升级啦! 去新域看看吧! ")){
    window.location.href = "http://" + domainaaa3 + "/ShouZiMuTianKong/" /*+ window.location.pathname*/;}
}
else if(window.location.hostname == domainaaa3){
    console.log("域: "+window.location.hostname);
    console.warn("域正常无需升级! ");
}
else{
    console.log("域: "+window.location.hostname);
    console.error("域过老需升级! ");
    alert("我们升级啦! 去新域看看吧! ")
    window.location.href = "http://" + domainaaa3 + "/ShouZiMuTianKong/"/*+ window.location.pathname*/;
}
/*
//导出
exportToJsonString(db, function(err, jsonString) {
    if (err) {
      console.error(err);
    } else {
      console.log('Exported as JSON: ' + jsonString);
    }
  });
//清空
clearDatabase(db, function(err) {
if (err) {console.error(err);}
});
//导入
importFromJsonString(db, jsonString, function(err) {
    if (!err) {
        onsole.log('Imported data successfully');
    }
});
*/
//导出
function out(){
    exportToJsonString(db, function(err, jsonString) {
    if (err) {
      console.error(err);
    } else {
      window.outjson = jsonString;
      copyText(btoa(outjson));
      //alert(btoa(outjson));
    }
  });
}
//导入
function ina(){
     clearDatabase(db, function(err) {if (err) {alert(err);}else{
   var jsonString = atob(document.getElementById("codeeee").value);
    importFromJsonString(db, jsonString, function(err) {
    if (!err) {
        alert('存档导入成功!');location.reload();
    }
    //else{alert('失败: '+err);}
    });}});
}
//清空
function empty(){
if(confirm("确定要清空数据? "))
 {
 clearDatabase(db, function(err) {if (err) {alert(err);}else{alert("成功");location.reload();}});
 }
}
//上传
/*
function uploadout(){
    exportToJsonString(db, function(err, jsonString) {
    if (err) {
      console.error(err);
    } else {
      window.outjson = jsonString;
      
var xhr = new XMLHttpRequest();
xhr.open('POST', '../SyncData.php', true);
xhr.onload = function (e) {
if (this.status == 200 || this.status == 304) {

}};
xhr.send("data="+outjson);
    }
  });
}
*/
//复制
function copyText(text) {
  var input = document.getElementById("codeeee");
  input.value = text; // 修改文本框的内容
  input.select(); // 选中文本
  document.execCommand("copy"); // 执行浏览器复制命令
  alert("成功");
 }
//获取题目
function geta(){
var ohh = {
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	decode: function(input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		while (i < input.length) {
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
			output = output + String.fromCharCode(chr1);
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
		}
		output = ohh._utf8_decode(output);
		return output;
	},
	_utf8_decode: function(utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
		while (i < utftext.length) {
			c = utftext.charCodeAt(i);
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
}
var jiamidecode = localStorage.OSHUA_ShouZiMuTianKong_QUESTION;
var coddepw = "abcdefghijklmnopqrstuvwxyz";
var s=coddepw,reg=/.{1}/g;
rs=s.match(reg);
rs.push(s.substring(rs.join('').length));
for(var i=0;i<rs.length;i++){ 
if(rs[i] == "a")     {jiamidecode = jiamidecode.replace(new RegExp("`Y",'g'),rs[i]);}
else if(rs[i] == "b"){jiamidecode = jiamidecode.replace(new RegExp("`Z",'g'),rs[i]);}
else if(rs[i] == "c"){jiamidecode = jiamidecode.replace(new RegExp("`A",'g'),rs[i]);}
else if(rs[i] == "d"){jiamidecode = jiamidecode.replace(new RegExp("`B",'g'),rs[i]);}
else if(rs[i] == "e"){jiamidecode = jiamidecode.replace(new RegExp("`C",'g'),rs[i]);}
else if(rs[i] == "f"){jiamidecode = jiamidecode.replace(new RegExp("`D",'g'),rs[i]);}
else if(rs[i] == "g"){jiamidecode = jiamidecode.replace(new RegExp("`E",'g'),rs[i]);}
else if(rs[i] == "h"){jiamidecode = jiamidecode.replace(new RegExp("`F",'g'),rs[i]);}
else if(rs[i] == "i"){jiamidecode = jiamidecode.replace(new RegExp("`G",'g'),rs[i]);}
else if(rs[i] == "j"){jiamidecode = jiamidecode.replace(new RegExp("`H",'g'),rs[i]);}
else if(rs[i] == "k"){jiamidecode = jiamidecode.replace(new RegExp("`I",'g'),rs[i]);}
else if(rs[i] == "l"){jiamidecode = jiamidecode.replace(new RegExp("`J",'g'),rs[i]);}
else if(rs[i] == "m"){jiamidecode = jiamidecode.replace(new RegExp("`K",'g'),rs[i]);}
else if(rs[i] == "n"){jiamidecode = jiamidecode.replace(new RegExp("`L",'g'),rs[i]);}
else if(rs[i] == "o"){jiamidecode = jiamidecode.replace(new RegExp("`M",'g'),rs[i]);}
else if(rs[i] == "p"){jiamidecode = jiamidecode.replace(new RegExp("`N",'g'),rs[i]);}
else if(rs[i] == "q"){jiamidecode = jiamidecode.replace(new RegExp("`O",'g'),rs[i]);}
else if(rs[i] == "r"){jiamidecode = jiamidecode.replace(new RegExp("`P",'g'),rs[i]);}
else if(rs[i] == "s"){jiamidecode = jiamidecode.replace(new RegExp("`Q",'g'),rs[i]);}
else if(rs[i] == "t"){jiamidecode = jiamidecode.replace(new RegExp("`R",'g'),rs[i]);}
else if(rs[i] == "u"){jiamidecode = jiamidecode.replace(new RegExp("`S",'g'),rs[i]);}
else if(rs[i] == "v"){jiamidecode = jiamidecode.replace(new RegExp("`T",'g'),rs[i]);}
else if(rs[i] == "w"){jiamidecode = jiamidecode.replace(new RegExp("`U",'g'),rs[i]);}
else if(rs[i] == "x"){jiamidecode = jiamidecode.replace(new RegExp("`V",'g'),rs[i]);}
else if(rs[i] == "y"){jiamidecode = jiamidecode.replace(new RegExp("`W",'g'),rs[i]);}
else if(rs[i] == "z"){jiamidecode = jiamidecode.replace(new RegExp("`X",'g'),rs[i]);}}
jiamidecode = ohh.decode(jiamidecode);localStorage.clear();
return jiamidecode;
}

var q = geta();
var qlist = q.split('{<|^(^)^|>}');
document.getElementById("mainn").innerHTML = "你好呀, 欢迎来到[首字母填空专场]! 现有习题"+qlist.length+"道, 你已经完成了[Loading]道, 真棒!<br>测试进行中, 部分习题答案批改错误, 欢迎反馈!存档等功能已上线!<br>>现在看上去非常不爽因为还没有仔细写css,未来会写的啊<<br>";

//var aaa = "";
//var resultaa;
//var finnishaa;
//获取数据库
function getDataByKey(db, storeName, key) {
      let transaction = db.transaction([storeName]); // 事务
      let objectStore = transaction.objectStore(storeName); // 仓库对象
      let request = objectStore.get(key);
      request.onerror = function(event) {
        console.log('获取失败');
      }
      request.onsuccess = function(event) {
        console.log('主键查询结果: ', request.result);
        let aaaaaa = request.result;
        return aaaaaa;
      }
  }
var alltimuwancheng = 0;
//获取表
function glistt(){
window.aaa = '<div class="qqq"><div class="timu">题目名字(如已完成可以点击查看情况)</div><div class="qkuang">完成情况</div><div class="go">开始按钮</div></div>';
for (var i = 0; i < qlist.length; i++) {
(function(i){
    //resultaa = db.transaction([storeName]).objectStore(storeName).get((i+1));
    //resultaa = resultaa.result;
    //localStorage.OSHUA_ShouZiMuTianKong_TempList = "";
    let resultaa1 = db.transaction([storeName]).objectStore(storeName).get(i+1);
    resultaa1.onsuccess = function(event) {
         //console.log('主键查询结果: ', resultaa1.result);
         window.resultaa = resultaa1.result;
         //console.log(resultaa);
    if(window.resultaa == undefined){
        window.finnishaa = "未完成";
        
    }
    else{
        window.finnishaa = "已完成";
        window.alltimuwancheng = window.alltimuwancheng + 1;
    }
   // console.log(window.aaa);
    window.aaa = window.aaa + '<div class="qqq"><div class="timu"><a href="javascript:void(0);" onclick="reshua('+(i+1)+');">题目'+(i+1)+'</a></div><div class="qkuang" id="finishmode_'+(i+1)+'">'+window.finnishaa+'</div><div class="go"><a href="javascript:void(0);" onclick="gooshua('+(i+1)+');">[刷]</a></div></div>';
window.resultaa = undefined;window.finnishaa = "";
}
})(i)

}
setTimeout("document.getElementById(\"qlistsa\").innerHTML = window.aaa;document.getElementById(\"mainn\").innerHTML = \"你好呀, 欢迎来到[首字母填空]专场! 现有习题\"+qlist.length+\"道, 你已经完成了\"+alltimuwancheng+\"道, 真棒!<br>存档等功能已上线! 2022.12.20更新: 优化批改逻辑,小幅度减少了习题答案批改错误的问题, 如有其他问题, 欢迎反馈! <br>>看上去非常不爽因为还没有仔细写css,未来会写的啊<<br>\";", 500);

}
setTimeout("glistt();", 1000);


//计时器
setInterval(function(){Time();},1000);
function Time(){
    if(sessionStorage.OSHUA_ShouZiMuTianKong_dotime != "end"){
    sessionStorage.OSHUA_ShouZiMuTianKong_dotime = Number(sessionStorage.OSHUA_ShouZiMuTianKong_dotime) + 1;
        document.getElementById('oes1').innerHTML = "O刷中_首字母填空 [ "+sessionStorage.OSHUA_ShouZiMuTianKong_dotime+" 秒 ]<a href=\"javascript:void(0);\" onclick=\"finishshua();\">[提交]</a>";
    }
}
//开始刷
function gooshua(qid){
sessionStorage.OSHUA_ShouZiMuTianKong_dotime = 0;
document.getElementById('startshua').style.display='block';document.getElementById('lists').style.display='none';
sessionStorage.OSHUA_ShouZiMuTianKong_Q_ID = qid;
var thisq = qlist[(qid-1)];
// [Tpapers]{<|^|>}[Tpapers/RA]{<|^|>}[Tpapers/Answers]{<|^|>}[Tpapers/Jiexi]{<|^(^)^|>}
//[Tpapers/Answers]  Answer1{<|A|>}Answer2{<|A|>}Answer3 {<|D|>}多答案
var thisqlist = thisq.split('{<|^|>}');
var timua = thisqlist[0];
var timuright = thisqlist[1];
if(timuright != "1"){document.getElementById('error').style.display='block';}
var timuanswer = thisqlist[2];
if(timuright == "1"){var howmanyanswer = timuanswer.split('{<|A|>}');
for (i = 0; i < howmanyanswer.length; i++) {
document.getElementById('answerplace').innerHTML = document.getElementById('answerplace').innerHTML+'<p>第'+(i+1)+'空: <input type="text" name="SSSSS"></p>';
}
}else{document.getElementById('answerplace').innerHTML = '<p>该题目无法自动批改, 答案请写在这里: <input type="text" name="SSSSS"></p>';}
//var timujiexi = thisqlist[3];
timua = timua.replace(/\n|\r/g, '<br/>');
timua = timua.replace(/( )/g,"&nbsp;");
document.getElementById('qall').innerHTML = timua;

//document.getElementById('qall2').innerHTML = timua;
//document.getElementById('rightanswer').innerHTML = timuanswer;
//document.getElementById('jiexi').innerHTML = timujiexi;


    //console.log(thisq);
}
//返回清空框
function back(){
document.getElementById('myanswer').innerHTML = "[我的答案] : ";
document.getElementById('rightanswer').innerHTML = "[正确答案] : ";
document.getElementById('answerplace').innerHTML = "";
}
//提交答案
function finishshua(){
    document.getElementById('lddd').style.display='none';
//db.transaction([storeName], 'readwrite').objectStore(storeName).add({paperid:1,myanswer:"xx",finishtime:0,addtime:10})
var tttttt = sessionStorage.OSHUA_ShouZiMuTianKong_dotime;
sessionStorage.OSHUA_ShouZiMuTianKong_dotime = "end";
var qid = Number(sessionStorage.OSHUA_ShouZiMuTianKong_Q_ID);
document.getElementById('endshua').style.display='block';document.getElementById('startshua').style.display='none';
var thisq = qlist[(qid-1)];

var thisqlist = thisq.split('{<|^|>}');
var timua = thisqlist[0];
var timuright = thisqlist[1];
if(timuright != "1"){document.getElementById('error').style.display='block';}
var timuanswer = thisqlist[2];
var timujiexi = thisqlist[3];
timua = timua.replace(/\n|\r/g, '<br/>');
timua = timua.replace(/( )/g,"&nbsp;");
document.getElementById('qall2').innerHTML = timua;

//document.getElementById('rightanswer').innerHTML = timuanswer;

timujiexi = timujiexi.replace(/\n|\r/g, '<br/>');
timujiexi = timujiexi.replace(/( )/g,"&nbsp;");

document.getElementById('jiexi').innerHTML = ""+timujiexi+"";

var howmanyanswer = timuanswer.split('{<|A|>}');
var myyyyanswer = "";
var input_array = document.getElementsByName("SSSSS");
var rightaaa = "0";
for(i=0;i<howmanyanswer.length;i++){
    if(input_array[i].value == howmanyanswer[i].replace(/[^0-9a-zA-Z]/g, '')){
        document.getElementById('myanswer').innerHTML = document.getElementById('myanswer').innerHTML+""+(i+1)+": " + input_array[i].value+"[正确], ";rightaaa = Number(rightaaa) + 1;var tttaaa = 1;
    }
    else if(input_array[i].value.slice(1) == howmanyanswer[i].replace(/[^0-9a-zA-Z]/g, '')){
        document.getElementById('myanswer').innerHTML = document.getElementById('myanswer').innerHTML+""+(i+1)+": " + input_array[i].value+"[正确], ";rightaaa = Number(rightaaa) + 1;var tttaaa = 1;
    }
    else{
        if(howmanyanswer[i].indexOf("{<|D|>}") != -1){
            var howmanyansweraa = howmanyanswer[i].split('{<|D|>}');
            for (j = 0; j < howmanyansweraa.length; j++) {
                if(howmanyansweraa[j].replace(/[^0-9a-zA-Z]/g, '') == input_array[i].value){
                    document.getElementById('myanswer').innerHTML = document.getElementById('myanswer').innerHTML+""+(i+1)+": " + input_array[i].value+"[正确], ";rightaaa = Number(rightaaa) + 1;var tttaaa = 1;
                }
                else if(howmanyansweraa[j].replace(/[^0-9a-zA-Z]/g, '') == input_array[i].value.slice(1)){
                    document.getElementById('myanswer').innerHTML = document.getElementById('myanswer').innerHTML+""+(i+1)+": " + input_array[i].value+"[正确], ";rightaaa = Number(rightaaa) + 1;var tttaaa = 1;
                }
                else{
                    
                }
            }
        }
        if(tttaaa != 1){
        document.getElementById('myanswer').innerHTML = document.getElementById('myanswer').innerHTML+""+(i+1)+": " + input_array[i].value+"[错误], ";
        }
        
    }
myyyyanswer = myyyyanswer + input_array[i].value + "{<|A|>}" ;
document.getElementById('rightanswer').innerHTML = document.getElementById('rightanswer').innerHTML+""+(i+1)+": " + howmanyanswer[i]+", ";
var tttaaa = 0;
}
console.log(rightaaa);console.log(howmanyanswer.length);
let requestaa = db.transaction([storeName], 'readwrite').objectStore(storeName).delete(qid);
document.getElementById('hhaha').innerHTML = "正确率: "+(Number(rightaaa)/Number(howmanyanswer.length)*100).toFixed(1)+"% || 用时: " + tttttt + "秒";

db.transaction([storeName], 'readwrite').objectStore(storeName).add({paperid:qid,myanswer:myyyyanswer,finishtime:Number(new Date()),addtime:tttttt})

   // console.log(thisq);
}
//Get请求
 var requestq =
   {QueryString : function(val){
   var uri = window.location.search;
   var re = new RegExp("" +val+ "=([^&?]*)", "ig");
   return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null);}}
   if(requestq.QueryString("qid")){
       reshua(requestq.QueryString("qid"));
   }
   
//查看记录
function reshua(qid){
document.getElementById('lists').style.display='none';
    if(requestq.QueryString("share")){window.qqqthis = JSON.stringify(requestq.QueryString("share"));}
else{
let resultaa1 = db.transaction([storeName]).objectStore(storeName).get(qid);
resultaa1.onsuccess = function(event) {window.qqqthis = resultaa1.result;}}
document.getElementById('lddd').style.display='block';document.getElementById('endshua').style.display='block';
setTimeout("reshua2("+qid+");",1000);
}
var tatat;
function reshua2(qid){
if(requestq.QueryString("qid") && requestq.QueryString("share")){tatat = 1;}
else if(document.getElementById('finishmode_'+qid).innerHTML != "未完成"){tatat = 1;}
else{tatat = 0;}
if(tatat == 1){
document.getElementById('lists').style.display='none';document.getElementById('lddd').style.display='none';
var thisq = qlist[(qid-1)];

var thisqlist = thisq.split('{<|^|>}');
var timua = thisqlist[0];
var timuright = thisqlist[1];
if(timuright != "1"){document.getElementById('error').style.display='block';}
var timuanswer = thisqlist[2];
var timujiexi = thisqlist[3];
timua = timua.replace(/\n|\r/g, '<br/>');
timua = timua.replace(/( )/g,"&nbsp;");
document.getElementById('qall2').innerHTML = timua;

//document.getElementById('rightanswer').innerHTML = timuanswer;

timujiexi = timujiexi.replace(/\n|\r/g, '<br/>');
timujiexi = timujiexi.replace(/( )/g,"&nbsp;");
document.getElementById('jiexi').innerHTML = ""+timujiexi+"";

var howmanyanswer = timuanswer.split('{<|A|>}');
var myyyyanswer = "";
var input_array = qqqthis.myanswer.split('{<|A|>}');
var rightaaa = "0";
for(i=0;i<howmanyanswer.length;i++){
    if(input_array[i] == howmanyanswer[i].replace(/[^0-9a-zA-Z]/g, '')){
        document.getElementById('myanswer').innerHTML = document.getElementById('myanswer').innerHTML+""+(i+1)+": " + input_array[i]+"[正确], ";rightaaa = Number(rightaaa) + 1;var tttaaa = 1;
    }
    else if(input_array[i].slice(1) == howmanyanswer[i].replace(/[^0-9a-zA-Z]/g, '')){
        document.getElementById('myanswer').innerHTML = document.getElementById('myanswer').innerHTML+""+(i+1)+": " + input_array[i]+"[正确], ";rightaaa = Number(rightaaa) + 1;var tttaaa = 1;
    }
    else{
        if(howmanyanswer[i].indexOf("{<|D|>}") != -1){
            var howmanyansweraa = howmanyanswer[i].split('{<|D|>}');
            for (j = 0; j < howmanyansweraa.length; j++) {
                if(howmanyansweraa[j].replace(/[^0-9a-zA-Z]/g, '') == input_array[i]){
                    document.getElementById('myanswer').innerHTML = document.getElementById('myanswer').innerHTML+""+(i+1)+": " + input_array[i]+"[正确], ";rightaaa = Number(rightaaa) + 1;var tttaaa = 1;
                }
                else if(howmanyansweraa[j].replace(/[^0-9a-zA-Z]/g, '') == input_array[i].slice(1)){
                    document.getElementById('myanswer').innerHTML = document.getElementById('myanswer').innerHTML+""+(i+1)+": " + input_array[i]+"[正确], ";rightaaa = Number(rightaaa) + 1;var tttaaa = 1;
                }
                else{
                    
                }
            }
        }
        if(tttaaa != 1){
        document.getElementById('myanswer').innerHTML = document.getElementById('myanswer').innerHTML+""+(i+1)+": " + input_array[i]+"[错误], ";
        }
        
    }
myyyyanswer = myyyyanswer + input_array[i] + "{<|A|>}" ;
document.getElementById('rightanswer').innerHTML = document.getElementById('rightanswer').innerHTML+""+(i+1)+": " + howmanyanswer[i]+", ";
var tttaaa = 0;
}

        var adate = new Date(Number(qqqthis.finishtime));
        var aY = adate.getFullYear() + '-';
        var aM = (adate.getMonth()+1 < 10 ? '0'+(adate.getMonth()+1) : adate.getMonth()+1) + '-';
        var aD = adate.getDate() + ' ';
        var ah = adate.getHours() + ':';
        var am = adate.getMinutes() + ':';
        var as = adate.getSeconds();

document.getElementById('hhaha').innerHTML = "正确率: "+(rightaaa/(howmanyanswer.length)*100).toFixed(1)+"% || 用时: " + qqqthis.addtime + "秒 || 提交时间: "+aY+aM+aD+ah+am+as;
   // console.log(thisq);
}
else{alert("报告未生成, 请先提交习题! ");back();document.getElementById('endshua').style.display='none';document.getElementById('lists').style.display='block';}
}



