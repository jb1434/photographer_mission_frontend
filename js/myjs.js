function loadUserImage(){
    $.ajax({
        url: "http://localhost:8000/api/load_image/test1@gmail.com",
        type: "GET",
        async: false,
        success: function(response) {
            let tmp_val_1 = '';
            response.forEach((element, index) => {
                let tmp_id = "custom-img-"+index;
                tmp_val_1 +=   '<div class="card">';
                tmp_val_1 +=   '<a href="#" onclick="imgClick(\'' + tmp_id + '\')">';
                tmp_val_1 +=   '<img class="card-img-top probootstrap-animate" id="custom-img-'+index+'" src="'+element+'" alt="Card image cap">';
                tmp_val_1 +=   '</a></div>';
            });
            $('#appender').append(tmp_val_1);
        },error: function(xhr, status, error) {
            console.error("Error:", error);
        }
    });
}

function imgClick(id){
    $("#exampleModal").modal('show');

    $('#targetImage img').remove();

    const src = $('#' + id).attr('src');
    const alt = $('#' + id).attr('alt');

    $('#targetImage').append(
        $('<img>', {
            src: src,
            alt: alt,
            class: 'card-img-top' // optional, same styling
        })
    );
}

loadUserImage();