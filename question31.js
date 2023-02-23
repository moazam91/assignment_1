//Q. No.31: Answer

let user_name_list = ["Admin","Ali","Ahmed","Kabir","Mohsin"];
for (let i = 0; i < user_name_list.length; i++) {
      if (user_name_list[i]==="Admin") {
          console.log("Hello admin, would you like to see a status report?");
      } else {
          console.log("Hello",user_name_list[i],",","thank you for logging in again.");
      }
  
}
