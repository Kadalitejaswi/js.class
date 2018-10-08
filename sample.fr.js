
let user=['fruit','count','total']
alert('welcome to Fruits Shop')
while(true){
let options=prompt(`Select any fruit..!
1.Apple
2.Orange
3.Mango
4.Banana
5.Others....`);
if(options==='1'|| options==='apple'||
options==='2' || options==='orange'|| 
options==='3'||options==='mango'||
options==='4'|| options==='banana'||
options==='5'){
switch(options){
    case '1': case 'apple':
    console.log("you selected apple");
     var fruit="apple";
     var count=prompt('How many apples do you want?') 
     var total=15*count;
    user[0]="Fruit :"+fruit;
    user[1]="Price :"+count;
    user[2]="Total :"+total;
     console.log(user);
    alert('You purchased '+total+"apples")

       break;
       case '2': case 'Orange':
       console.log("you selected Orange");
        var fruit="orange";
        var count=prompt('How many Oranges do you want?') 
        var total=15*count;
       user[0]="Fruit :"+fruit;
       user[1]="Price :"+count;
       user[2]="Total :"+total;
        console.log(user);
       alert('You purchased '+total+"oranges")
   
          break;
          case '3': case 'Mango':
          console.log("you selected mango");
           var fruit="mango";
           var count=prompt('How many mango do you want?') 
           var total=15*count;
          user[0]="Fruit :"+fruit;
          user[1]="Price :"+count;
          user[2]="Total :"+total;
           console.log(user);
          alert('You purchased '+total+"mango")
      
             break;
             case '4': case 'Banana':
             console.log("you selected banana");
              var fruit="banana";
              var count=prompt('How many banana do you want?') 
              var total=15*count;
             user[0]="Fruit :"+fruit;
             user[1]="Price :"+count;
             user[2]="Total :"+total;
              console.log(user);
             alert('You purchased '+total+"banana")
         
                break;
                      


    case '5':
    
    console.log("you selected "+fruit);
              var fruit=prompt('Which fruit do you want');
              var count=prompt('How many do you want?') 
              var total=20*count;
             user[0]="Fruit :"+fruit;
             user[1]="Price :"+count;
             user[2]="Total :"+total;
              console.log(user);
             alert('You purchased '+total)
             break;

      default:   
    console.log("invalid option");
    
}}

else{
    console.log("invalid option");
    break;
}}