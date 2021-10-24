let httpApi = new HttpApi();

function register(event) {

    const name = $('#name').val();
    const email = $('#email').val();
    const password = $('#password').val();

    let user = new User(name, email, password);
    httpApi.register(user);

    event.preventDefault();
}

function login(event) {

    const email = $('#email').val();
    const password = $('#password').val();

    let user = new User('', email, password);
    httpApi.login(user);

    event.preventDefault();
}

function showItems() {
    httpApi.listItems();
}