class HttpApi{

USERS_API = "https://615f1fa9af36590017204875.mockapi.io/users";

    register(user){

     $.ajax({
     url:this.USERS_API,
     type:'POST',
     dataType:'json',
     data:user
 }).done(function(response){
     if(response.id)
     $('user-success').show();
 })
}
}