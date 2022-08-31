class Person {
  constructor(fullName) {
    this.fullName = fullName;
    this.sleepMood = "";
    this.healthRate = "";
    this.money = 20;
  }

  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "Happy";
      console.log(this.sleepMood);
    } else if (hours >= 7) {
      this.sleepMood = "Lazy";
      console.log(this.sleepMood);
    } else if (hours <= 7) {
      this.sleepMood = "Tired";
      console.log(this.sleepMood);
    }
  }
  eat(meals) {
    switch (meals) {
      case (meals = 3):
        this.healthRate = "100 Health Rate";
        console.log(this.healthRate);
        break;
      case (meals = 2):
        this.healthRate = "75 Health Rate";
        console.log(this.healthRate);
        break;
      case (meals = 1):
        this.healthRate = "50 Health Rate";
        console.log(this.healthRate);
        break;
      default:
        console.log("Error input");
    }
  }
  buy(items) {
    if ((items = 1)) {
      this.money -= 10;
      console.log(this.money);
    }
  }
}
// const ahmed = new Person("ahmed");
// console.log(ahmed);
// ahmed.sleep(10);
// ahmed.eat(3);
// ahmed.buy(1);
class Employee extends Person {
  #eSalary;
  constructor(eName, eEmail) {
    super(eName);

    this.eEmail = eEmail;
    this.eWorkMood = "";
    this.eIsManager = "";
    this.#eSalary = 0;
  }
  work(hours) {
    if (hours === 8) {
      this.eWorkMood = "Happy";
      console.log(this.eWorkMood);
    } else if (hours <= 8) {
      this.eWorkMood = "Lazy";
      console.log(this.eWorkMood);
    } else if (hours >= 8) {
      this.eWorkMood = "Tired";
      console.log(this.eWorkMood);
    }
  }
  get eSalary() {
    return this.#eSalary;
  }
  set eSalary(value) {
    if (value >= 1000) {
      this.#eSalary = value;
      return this.#eSalary;
    } else if (value < 1000) {
      let message = "The Salary Must Be Greater Than Or Equal to 1000";
      return console.log(message);
    }
  }
}
// const ahmed = new Employee();
// console.log(ahmed);
// ahmed.sleep(10);
// ahmed.eat(3);
// ahmed.salary = 1000;
// ahmed.buy(1);
class Office {
  constructor(oName) {
    this.oName = oName;
    // this.oEmployees = oEmployees;
    this.empData = [];
    this.emp = new Employee();
  }
  hire(emp) {
    this.empData.push({
      name: emp.eName,
      email: emp.eEmail,
      workMood: emp.eWorkMood,
      isManager: emp.eIsManager,
      healthRate: emp.healthRate,
      sleepMood: emp.sleepMood,
      salary: emp.eSalary,
    });
    let conf = "User Is added";
    return conf;
  }
  getAllEmployees() {
    for (let i = 0; i < this.empData.length; i++) {
      let oName = this.empData[i].name;
      let oEmail = this.empData[i].email;
      let oWorkMood = this.empData[i].workMood;
      let oHealthRate = this.empData[i].healthRate;
      let oSleep = this.empData[i].sleepMood;
      let oIsManager = this.empData[i].isManager;
      var message = `
    The Name Is :${oName}
    The Email Is ${oEmail}
    The Work Mood Is : ${oWorkMood}
    The Health Rate Is : ${oHealthRate}
    The Sleep Mood Is : ${oSleep}
    Is He Manager : ${oIsManager}
    `;
      console.log(message);
    }
  }
  getEmployee(email) {
    // const found = this.empData.filter((data) => {
    //   if (data.email === email && data.isManager === true) {
    //     // let fName = data.name;
    //     // let fEmail = data.email;
    //     let message = `
    //     The Name Is :        ${data.name}
    //     The Email is :       ${data.email}
    //     The Work Mood Is :   ${data.workMood}
    //     The Health Rate Is : ${data.healthRate}
    //     The Sleep Mood Is :  ${data.sleepMood}
    //     Is He A Manager :    ${data.isManager}
    //     `;
    //     console.log(message);
    //   } else if (data.email === email && data.isManager === false) {
    //     let message = `
    //     The Name Is :        ${data.name}
    //     The Email is :       ${data.email}
    //     The Work Mood Is :   ${data.workMood}
    //     The Health Rate Is : ${data.healthRate}
    //     The Sleep Mood Is :  ${data.sleepMood}
    //     The Salary Is :      ${data.salary}
    //     Is He A Manager :    ${data.isManager}
    //     `;
    //     console.log(message);
    //   } else {
    //     // console.log("The Name Is Not Found");
    //   }
    // });

    // console.log(found);
    // console.log(email);
    // console.log(this.empData);
    for (let i = 0; i < this.empData.length; i++) {
      if (this.empData[i].email === email && this.empData[i].isManager === "true") {
        let gName = this.empData[i].name;
        let gEmail = this.empData[i].email;
        let gWorkMood = this.empData[i].workMood;
        let gHealthRate = this.empData[i].healthRate;
        let gSleap = this.empData[i].sleep;
        let gIsManager = this.empData[i].isManager;
        let gMessage = `
        The Name Is :${gName}
        The Email Is ${gEmail}
        The Work Mood Is : ${gWorkMood}
        The Health Rate Is : ${gHealthRate}
        The Sleep Mood Is : ${gSleap}
        Is He Manager : ${gIsManager}
        `;
        console.log(gMessage);
        return;
      } else if (this.empData[i].email === email && this.empData[i].isManager === "false") {
        let n = this.empData[i].name;
        let em = this.empData[i].email;
        let wm = this.empData[i].workMood;
        let hr = this.empData[i].healthRate;
        let sl = this.empData[i].sleep;
        let im = this.empData[i].isManager;
        let s = this.empData[i].salary;
        let message2 = `
        The Name Is :${n}
        The Email Is ${em}
        The Work Mood Is : ${wm}
        The Health Rate Is : ${hr}
        The Sleep Mood Is : ${sl}
        Is He Manager : ${im}
        The Salary Is : ${s}
        `;
        console.log(message2);
        return;
      }
    }
    let error = "Not Found";
    return error;
  }
  fire(email) {
    for (let i = 0; i < this.empData.length; i++) {
      if (this.empData[i].email === email) {
        this.empData.splice(i, 1);
        let remove = "the User Is Removed";
        return remove;
      }
    }
    let error = "Not Found";
    return error;
  }
}
//=========================================================================================
// const ahmed = new Employee();
// ahmed.eName = "ahmed";
// ahmed.eEmail = "a@gmail.com";
// ahmed.eIsManager = false;
// ahmed.eat(3);
// ahmed.sleep(7);
// ahmed.work(8);
// ahmed.eSalary = 1000;
// console.log(ahmed);
// console.log("================================================");
// const mohammed = new Employee();
// mohammed.eName = "mohammed";
// mohammed.eEmail = "m@gmail.com";
// mohammed.eIsManager = true;
// mohammed.eat(3);
// mohammed.sleep(7);
// mohammed.work(8);
// mohammed.eSalary = 1000;
// console.log(mohammed);
// console.log("================================================");
// const hussien = new Employee();
// hussien.eName = "hussien";
// hussien.eEmail = "h@gmail.com";
// hussien.eIsManager = false;
// hussien.eat(3);
// hussien.sleep(7);
// hussien.work(8);
// hussien.eSalary = 1000;
// console.log(hussien);
// console.log("================================================");
// const add = new Office();
// console.log(add.hire(ahmed));
// console.log(add.hire(mohammed));
// console.log(add.hire(hussien));
// console.log("================================================");
// add.getEmployee("a@gmail.comf");
// console.log("================================================");
// add.getEmployee("m@gmail.com");
// // console.log(typeof "m@gmail.com");
// console.log("================================================");
// // add.getAllEmployees();
// console.log("================================================");
// add.getEmployee("h@gmail.com");
//==================================================================================================

const employee = new Employee();
const empOffice = new Office();
let stop = true;
lable: while (stop) {
  let start = prompt("Enter Your Operation (add-delete-search-show)");
  if (start === "add") {
    let name = prompt("Enter Your Name:");
    employee.eName = name;
    let email = prompt("Enter Your Email:");
    employee.eEmail = email;
    let workMood = prompt("How Many Houres Do You Work?");
    employee.work(Number(workMood));
    let sleepMood = prompt("How Many Houres Do You Sleep?");
    employee.sleep(Number(sleepMood));
    let healthRate = prompt("How Many Meals Do You Eat?");
    employee.eat(Number(healthRate));
    let isManager = prompt("Are You A Manager if true print true else print false");
    employee.eIsManager = isManager;
    let salary = prompt("What Is Your Salary?");
    employee.eSalary = salary;
    let ensure = confirm("Are You Sure From Your Entered Data?");
    if (ensure) {
      console.log(empOffice.hire(employee));
      alert("You are hired");
    } else {
      alert("Thanks For Using This Site");
    }
    let answer = confirm("Do You Need To Do Any Operation?");
    if (answer) {
      continue lable;
    } else {
      stop = false;
    }
  } else if (start === "show") {
    empOffice.getAllEmployees();
    let answer = confirm("Do You Need To Do Any Operation?");
    if (answer) {
      continue lable;
    } else {
      stop = false;
    }
  } else if (start === "delete") {
    let deletedName = prompt("Enter The User Email That You Need To Delete");
    console.log(empOffice.fire(deletedName));
  } else if (start === "search") {
    let findEmp = prompt("Enter The User Email That You Need To Find");
    // console.log(typeof findEmp);
    empOffice.getEmployee(findEmp);
    // console.log(empOffice.getEmployee(findEmp));
    let answer = confirm("Do You Need To Do Any Operation?");
    if (answer) {
      continue lable;
    } else {
      stop = false;
    }
  }
}
