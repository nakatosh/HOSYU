//設備CD
var arr = [
    {cd:"", label:"▼設備"},
    {cd:"13", label:"CP"},
    {cd:"23", label:"WP"},
    {cd:"33", label:"TR"},
    {cd:"43", label:"AS"},
    {cd:"53", label:"樹木"},
    {cd:"63", label:"その他"}
  ];
   
  //不良CD
  var fryou = [
    {cd0:"13",cd:"", label:"▼不良選択"},
    {cd0:"13",cd:"1", label:"傾斜"},
    {cd0:"13",cd:"2", label:"防護版"},
    {cd0:"13",cd:"3", label:"足場ボルト"},
    {cd0:"23",cd:"11", label:"WP腐食"},
    {cd0:"23",cd:"12", label:"WP傾斜"},
    {cd0:"23",cd:"13", label:"WP破損"},
    {cd0:"23",cd:"14", label:"豊田市"},
    {cd0:"23",cd:"15", label:"一宮市"}
  ];
  //改修CD
  var kai = [
    {cd0:"1",cd:"", label:"改修方法"},
    {cd0:"1",cd:"1", label:"CP建替"},
    {cd0:"1",cd:"2", label:"防護版"},
    {cd0:"1",cd:"3", label:"足場ボルト"},
    {cd0:"2",cd:"11", label:"WP建替"},
    {cd0:"2",cd:"12", label:"WP補強"},
    {cd0:"3",cd:"13", label:"WP建替"},
    {cd0:"3",cd:"14", label:"WP補強"},
    {cd0:"11",cd:"15", label:"WP撤去"}
  ];
  
    //ランクCD
  var rank = [
    {cd0:"1",cd:"A", label:"A"},
    {cd0:"1",cd:"B", label:"B"},
    {cd0:"2",cd:"C", label:"C"},
    {cd0:"3",cd:"A", label:"A"},
    {cd0:"11",cd:"B", label:"B"},
    {cd0:"12",cd:"C", label:"C"},
    {cd0:"13",cd:"C", label:"C"},
    {cd0:"14",cd:"C", label:"C"},
    {cd0:"11",cd:"D", label:"D"}
  ];