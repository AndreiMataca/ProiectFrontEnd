class HttpApi {

    USERS_API = "https://615f1fa9af36590017204875.mockapi.io/users";
    ITEMS_API = "https://615f1fa9af36590017204875.mockapi.io/recipe";


    register(user) {
        $.ajax({
            url: this.USERS_API,
            type: 'POST',
            dataType: 'json',
            data: user
        }).done(function (response) {
            if (response.id) {
                $('.user-success').show();
            }
        })
    }

    login(user) {
        $.ajax({
            url: `${this.USERS_API}?email=${user.email}`,     //https://615f1d01af36590017204852.mockapi.io/users?email=dragos@mail.com"
            type: 'GET',
            dataType: 'json'
        }).done(function (response) {

            if (response.length === 0) {
                Utils.showError('These credentials are wrong');
                return;
            }

            console.log(response);
            let userFromApi = response[0];
            if (user.password === userFromApi.password) {
                Utils.redirect('list.html');
                //set user as logged in
            } else {
                Utils.showError('These credentials are wrong');
            }
        })
    }


    listItems() {
        $.ajax({
            url: this.ITEMS_API,
            type: 'GET',
            dataType: 'json'
        }).done(function (response) {
            if (response && response.length !== 0 ) {
                Utils.renderHtmlForItems(response);
            }
        })
    }


}