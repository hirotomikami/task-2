let num = 0;
for (i = 1; i <51; i++){
  num = i;
  console.log(num);
  if(num == 10){
    console.log( '今' + num + '回ループしました。');
  } else if(num == 20){
    console.log( '今' + num + '回ループしました。');
  } else if(num == 30){
    console.log( '今' + num + '回ループしました。');
  } else if(num == 40){
    console.log( '今' + num + '回ループしました。');
  } else if(num == 50){
    alert( num + '回カウントが終わりました。')
  }
  
  if(num % 4 == 0) {
    console.log('4で割れる数です。' + '[' + num + ']')
  }
}
