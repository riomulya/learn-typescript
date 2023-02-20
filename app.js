var Auth;
(function (Auth) {
    Auth[Auth["USER"] = 0] = "USER";
    Auth[Auth["ADMIN"] = 1] = "ADMIN";
    Auth[Auth["AUTHOR"] = 2] = "AUTHOR";
})(Auth || (Auth = {}));
var person = {
    name: "Rio",
    age: 20,
    hobbies: ["swimming", "programming"],
    role: ["mahasiswa", "dosen"],
    auth: Auth.AUTHOR
};
console.log(person.age);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.charAt(0).toUpperCase() + hobby.slice(1));
}
console.log(person.role[1]);
console.log(person.auth);
