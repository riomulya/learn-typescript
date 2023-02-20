enum Auth {USER,ADMIN,AUTHOR}

const person:{
    name:string;
    age:number;
    hobbies:string[],
    role:[string,string]
    auth:number;
}={
    name:"Rio",
    age:20,
    hobbies:["swimming","programming"],
    role:["mahasiswa","dosen"],
    auth:Auth.AUTHOR
}

console.log(person.age)

for (const hobby of person.hobbies) {
    console.log(hobby.charAt(0).toUpperCase()+hobby.slice(1))
}

console.log(person.role[1])
console.log(person.auth)