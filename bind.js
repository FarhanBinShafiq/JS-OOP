const Person={
    fName:'Farhan',
    lName:'Shafiq',
    getFullName:function(){
        console.log(this.fName+'  ' + this.lName)
    }
}

const member={
    fName:"Mishu",
    lName:'Bishu'
}

const result=Person.getFullName.bind(member)
const x=result()


Person.getFullName();