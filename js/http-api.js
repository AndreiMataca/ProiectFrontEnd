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
            url: `${this.USERS_API}?email=${user.email}`,  
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
                Utils.localStorageSet('loggedIn', 1);
                Utils.redirect('recipes.html');
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

    create(item) {
        $.ajax({
            url: this.ITEMS_API,
            type: 'POST',
            dataType: 'json',
            data: item
        }).done(function(response){
            Utils.redirect('recipes.html');
        })
    }

    show(id) {
        $.ajax({
            url: this.ITEMS_API + '/' + id,   
            type: 'GET',
            dataType: 'json'
        }).done(function(response){
            if (response.id) {
                Utils.renderHtmlForItem(response);
            }
        })
    }

    editForm(id) {
        $.ajax({
            url: this.ITEMS_API + '/' + id,
            type: 'GET',
            dataType: 'json'
        }).done(function(response){
            if (response.id) {
                Utils.showEditForm(response);
            }
        })
    }

    update(item, id) {
        $.ajax({
            url: `${this.ITEMS_API}/${id}`,
            type: 'PUT',
            dataType: 'json',
            data: item
        }).done(function(response){
            if (response.id) {
                Utils.redirect('home.html');
            }
        })
    }

    delete(id, target){
        $.ajax({
            url: `${this.ITEMS_API}/${id}`,
            type: 'DELETE',
            dataType: 'json'
        }).done(function(response){

            $(`[data-id="${id}"]`).remove();
        })
    }


}