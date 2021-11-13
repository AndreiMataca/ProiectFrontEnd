class Utils {
  static redirect(path) {
    window.location.href = path;
  }

  static renderHtmlForItems(items) {
    let html = '';

    for (let index = 0; index < items.length; index++) {
      const item = items[index]; //items[0], [1] ...

      html = html + `<div class="col" data-id="${item.id}">
            <div class="card shadow-sm">

             

              <img class="card-img-top shadow-sm" src="../img/lowRez/${item.id}.png" alt="Card image cap">

              <p class="pt-1 ps-2 mb-0 fw-bold">${item.title}</p>
  
              <div class="card-body p-2">
                             
                <textarea class="form-control p-2" id="title" rows="3"> ${item.description} </textarea>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" onclick="location.href='show.html?id=${item.id}'"class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" onclick="location.href='edit.html?id=${item.id}'" class="btn btn-sm btn-outline-secondary hideBtn">Edit</button>
                    <button type="button" onclick="deleteItem()" class="btn btn-sm btn-outline-danger delete-btn hideBtn" data-id="${item.id}">Delete</button>
                  </div>
                  <small class="text-muted"> ${item.time} mins</small>
                </div>
              </div>
            </div>
          </div>`;
    }

    $('.items-list').html(html);
  }

  static renderHtmlForItem(item) {
    let itemHtml = `<h3 class="m-4">${item.title}</h3>
                    <div class="dividerLine ms-4"></div>
                    <div class="w-25"> 
                    <p class="m-4">${item.description}</p>
                    <p class="m-4">Time: ${item.time} minutes</p>
                    </div>`
    $('.item-container').html(itemHtml);
    let itemImgHtml = `<img src="../img/${item.id}.png" class="fullScreenImage d-flex" alt="image for this recipe">`
    $('.fullScreenImage').css('background-image', `url(../img/${item.id}.png)`);
  }

  static showEditForm(item) {
    $('#item-title').val(item.title);
    $('#item-description').val(item.description);
    $('#item-time').val(item.time);
    $('.btn-update-item').attr('data-id', item.id);
  }


  static showError(message) {
    const $alertDanger = $('.alert-danger');
    $alertDanger.show();
    $alertDanger.html(message);
  }

  static localStorageSet(key, value) {
    window.localStorage.setItem(key, value);
  }
  static localStorageGet(key) {
    return window.localStorage.getItem(key);
  }
  static localStorageRemove(key) {
    window.localStorage.removeItem(key);
  }

}