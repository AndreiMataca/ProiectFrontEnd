function register(event){

event.preventDefault();

const nume = $('#name').val()
const mail = $('#email').val()
const parola = $('#password').val()

user = new User(name,email,password)

let httpApi = new HttpApi();

httpApi.register();

}