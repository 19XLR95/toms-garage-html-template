function getPadding()
{
  var windowWidth = $(window).width();
  
  if(windowWidth < 512)
  {
    return "20px";
  }
  else if(512 <= windowWidth && windowWidth < 640)
  {
    return "30px";
  }
  else if(640 <= windowWidth && windowWidth < 768)
  {
    return "40px";
  }
  else if(768 <= windowWidth && windowWidth < 896)
  {
    return "50px";
  }
  else if(896 <= windowWidth)
  {
    return "60px";
  }
}

function openSideBarMenu()
{
  $("#sideBarMenu").sidebar('setting', 'transition', 'overlay').sidebar("toggle");
}

$(window).scroll(
  function()
  {
    var scrollHeight = $(window).scrollTop();

    $("#topBarMenu").css("background-color", "rgba(42, 42, 42, " + (scrollHeight / 200) + ")");
    
    if(scrollHeight > 100)
    {
      $("#topBarMenu").animate(
        {
          paddingTop: "7px"
        },
        {
          duration: 300,
          queue: false
        }
      );
    }
    else
    {
      $("#topBarMenu").animate(
        {
          paddingTop: getPadding()
        },
        {
          duration: 300,
          queue: false
        }
      );
    }
  }
);

if($(window).width() >= 1024)
{
  $("#sideBarMenuBtn").addClass("big");
}

if($(window).width() < 512)
{
  $("#menuBtnText").text("");
}

$(window).resize(
  function()
  {
    if($(window).width() >= 1024) 
    {
      if (!$("#sideBarMenuBtn").hasClass("big")) 
      {
        $("#sideBarMenuBtn").addClass("big");
      }
    }
    else 
    {
      if ($("#sideBarMenuBtn").hasClass("big")) 
      {
        $("#sideBarMenuBtn").removeClass("big");
      }
    }

    if($(window).width() < 512)
    {
      $("#menuBtnText").text("");
    }
    else
    {
      $("#menuBtnText").text("Menu");
    }
  }
);

$("#appointmentType").dropdown();
