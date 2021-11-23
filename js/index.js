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
/// part 2
function createItem(event) {

    const title = $('#title').val();
    const description = $('#description').val();
    const time = $('#time').val();

    if (title === '' || description === '') {
        Utils.showError('All the fields are required');
    } else {
        let item = new Item(title, description, time);

        httpApi.create(item);
    }

    event.preventDefault();
}

function showItem() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');

    httpApi.show(id);

    // httpApi.getItem(id, function(response){
    //     Utils.renderHtmlForItem(response);
    // })
}

function editItem() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');

    httpApi.editForm(id);
}

function updateItem(event) {

    const title = $('#item-title').val();
    const description = $('#item-description').val();
    const id = $('.btn-update-item').attr('data-id');
    const time = $('#item-time').val();

    const item = new Item(title, description, time);

    httpApi.update(item, id);

    event.preventDefault();
}

function deleteItem() {
    
    $(document).on('click', '.delete-btn', function (event) {

        console.log( $(event.currentTarget).attr('data-id') );
        const id = event.currentTarget.getAttribute('data-id');

        httpApi.delete(id, event.currentTarget);

        event.preventDefault();
    })
}

function commonJs() {

    var loggedIn = Utils.localStorageGet('loggedIn');

    if (parseInt(loggedIn) == 1) {
        $('.item-login-register').hide();
        $('.logout').show();
        $('.create').show();
        $('.recipe').show();
        $('.hideBtn').show();
    } else {
        $('.item-login-register').show();
        $('.logout').hide();
        $('.create').hide();
        $('.recipe').hide();
        $('.hideBtn').hide();
    }

    $('.logout').click(function (event) {
        event.preventDefault();
        Utils.localStorageRemove('loggedIn');
        Utils.redirect('home.html')
    })
}