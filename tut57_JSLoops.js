//for loop
for (let i = 0; i < 100; i++) {
    console.log(i);
}

let obj={
    name:"omkar",
    class:"SYD",
    clg:"viit"
}
for (const key in obj) {
        const element = obj[key];
        console.log(key,element);
}

for (const it of "omkar") {
    console.log(it);
}


//while loop
let i=0;
while(i<6){
    console.log(i)
    i++
}

//do-while loop
i=10
do {
   console.log(i);
   i++; 
} while (i<6);