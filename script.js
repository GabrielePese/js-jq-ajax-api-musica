// GOAL:
// Attraverso una chiamata ajax all'Api di boolean avremo a
// disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock,
// metal e jazz. In base a cosa scegliamo nella select vedremo i
// corrispondenti cd.
// Chiamata:
// https://flynn.boolean.careers/exercises/api/array/music

$(document).ready(function(){

  $.ajax({

    url:"https://flynn.boolean.careers/exercises/api/array/music",
    method:"GET",
    success: function (data){
      console.log(data);

      var success = data["success"];
      var dischi = data["response"];
      console.log(dischi);

      var template = $("#cd-script").html();
      var compiled = Handlebars.compile(template);
      var target = $("#cds-container");

      for (var i = 0; i < dischi.length; i++) {
        var disco = dischi[i]
        var discoHTML = compiled(disco);
        target.append(discoHTML)
      }

      $("select.genere").change(function(){
          var selectedMusic= $(this).children("option:selected").val();
          alert("You have selected the music - " + selectedMusic);

        
          })


    },
    error:function (){
      console.log("error");
    }


})
})
