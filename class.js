// function Person(name,email){
//     this.name=name,
//     this.email=email
// }

// var x=new Person('Farhan','Shafiq@gmail.com')
// var y=new Person('Mishu','Mishu@gmail.com')
// var people=[x,y]
// console.log(people)


// people.forEach((p)=>{
//     console.log(`name :` + p.name)
// })


class Person{
    constructor(name,email,dob,phone){
        this.name=name;
        this.email=email;
        this.dob=dob;
        this.phone=phone
    }

      getPersonDetail(name,email,dob,phone){
         console.log (`Hello,  I am ${this.name}.
         My email is ${this.email}.
         Date of Birth ${this.dob}.
         Phone ${this.phone}`)
      }
}


const persondetail= new Person('Farhan',"farhan10237@gmail.com",'8/8/1963','013695244852')
console.log(persondetail)
persondetail.getPersonDetail()