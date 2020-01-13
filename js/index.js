jQuery(document).ready(function($) {
  AOS.init({
    duration: 600,
    once: true
  });
  $(".card_carousel").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "40px"
        }
      }
    ]
  });
  $(".testimonial_carousel").slick({
    slidesToShow: 1,
    dots: true,
    speed: 1000,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $("#vidBox").VideoPopUp({
    backgroundColor: "#17212a",
    opener: "triggerVideo",
    maxweight: "640",
    idvideo: "youtubeVideo"
  });
  $("#enquiryFrom").validate({
    rules: {
      uname: "required",
      companyname: "required",
      serviceType: "required",
      mobileNumeber: {
        required: true,
        number: true
      },
      email: {
        required: true,
        email: true
      }
    },
    submitHandler: function(form, e) {
      var first_name = $("#uname").val();
      var companyname = $("#companyname").val();
      var serviceType = $("#serviceType").val();
      var mobileNumeber = $("#mobileNumeber").val();
      var email = $("#email").val();
      var pol = $("#pol").val();
      var pod = $("#pod").val();
      var dimensions = $("#dimensions").val();
      var cweight = $("#cweight").val();

      var settings = {
        async: true,
        crossDomain: true,
        url: "https://me.psychx86.com/allcargo/email-me.php",
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        },
        data: {
          first_name: first_name,
          companyname: companyname,
          serviceType: serviceType,
          mobileNumeber: mobileNumeber,
          pol: pol,
          pod: pod,
          dimensions: dimensions,
          email: email,
          cweight: cweight
        }
      };
      $.ajax(settings).done(function(response) {
        $("#successMsgModal").modal("show");
        $("#enquiryFrom").trigger("reset");
      });
      return false;
    }
  });
});
