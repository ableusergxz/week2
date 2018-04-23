require(["jquery","../comment/template"],function($,template){
    $.ajax({
        url:'/api/get_data_data',
        type:"get",
        dataType:"json",
        success:function(data){
            console.log(data);
        }

    })
})