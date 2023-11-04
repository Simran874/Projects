/* let marks_class_12 = [95, 83, 62, 86, false, "Not Present"]
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])

// ".length property"
console.log("The length of marks of class 12 is  : ", marks_class_12.length)
marks_class_12[6] = 89  //Adding new value to an array 
marks_class_12[0] = 96 //Changing the value of an array
console.log(marks_class_12[6])
console.log(marks_class_12[0])
console.log(typeof marks_class_12) */

//Array Method
/* let num = [1,2,34,4]
let b = num.toString()  //b is now a string
console.log(b)
let c= num.join("_")
console.log(c)
console.log(typeof c)
console.log(typeof b)
/* let d = num.pop() //return the pops element mtlb jo element nikla h usse modtly last element hi hota h
console.log(d)
console.log(num)
let e = num.push(5) // returns new array length
console.log(num,e)
let f =num.shift() // removes first element of an array
console.log(f , num)
let g =num.unshift(76)
console.log(g)
console.log(num)

console.log(num.length)
delete num[0]
console.log(num)   // array ki length change nhi hogi 
console.log(num.length)

let a1 = [1,3,4,12]
let a2 = [55,27,5,2,14]
let newArray = a1.concat(a2)
console.log(newArray)
console.log(a1)
console.log(a2) 

//sort method
let compare = (a,b)=>{
    return a-b;
}
a2.sort(compare)  //sort as alphabet
//a2.reverse()
console.log(a2) */

//splice return delete the item and modifies the array
let s = [55,27,5,2,14,21,1028,9]
/* let deletedValues= s.splice(2,3,43,34,23)
console.log(deletedValues)
console.log(s)
console.log(typeof deletedValues) */

//slice creates a new array but does not modifies the array
//let newNum = s.slice(3)
let newNum = s.slice(3,5)
console.log(newNum)