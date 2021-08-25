$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});
// need to create endoint which will save "LIKE" data to the database
// when page is loaded read "LIKE" data.
// when do POST request send data inside the {body}
// JQUERY  ajax.POST()
// POST - to send the data
// GET  - to read the data from the DB
// PUT - to update data

// ajax.POST({
//   method: 'POST',
//   url: 'your URL.'
// })

$(document).ready(function() {

  $(".fa-heart").on('click',function(event) {
    console.log('hello');
    $(this).toggleClass('clicked');
    const itemid = $(this).parent().attr('data-id');
    console.log(itemid);
    $.ajax({
      method: 'POST',
      url: 'api/mylist',
      data: {
        itemid
      }
    })
  });
})
