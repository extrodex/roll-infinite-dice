/* update log
update 1.1a
date released: ???
added normal view
//update 1.2a
date relased: 9/31/22
added loading screen
fixed ratios
improved UI
end of update log */
var one = 0; var two = 0; var three = 0; var four = 0; var five = 0; var six = 0;
var amt = 0; var amt2 = 0;
var rolldice;
var percent;
var total =0;
var ratio = false;
var settingsinfo = false;
var normalinfo = false;
var ratioinfo = false;
onEvent("button1","click", function(){
  if ("text_input1" != ""){
    setScreen("screen2");
    amt = getNumber("text_input1");
    total+=amt;
    roll();
  }
});
function roll(){
  rolldice = randomNumber(1,6);
  if (rolldice == 1){
   one++;
   console.log("1="+one);
   setText("label2", one);
  }
  if (rolldice == 2){
   two++;
   console.log("2="+two);
   setText("label4", two);
  }
  if (rolldice == 3){
   three++;
   console.log("3="+three);
   setText("label6", three);
  }
  if (rolldice == 4){
   four++;
   console.log("4="+four);
   setText("label8", four);
  }
  if (rolldice == 5){
   five++;
   console.log("5="+five);
   setText("label10", five);
  }
  if (rolldice == 6){
   six++;
   console.log("6="+six);
   setText("label12", six);
  }
  amt2++;
  percent = amt2/amt*100;
  
  setText("label17", percent + "% done...");
  if (amt2>=amt){
    amt = 0;
    amt2 = 0;
    if(ratio==true){
    ratiotoggle();
  }
    setScreen("screen1");
  } else{roll()}
}
onEvent("button2","click",function(){
  one = 0; two = 0; three = 0; four = 0; five = 0; six = 0; amt2 = 0; total = 0;
  setText("label2",0); setText("label4",0); setText("label6",0); setText("label8",0); setText("label10",0);setText("label12",0);
});
function ratiotoggle(){setText("label2",((one+"/")+total)); setText("label4",((two+"/")+total)); setText("label6",((three+"/")+total)); setText("label8",(four+"/"+total)); setText("label10",(five+"/"+total));setText("label12",(six+"/"+total));}
var yes = true;
onEvent("percentage","click",function(){
  if (one==0){
    setText("label2","0%");
    yes = false;
  }
  if (two==0){
    setText("label4","0%");
    yes = false;
  }
  if (three==0){
    setText("label6","0%");
    yes = false;
  }
  if (four==0){
    setText("label8","0%");
    yes = false;
  }
  if (five==0){
    setText("label10","0%");
    yes = false;
  }
  if (six==0){
    setText("label12","0%");
    yes = false;
  }
  if (yes == true){
    setText("label2",one/amt*100+"%"); setText("label4",two/amt*100+"%"); setText("label6",three/amt*100+"%"); setText("label8",four/amt*100+"%"); setText("label10",five/amt*100+"%");setText("label12",6/amt*100+"%");
  }
  
});
onEvent("label19","click",function(){
if(normalinfo==false){
  clearsettings();
  clearratio();
  normalinfo=true;
  showElement("image2");
  setText("label14", "NORMAL");
  setText("label15", "View rolled numbers by them selves.");
  setText("button4", "Activate");
  showElement("label14");
  showElement("label15");
  showElement("button4");
  showElement("label18");
  }else{
    clearnormal();
  }
});
onEvent("ratio","click",function(){
if(ratioinfo==false){
  clearsettings();
  clearnormal();
  ratioinfo=true;
  showElement("image2");
  setText("label14", "RATIO");
  setText("label15", "View rolled numbers out of total");
  setText("button4", "Activate");
  showElement("label14");
  showElement("label15");
  showElement("button4");
  showElement("label20");
  }else{
    clearratio();
  }
});
onEvent("image1","click",function(){
  if(settingsinfo==false){
  clearnormal();
  clearratio();
  settingsinfo=true;
  showElement("image2");
  setText("label14", "SETTINGS");
  setText("label15", "Change stuff like the color of things.");
  setText("button4", "Settings");
  showElement("label14");
  showElement("label15");
  showElement("button4");
  showElement("settingsarrow");
  }else{
    clearsettings();
  }
});
onEvent("button4","click",function(){
  if(settingsinfo==true){
   setScreen("screen3"); 
  }
  if(normalinfo==true){
    setText("label2",one); setText("label4",two); setText("label6",three); setText("label8",four); setText("label10",five);setText("label12",six);  
  }
  if(ratioinfo==true){
    ratio=true;
    setText("label2",((one+"/")+total)); setText("label4",((two+"/")+total)); setText("label6",((three+"/")+total)); setText("label8",(four+"/"+total)); setText("label10",(five+"/"+total));setText("label12",(six+"/"+total));
  }
});
onEvent("checkbox1","click",function(){
  hideElement("checkbox1");
  hideElement("label24");
  hideElement("label26");
});
function clearsettings (){
  settingsinfo=false;
  hideElement("label14");
  hideElement("label15");
  hideElement("button4");
  hideElement("image2");
  hideElement("settingsarrow");
  
}
function clearnormal(){
  normalinfo=false;
  hideElement("label14");
  hideElement("label15");
  hideElement("button4");
  hideElement("image2");
  hideElement("label18");
}
function clearratio(){
  ratioinfo=false;
  hideElement("label14");
  hideElement("label15");
  hideElement("button4");
  hideElement("image2");
  hideElement("label20");
}
onEvent("button3","click",function(){
  if(getChecked("checkbox2") == "true"){
    showElement("percentage");
  } else{
    hideElement("percentage");
  }
  setScreen("screen1");
});

