//Q. No.32: Answer
let users_list2 = [];

if (users_list2.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < users_list2.length; i++) {
    if (i === 0) {
      console.log("The users are:");
    }
    console.log(users_list2[i]);
  }
}

users_list2 = []; // removing all usernames

if (users_list2.length === 0) {
  console.log("We need to find some users!");
}
