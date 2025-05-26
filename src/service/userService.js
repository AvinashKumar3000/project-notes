class UserService {
  constructor() {
    let data = localStorage.getItem('db');
    if(data===null) { // if db not present in localstorage
        data = {
            users:[]
        };
        localStorage.setItem('db',JSON.stringify(data));
        this.db = data;
    }else {           // already db present in ls
        this.db = JSON.parse(data);
    }
  }
  addUser(email, password) {
    if (this.isUserExists(email)) {
      throw new Error("user already exists");
    }
    this.db.users.push({ email, password });
    localStorage.removeItem('db');
    localStorage.setItem('db',JSON.stringify(this.db));
  }
  isUserExists(email) {
    const result = this.db.users.find((obj) => obj.email === email);
    return result !== undefined ? true : false;
  }
  authenticate(email, password) {
    const user = this.db.users.find((obj) => obj.email === email);
    if(user === undefined){
        throw new Error("wrong email");
    }
    if(user.password !== password) {
        throw new Error('wrong password');
    }
  }
}

const userService = new UserService();
export default userService;