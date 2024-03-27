// let num = -5;
// if(num<0){
//     console.log("number is -ve");
// }else{
//     console.log("number is +ve");
// }

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// if(num1<num2 && num3<num2){
//     console.log(`${num2} is greater`);
// }else if(num1<num3 && num1<num3){
//     console.log(`${num3} is greater`);
// }else{
//     console.log(`${num1} is greater`);
// }


// let num4=4;
// isPrime=true;
// for(let i=2; i<=num4; i++){
//     if(num4===0){
//         isPrime=false;
//         break;    
//     }

// }

// if( isPrime && num4 > 1){
//     console.log("prime no.")
// }else{
//     console.log("no prime  no.")
// }

// let no=91515;
// let div=false;
// for (let i=1; i<=9; i++){
//     if(no%i===0){
//         div=true;
//         break;
//     }
// }

// if(div===true){
//     console.log("this is divide by other number")
// }else{
//     console.log("this is !!divide by other number")
// }
// console.log("I am learning js write now i will message you later TC")

// let line= "Who Am I? shey";
// console.log(line);
// let line2=line.split("").reverse("").join("");
// console.log(line2);

// let yr =2007;
// let leapYr= (yr % 4 === 0) && ((yr%100 !== 0) || (yr % 400 === 0));
// if(leapYr === true){
//     console.log(`${yr} is leap yr `);
// }else{
//     console.log(`${yr} is not leap yr `);
// }

// let str="Shey";
// let vl="aeiou";
// let vowels="false";

// for(let i=0;i<str.length;i++){
//     if(vl.includes(str[i])){
//         vowels=true;
//         break;
//     }
// }

// if(vowels=true){
//     console.log("Shey contains vowels")
// }else{
//     console.log("false");
// }


// function perfectNumber(number){
//     let sum = 0 ;
//     for(let i=1; i<number;i++){
//         if(number%i===0){
//             sum+=i;
//         }
//     }
//     return sum;
// }

// let number=28;
// if(perfectNumber(number)===number){
//     console.log(`${number} is a perfect number.`)
// }else{
//     console.log(`${number} is not a perfect number.`)
// }


function perfectNumber(number){
    let sum=0;
    for(let i=1; i<number;i++){
        if(number%i===0){
sum+=i;
        }
    }
    return sum;
}

let number=208;
if(perfectNumber(number)===number){
    console.log(`${number} is a perfect number.`)
}else{
    console.log(`${number} is not a perfect number.`)
}



function perfectRoots(a,b,c){
    let underRoot=b*b-(4*a*c);
    let roots=[];

if(underRoot>0){
    let root1= (-b+Math.sqrt(underRoot))/(2*a);
    let root2= (-b-Math.sqrt(underRoot))/(2*a);
roots.push( root1,root2);
}else if (underRoot===0){
    let root=-b/(2*a);

    roots.push(root);
}

return roots;

}

let a = 1;
let b = -3;
let c = 3;

let roots = perfectRoots(a, b, c);
console.log("Roots:", roots);




function isPangram(str){
    let leter = new Set();
    for (let char of str){
        let lowerChar=char.toLowerCase();
        if(/[a-z]/.test(lowerChar)){
            leter.add(lowerChar);
        }
    } 
    return leter.size===26;
}

let sentence = "The quick brown fox jumps over the lazy dog";
if (isPangram(sentence)) {
    console.log("The sentence is a pangram.");
} else {
    console.log("The sentence is not a pangram.");
}


