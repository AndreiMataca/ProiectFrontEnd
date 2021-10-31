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
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>
              <text x="50%" y="50%" fill="#eceeef" dy=".3em">${item.title}</text></svg>
  
              <div class="card-body">
                             
                <textarea class="form-control" id="title" rows="3"> ${item.description} </textarea>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" onclick="location.href='edit.html?id=${item.id}'" class="btn btn-sm btn-outline-secondary">Edit</button>
                    <button type="button" onclick="deleteItem()" class="btn btn-sm btn-outline-danger delete-btn" data-id="${item.id}">Delete</button>
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
    let itemHtml = `<div class="card card-default">
                          <div class="card-header">${item.title}</div>
                          <div class="card-body">
                              <!-- <img src="../img/${item.id}.jpg" class="img-fluid" alt="Responsive image"> -->
                              <p class="card-text book-description">${item.description}</p>
                          </div>
                          </div>
                          <a href="edit.html?id=${item.id}" class="btn btn-info btn-sm my-2 edit-link">Edit</a>`
    $('.item-container').html(itemHtml);
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

}