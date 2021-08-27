// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });
// });


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

  $(".deletecar").on('click',function(event) {
    event.preventDefault();
    const ele=$(this).parent().parent().parent();
    const itemid = $(this).parent().attr('data-id');
    console.log('delete', itemid);
    $.ajax({
      method: 'POST',
      url: '/api/showcars/delete',
      data: {
        itemid
      },
      success: function(response){
        alert('Delete');
        ele.remove();
        //window.location = '/';
      },
      error: function(err){
          alert('You dont have access to delete the item.Please Login/ask for permissions ');
          console.log(err);
      }
    })

  });


  // $(".issold").on('click',function(event) {
  $('.issold').click(function(event){
    //console.log('---event', event);
    if(!event){
      return;
    }
    event.preventDefault();
    // console.log(sol);
    const itemid = $(this).parent().attr('data-id');
    console.log('sold', itemid);
    const sol = $(this).siblings('.isunsold').toggleClass('issold');
    $(this).remove();
    $.ajax({
      method: 'POST',
      url: '/api/showcars/issold',
      data: {
        itemid
      },
      success: function(response){

      },
      error: function(err){
          alert('You dont have access to mark it as sold');
          console.log(err);
      }
    });
  });

});
