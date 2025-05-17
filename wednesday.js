// 1. function update(){
//     setCounter(counter +1)
//     setCounter(counter +1)
//     setCounter(counter +1)
//     }
     
//     2. const [data,setData] =useState({name:'',gender:'',Age:''})
//     var response = {name:'x',gender:'x',mob:'xx',dob:'cc'}

//     git stash pop and git stash  apply
//     why react is called Stringle page aaplication
//     strong and Bold 
//     async await in redux
//     error boundry in react


    

//2. GUess the output

var x = 3;
var y = "4";
console.log(x+y)

//3. Fixed the error in the code

func2();
abc();

function func2(){
for(let i = 0; i < 3; i++){
setTimeout(()=> console.log(i),2000);
}
}

 

 

const abc = func3=()=> {

for(var i = 0; i < 3; i++){

setTimeout(()=> console.log(i),2000);

}

}

 

//4 use getter method to console the name Monica

const student = {
firstName: 'Monica',
get getName() {
return this.firstName;
}
}
const student1 = {
    firstName: 'Monica',
    
    get getName() {
      return this.firstName;
    },
    
    set setName(newName) {
      this.firstName = newName;
    }
  };
  
  console.log(student1.getName); // Output: Monica
  
  student1.setName = "Rachel";  // Using setter to change the name
  
  console.log(student1.getName); // Output: Rachel
  

//5. Destructure the city name bangalore

const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43,
'department':{
	'name': 'Sales',
  'Shift': 'Morning',
  'address': {
 		'city': 'Bangalore',
		'street': '7th Residency Rd',
		'zip': 560001
 		}
}

}

 

//6. remove element 4 from arr

const arr = [1,2,3,4,5]

//7.convert the below block to promise
functiondivide(a, b) {
 &nbsp;&nbsp; try {
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if (b === 0) {
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; thrownewError('Division by zero');
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return a / b;
 &nbsp;&nbsp; } catch (error) {
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return error.message;
 &nbsp;&nbsp; }
}


<!DOCTYPE html>
<html>
<head>
<style>
div.relative {
  position: relative;
  width: 100vw;
  height: 100vw;
  background-color:red;
}
 
div.absolute {
  position: absolute;
  background-color:blue;
  width: 20rem;
  height: 20rem;
}
</style>

</head>
<body>
<div class="relative">
<div class="absolute"></div>
</div>
</body>
</html>


    //7.convert the below block to promise
functiondivide(a, b) {
    try {
        if (b === 0) {
            thrownewError('Division by zero');
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}



//1 What is the output of
console.log(3>2>1) //true
console.log("" == [null])//true
console.log("" == []);  // true (same reason as above)
console.log("" == [undefined]);  // true (same as [null])
console.log("" == null);  // false (null is not coerced to an empty string)
console.log("" == undefined);  // false (undefined is not coerced to an empty string)
console.log(2 * null);//0
console.log(2 * undefined);  // NaN (undefined cannot be converted to a number)
console.log(2 * "5");  // 10 (string "5" is coerced to a number)
console.log(2 * "abc");  // NaN (cannot convert "abc" to a number)
console.log(2 * true);  // 2 (true is coerced to 1)
console.log(2 * false); // 0 (false is coerced to 0)


//2. GUess the output

var x = 3;
var y = "4";
console.log(x+y) //7

//3. Fixed the error in the code

func2();
abc();

function func2(){
for(let i = 0; i < 3; i++){
setTimeout(()=> console.log(i),2000);
}
}

 

 

const abc = func3=()=> {

for(var i = 0; i < 3; i++){

setTimeout(()=> console.log(i),2000);

}

}

 

//4 use getter method to console the name Monica

const student = {
firstName: 'Monica',
get getName() {
return this.firstName;
}
}

//5. Destructure the city name bangalore

const user = {
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43,
'department':{
	'name': 'Sales',
  'Shift': 'Morning',
  'address': {
 		'city': 'Bangalore',
		'street': '7th Residency Rd',
		'zip': 560001
 		}
}

}
let cityName = {

 

//6. remove element 4 from arr

const arr = [1,2,3,4,5]

arr

//7.convert the below block to promise
functiondivide(a, b) {
 &nbsp;&nbsp; try {
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if (b === 0) {
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; thrownewError('Division by zero');
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return a / b;
 &nbsp;&nbsp; } catch (error) {
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return error.message;
 &nbsp;&nbsp; }
}





/7.convert the below block to promise
functiondivide(a, b) {
    try {
        console.log()
        if (b === 0) {
            
            thrownewError('Division by zero');
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}


 functiondivide(a,b){
     let p1 = new Promise((res,rej)=>{
         
     })
    
    
}

parent 




console.log()
functiondivide(2,3)


1. function update(){
setCounter(counter +1)
setCounter(counter +1)
setCounter(counter +1)
}
 
2. const [data,setData] =useState({name:'',gender:'',Age:''})
var response = {name:'x',gender:'x',mob:'xx',dob:'cc'}
if(!)
setData((prevdata)=>...prevdata,mob:response?.mob,dob:response?.dob)


