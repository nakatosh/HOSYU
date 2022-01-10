
//都府県コンボの生成
window.onload=function(){
    for(var i=0;i<arr.length;i++){
      let op = document.createElement("option");
      op.value = arr[i].cd;
      op.text = arr[i].label;
      document.getElementById("setubi").appendChild(op);
      document.getElementById('setubi').focus()
    }
  }
//設備が選択された時に呼び出される処理
function fs(obj){
    var targetArr;
    
    if(obj.value == ""){
      targetArr = new Array();
    }else {
      targetArr = fryou;
    }
  //不良の表示内容を絞り込む
    var selObj = document.getElementById('fryou');
    CD.value = obj.value;
    document.getElementById('fryou').focus()
    while(selObj.lastChild){
      selObj.removeChild(selObj.lastChild);
    }
    for(var i=0;i<targetArr.length;i++){
      let op = document.createElement("option");
      //設備CD0でフィルタ
      if(targetArr[i].cd0==obj.value){
      op.value = targetArr[i].cd;
      op.text = targetArr[i].label;
      selObj.appendChild(op); 
      }
  
    }
  }
  
  //不良が選択された時に呼び出される処理
  function ks(obj){
    var targetArr;
    CD.value = CD.value.slice(0,2)  + obj.value;
    document.getElementById('kai').focus()
    if(obj.value == ""){
      targetArr = new Array();
    }else {
      targetArr = kai;
    }
  //不良の表示内容を絞り込む
    var selObj = document.getElementById('kai');
    while(selObj.lastChild){
      selObj.removeChild(selObj.lastChild);
    }
    for(var i=0;i<targetArr.length;i++){
      let op = document.createElement("option");
      //設備CD0でフィルタ
      if(targetArr[i].cd0==obj.value){
      op.value = targetArr[i].cd;
      op.text = targetArr[i].label;
      selObj.appendChild(op); 
      }
  
    }
  }
  
  //不良が選択された時に呼び出される処理
  function rs(obj){
    var targetArr;
    CD.value = CD.value.slice(0,3)  + obj.value;
    if(obj.value == ""){
      targetArr = new Array();
    }else {
      targetArr = rank;
    }
  //不良の表示内容を絞り込む
    var selObj = document.getElementById('rank');
    while(selObj.lastChild){
      selObj.removeChild(selObj.lastChild);
    }
    for(var i=0;i<targetArr.length;i++){
      let op = document.createElement("option");
      //設備CD0でフィルタ
      if(targetArr[i].cd0==obj.value){
      op.value = targetArr[i].cd;
      op.text = targetArr[i].label;
      selObj.appendChild(op); 
      }
  
    }
  }