function greet(name) {
    console.log('Hey',name,"good morning")
    console.log('How'+"are you doing man")
}

greet("omkar");

function sum(a,b){
    console.log(a+b);
}
sum(3,5);
sum("omkar","Kasture")
sum("omkar",3)

function Default(a,b,c=3){
    return a+b+c;
}
console.log(Default(2)) //Nan: Not a Number
console.log(Default(2,3))
console.log(Default(2,3,6))

//arrow function
const func1=(x)=>{
    console.log("im an arrow function",x);
}

func1(37);
func1(23);