/**
 * Created by Marysia on 20.11.15.
 */
document.addEventListener('DOMContentLoaded', function() {


    //------------------------------------HEADER, GREY SECTION, ABOUT US, OUR SKILLS - PHONE------------------------------------

    var headerNav = $(".header-nav");
    var headerNavIcons = headerNav.children();
    var topNav = $(".topnav");
    var greyDivs = $(".grey");
    var mockup = $(".mockup");
    var aboutUsText = $(".aboutText");
    var skillsDiv = $(".skillDiv");
    var counter = $(".counter");
    var formInputs = $(".formInputs");
    var adress = $(".adress");

    //console.log(headerNavIcons);

    function changeGrid() {

        if ($(window).width() < 700) {
            $(headerNavIcons).removeClass("col-2").addClass("col-6");
            $(topNav).removeClass("topnav").addClass("col-6");
            $(greyDivs).removeClass("col-3").addClass("col-6");
            $(mockup).removeClass("col-7").addClass("col-12");
            $(aboutUsText).removeClass("col-5").addClass("col-12");
            $(skillsDiv).removeClass("col-6").addClass("col-12");
            $(counter).removeClass("col-3").addClass("col-6");
            $(formInputs).removeClass("col-6").addClass("col-12");
            $(adress).removeClass("col-6").addClass("col-12");
        }
    }

    changeGrid();






    //------------------------------------STICKY MENU------------------------------------

    var stickyNavTop = $('.sticky_menu').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.sticky_menu').addClass('sticky');
            $('.mobileArrow').show();
        } else {
            $('.sticky_menu').removeClass('sticky');
            $('.mobileArrow').hide();
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

    //------------------------------------MOBILE MENU------------------------------------


    //------------------------------------HAMBURGER MENU------------------------------------

    function setMenu() {

        $('.cross').hide();
        $('.hamburger').hide();


        if ($(window).width() < 1000) {
            $('.sticky_list').hide();
            $('.hamburger').show();
            $('.mobileMenu').hide();
            $('.stickylogo').hide();


        } else {
            $('.sticky_list').show();
            $('.hamburger').hide();
            $('.mobileMenu').hide();
            $('.stickylogo').show();
        }
    }

    setMenu();

    $(window).on('resize', function() {
        setMenu();
    });


    function setClick() {
        $('.hamburger').on('click', function() {
            $('.mobileMenu').show();
            $('.cross').show();
            $(this).hide();
        });
        $('.cross').on('click', function() {
            $('.mobileMenu').hide();
            $('.hamburger').show();
            $(this).hide();

        });
    }

    setMenu();
    setClick();


//------------------------------------ABOUT US GALLERY------------------------------------

    var allPeople = $(".peopleList li");
    var nextPerson = $("#nextPerson");
    var prevPerson = $("#prevPerson");
    var currentPerson = 1;
    var peopleList = $(".peopleList");
    var personId = $(allPeople[currentPerson]);

    personId.removeClass('opacity');

    function changeDisplay() {
        if ($(window).width() < 700) {
            personId.removeClass('visibility');
        } else {
            allPeople.removeClass('visibility');
        }
    }
    changeDisplay();

    nextPerson.on("click", function(){
        //for screens:
        if ($(window).width() > 700) {
            currentPerson++;

            if(currentPerson >= allPeople.length) {
                currentPerson = 0;
            }
            $(allPeople).addClass('opacity');
            $(allPeople[currentPerson]).removeClass('opacity');

            animatebars($(allPeople[currentPerson]));

            //for phones:
        } else {

            personId.addClass('visibility');
            allPeople.removeClass('opacity');

            allPeople.eq(currentPerson).fadeOut(300, function() {
                allPeople.hide();
                allPeople.eq(currentPerson).fadeIn(300);
            });

            currentPerson++;

            if(currentPerson >= allPeople.length) {
                currentPerson = 0;
            }

            animatebars($(allPeople[currentPerson]));
        }
    });


    prevPerson.on("click", function(){

        //for screens:
        if ($(window).width() > 700) {
            currentPerson--;

            if(currentPerson < 0) {
                currentPerson = allPeople.length-1;
            }

            $(allPeople).addClass('opacity');
            $(allPeople[currentPerson]).removeClass('opacity');

            animatebars($(allPeople[currentPerson]));

            //for phones:
        } else {

            personId.addClass('visibility');
            allPeople.removeClass('opacity');

            allPeople.eq(currentPerson).fadeOut(300, function() {
                allPeople.hide();
                allPeople.eq(currentPerson).fadeIn(300);
            });

            currentPerson--;

            if(currentPerson < 0) {
                currentPerson = allPeople.length-1;
            }

            animatebars($(allPeople[currentPerson]));
        }
    });


    //------------------------------------ PROGRESS BAR ------------------------------------

    function animatebars(skill) {
        //var skill = $(".skill");


        //console.log(skill);

        var webpercent = skill.data('webpercent');
        var graphicpercent = skill.data('graphicpercent');
        var htmlpercent = skill.data('htmlpercent');
        var uxpercent = skill.data('uxpercent');

        var progressbarweb = $(".progress.web");
        progressbarweb.animate({width:webpercent}, 800);

        var progressbargraphic = $(".progress.graphic");
        progressbargraphic.animate({width:graphicpercent}, 800);

        var progressbarhtml = $(".progress.html");
        progressbarhtml.animate({width:htmlpercent}, 800);

        var progressbarux = $(".progress.ux");
        progressbarux.animate({width:uxpercent}, 800);
    }


    animatebars(personId);

    //------------------------------------ PORTFOLIO ------------------------------------
    //------------------------------------ hover

    var portfolioPicture = $(".picture img");
    var portfolioPictureOverlay = $(".overlay");
    var pictureParent = $(".picture");

    portfolioPictureOverlay.hide();

    function pictureHover() {

        $(portfolioPicture).mouseover(function() {
            $(this).next(".overlay").show();
        });

        portfolioPictureOverlay.mouseleave(function() {
            $(".overlay").hide();
        })
    }

    pictureHover();


    var bigImage = $(".bigImage");
    console.log(bigImage);

    bigImage.hide();

    function imageEnlarge() {
        $(portfolioPictureOverlay).click(function(){
            console.log(this);
            $(this).next(".bigImage").show();
        });

        $(bigImage).click(function(){
            $(this).hide();
        })
    }

    imageEnlarge();

    //------------------------------------ QUOTE SLIDER ------------------------------------

    var slider = $(".slide-container");

    slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slide: 'div',
        dots: true

    });



    //------------------------------------ SCROLLTO - header ------------------------------------

    var stickymenuheight = $(".sticky_menu").height();
    var linkTop = $("#portfolio").offset().top;

    console.log(linkTop);
    console.log(stickymenuheight);
    console.log(linkTop-stickymenuheight);

    $('.honey').click(function(event) {
        event.preventDefault();
        var href = $(this).attr("href");
        console.log(href);
        $('html, body').animate({
            scrollTop: $(href).offset().top - stickymenuheight
        }, 2000);
    });


    console.log($(".sticky_menu").height())



    //var stickymenuheight = $(".sticky_menu").height() * 3;
    //console.log(stickymenuheight);
    //
    //
    //$('.honey').click(function(event) {
    //    event.preventDefault();
    //    var href = $(this).attr('href');
    //    console.log(href);
    //    $('html, body').animate({
    //        scrollTop: $(href).offset().top - stickymenuheight
    //    }, 2000);
    //});




    //------------------------------------ SCROLLTO - scroller ------------------------------------

    $('.scrollerlink').click(function(event) {
        event.preventDefault();
        var href = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
    });



    //------------------------------------ FORM VALIDATION ------------------------------------

    function checkValidate() {

        var name = $('#form').find("input#name");
        console.log(name);
        var email = $('#form').find("input#email");
        var text = $('#form').find("input#message");
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        var nameSpan = $('#form').find("p.formName");
        var emailSpan = $('#form').find("p.formEmail");
        var textSpan = $('#form').find("p.formText");


        $("#button").click(function () {

            //sprawdzenie poprawnosci imienia

            if ((name.val().length >= 3) && (name.val().length <= 10)) {
                console.log('ok')
            }
            else {
                console.log("error");
                nameSpan.show();
            }

            // sprawdzenie poprawnosci e-mail
            if (re.test(email.val())) {
                console.log('ok')
            }
            else {
                console.log("error");
                emailSpan.show();
            }

            // sprawdzenie poprawnosci wiadomosci
            if ((text.val().length > 0) && (text.val().length <= 100)) {
                console.log('ok')
            }
            else {
                console.log("error");
                textSpan.show();
            }
        })
    }
    checkValidate();


});