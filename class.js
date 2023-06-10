function Person(name,email){
    this.name=name,
    this.email=email
}

var x=new Person('Farhan','Shafiq@gmail.com')
var y=new Person('Mishu','Mishu@gmail.com')
var people=[x,y]
console.log(people)


people.forEach((p)=>{
    console.log(`name :` + p.name)
})

