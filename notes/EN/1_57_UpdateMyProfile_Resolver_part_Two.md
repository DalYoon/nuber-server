# 1.57 UpdateMyProfile Resolver part Two

## section.log

- define `UpdateMyProfile` resolver

## tips

### cleanNullArgs Function

- bjust for everyone's information,<br>
  between 1.57 and 1.57.1 there is a little difference, 'cleanNullArgs' function that imported above<br>
  you will define it at the lecture 1.59<br>
  this function basically does same thing with we just did in 1.57 <br>
  it just takes an object, and filters out null datas from the object , and then, returns new object that doesn't contain any null datas in it

### exmaple for filtering the datas those have null value

```javascript
const args = {
  firstName: null,
  lastName: null,
  email: "test@test.com",
  password: "changedPassword",
  profilePhoto: null,
  age: 50
};
const notNull = {};

Object.keys(args).forEach(key => {
  if (args[key] !== null) {
    notNull[key] = args[key];
  }
});

console.log(notNull);
// result
// notNull = {
//     email: "test@test.com",
//     password: "changedPassword",
//     age: 50
// }
```

### diffences between the ways to update data to Entity

```javascript
// 1.
const user = await User.findOne({id: userId});
if(user) {
  user.firstName = "newFirstName";
  user.save();
}

// 2.
User.update({id: userId}, { firstName: "newFirstName"});
```

- 1, 2 both do same thing, find the data which has userId at id column and updates firstName column to 'newFirstName'<br>
  but the code 1 calls `@BeforeUpdate`, and the code 2 doesn't<br>
  in the code above, `User` and `user` are different, `User` is User Entity itself, and `user` is a user instance from Entity<br>
  just make sure for that

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies
