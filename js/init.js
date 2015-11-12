$("#btn").click(function () {
    var x = "";
    $.get("http://productfeedtest.wandoso.com/?keyword=" + $("#search").val(), function (data, status) {
        $.each(data.items, function (index, value) {
            //$("#view").text(JSON.stringify(data.items[10]));
            x = x + "<div class='card left'><a href='" + value.click_out_link + "'><img src='" + value.main_photo_url + "'><img class='brand' src='" + value.merchant_logo_url + "'>" + "<p class='price'>" + value.price + "</p>" + "<p class='title'>" + value.title + "</p>" + "</div>";
            $("#view").html(x);
        });
    });
});