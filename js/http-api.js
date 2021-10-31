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
            url: this.ITEMS_API + '/' + id,   //https://615f1d01af36590017204852.mockapi.io/items/:id -> https://615f1d01af36590017204852.mockapi.io/items/10
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
                Utils.redirect('recipes.html');
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

            // target.parentElement.remove();

            //    0       1      2
            // [ 'li-1','li-2','li-3' ]

            // $('.list-group-item-success').each(function(index, item){
            //     if ( $(item).attr('data-id') === id ) {
            //         $(item).remove();
            //     }
            // })
        })
    }


}