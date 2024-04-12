function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let r,count=0;
    let str="";
for(let i=0;i<7;i++){
    r=(num-num%1000)/1000;
    while(r!=0){str=str+obj["0"][0];
        r--;
    }
    num=num%1000;
    if(num>=900){str=str+"C"+"M";
        num=num%900;
    }
    r=(num-num%500)/500;
    while(r!=0){str=str+obj["1"][0];
        r--;
    }
    num=num%500;
    if(num>=400){str=str+"CD";
        num=num%400;
    }
    r=(num-num%100)/100;
    while(r!=0){str=str+obj["2"][0];
        r--;}
        num=num%100;
        if(num>=90){str=str+"XC";
            num=num%90;
        }
         r=(num-num%50)/50;
    while(r!=0){str=str+obj["3"][0];
        r--;}
        num=num%50;
         if(num>=40){str=str+"XL";
            num=num%40;
        }
         r=(num-num%10)/10;
    while(r!=0){str=str+obj["4"][0];
        r--;}
        num=num%10;
        if(num==9){str=str+"IX";
            num=num%9;
        }
         r=(num-num%5)/5;
    while(r!=0){str=str+obj["5"][0];
        r--;}
        num=num%5;
        if(num==4){str=str+"IV";
            num=num%4;
        }
         r=(num-num%1)/1;
    while(r!=0){str=str+obj["6"][0];
        r--;}
    return str;
}

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
