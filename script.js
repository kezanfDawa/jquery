$(document). ready(function(){
  //  query selector done like that
  // Hide and show effect
  $("#one").click(function(){
    $(".p1").hide();
  })
  $("#two").click(function(){
    $(".p1").show();
  })
})

// Event
$(document).ready(function(){
  $("#hide1").click(function(){
  $(this).hide();  
});
$("#hide2").click(function(){
  $(this).hide(); 
});
});


// Fading
$(document).ready(function(){
  $("#love").click(function(){
    $(".div2").fadeToggle();
    $(".div3").fadeToggle("slow");
    $(".div4").fadeToggle(3000);
  });
});

// jQuery Effects - Sliding
$(document).ready(function(){
  $("#hii").click(function(){
    $("#hyy").slideUp("slow");
  });
}) ;



// jQuery Effects - Animation 
$(document).ready(function(){
  $(".tashi").click(function(){
    $("#animate").animate({left:"400px"});

  });

});
  
// jQuery Stop Animations

$(document).ready(function(){
  $("#seven").click(function(){
  $("#eight").slideDown(5000);
  });
  $("#six").click(function(){
    $("#eight").stop();
  });
});


// jQuery Callback Functions
$(document).ready(function(){
  $(".nine").click(function(){
    $(".ten").hide("slow", function(){
      alert("this paragraph is now shown");
    });
  });
});


// jQuery - Chaining

$(document).ready(function(){
  $("#sam").click(function(){
    $("#eleven").css("color", "red")
    .slideDown(4000)
    .slideUp(4000);
  });
});



// jQuery - Get Content and Attributes
$(document).ready(function(){
  $(".mom").click(function(){
  alert("value: " + $(".mom").val());
  });
});



//  jQuery - Set Content and Attributes

$(document).ready(function(){
  $("#poo").click(function(){
    $("#hate").attr("href", "https://www.w3schools.com/jquery/");
  });
});


// jQuery - Add Elements

$(document).ready(function(){
  $("#kezang").click(function(){
    $(".cat").before("<b>Before</b>");
  });
  $("#dawa").click(function(){
    $(".cat").after("<i>After</i>");
  });
});


// jQuery - Remove Elements

$(document).ready(function(){
  $("button").click(function(){
    $("p").remove(".test");
  });
});



// jQuery Manipulating CSS

$(document).ready(function(){
  $(".waa").click(function(){
    $("#zangmo").addClass("important blue");
  });
});


// jQuery - css() Method
$(document).ready(function(){
  $("#saa").click(function(){
    $(".sum").css("background-color","skyblue");
  });
});



// jQuery Dimension Methods

$(document).ready(function(){
  $("#peem").click(function(){
    $("#soo").width(500).height(500);
  });
});