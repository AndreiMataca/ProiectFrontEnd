class Utils {
    static redirect(path) {
        window.location.href = path;
    }

    static renderHtmlForItems(items) {
        let html = '';

        for (let index = 0; index < items.length; index++) {
            const item = items[index]; //items[0], [1] ...

            html = html + `<div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">${item.title}</text></svg>
  
              <div class="card-body">
                <p class="card-text">${item.descriptions}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted"> ${item.time} mins</small>
                </div>
              </div>
            </div>
          </div>`;
        }

        $('.items-list').html( html );
    }

    static showError(message) {
        const $alertDanger = $('.alert-danger');
        $alertDanger.show();
        $alertDanger.html(message);
    }

}