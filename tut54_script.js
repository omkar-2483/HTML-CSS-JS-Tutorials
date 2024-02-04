alert("Hello world");

console.log("this content is displayed in console. open inspect-->console to see");

var a=prompt("Enter a number")
console.log("You Entered: "+a)

var isTrue=confirm("Are you sure you want to leave?")
if (isTrue){
    console.log("leaving....")
}else{
    console.log("Not leaving....")
}

document.title="Hey I am good"  //change title of page
document.body.style.backgroundColor="black" //change background color of page
//above line of code adds inline css on body