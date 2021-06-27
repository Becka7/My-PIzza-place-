function checkOut(){
    var name=document.getElementById("names").value;
    var size=(document.getElementById("size").value);
    var crust= (document.getElementById("crusty").value);
    var toppings=(document.getElementById("tops").value);
    var number=(document.getElementById("pizzas").value);
    

 
    if(size==="Small"){
         var prize=600;
    }else if(size==="Large"){
        var prize=1200;
    }else if(size==="Medium"){
        var prize=800;
    }
    

    if(toppings==="Hawaian"){
        var toppingPrice=300;
    }else if(toppings==="Chicken Periperi"){
        var toppingPrice=250;
    }else if(toppings==="BBQ steak"){
        var toppingPrice=500;
    }else if(toppings==="Margharrita"){
        var toppingPrice=150;
    }else if(toppings==="Chicken tikka"){
        var toppingPrice=400;
    }

    var total= ((prize+toppingPrice)*number);
    

    document.getElementById("namy").innerHTML="Hello"+" "+ name +" "+"Your order is...";
    document.getElementById("myOrder").innerHTML=number+" "+size+" "+toppings;
    document.getElementById("oderCheck").innerHTML=total+"/=";
   
    
}


$(document).ready(function(){
    
    $('#deliver').click(function(){
        prompt("enter your location");
        alert(name+ " Your order is on the way ,your delivery fee is 60ksh")
    });

    $('#pick').click(function(){
        alert(" Your order will be ready for pick up in 30 mins");
    });

    
        $("#defa").click(function(event){
          event.preventDefault();
          $('#orderPizza').hide();
          $('#check').show();
         
});

    $('#edit').click(function(){
        $('#orderPizza').show();
    })


    });
