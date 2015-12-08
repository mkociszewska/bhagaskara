/**
 * Created by Marysia on 20.11.15.
 */
document.addEventListener('DOMContentLoaded', function() {

    function setMenu() {


        function setHam(){
            if ($(window).width() < 1000) {
                $('.sticky_list').hide();
                $('.menuBtn').show();
                $('.stickylogo').hide();
            } else {
                $('.sticky_list').show();
                $('.menuBtn').hide();
                $('.mobileMenu').hide();
                $('.stickylogo').show();
            }
        }
        setHam();

        $(window).on('resize', function() {
            setHam();
        });
    }

    function setClick() {
        $('.menuBtn').on('click', function() {
            $('.mobileMenu').toggle();
        });
    }

    setMenu();
    setClick();


    //------------------------------------HEADER, GREY SECTION, ABOUT US, OUR SKILLS - PHONE------------------------------------

    var headerNav = $(".header-nav");
    var headerNavIcons = headerNav.children();
    var topNav = $(".topnav");
    var greyDivs = $(".grey");
    var mockup = $(".mockup");
    var aboutUsText = $(".aboutText");
    var skillsDiv = $(".skillDiv");
    var counter = $(".counter");


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
        }

    }

    changeGrid();






    //------------------------------------STICKY MENU------------------------------------

    var stickyNavTop = $('.sticky_menu').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.sticky_menu').addClass('sticky');
        } else {
            $('.sticky_menu').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });



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

    if ($(window).width() > 700) {
        currentPerson++;

            if(currentPerson >= allPeople.length) {
                currentPerson = 0;
            }
        $(allPeople).addClass('opacity');
        $(allPeople[currentPerson]).removeClass('opacity');

       animatebars($(allPeople[currentPerson]));

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

    if ($(window).width() > 700) {
        currentPerson--;

        if(currentPerson < 0) {
            currentPerson = allPeople.length-1;
         }

    $(allPeople).addClass('opacity');
    $(allPeople[currentPerson]).removeClass('opacity');

    animatebars($(allPeople[currentPerson]));

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

//-------phone

    //function phoneAboutUs() {
    //
    //    if ($(window).width() < 700) {
    //        nextPerson.on("click", function() {
    //            allPeople.eq(currentPerson).fadeOut(200, function () {
    //                allPeople.eq(currentPerson).fadeIn(200);
    //            });
    //
    //            currentPerson++;
    //
    //            if(currentPerson >= allPeople.length) {
    //                currentPerson = 0;
    //            }
    //
    //
    //        })
    //    }
    //}
    //
    //phoneAboutUs();

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

});