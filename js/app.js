/**
 * Created by Marysia on 20.11.15.
 */
document.addEventListener('DOMContentLoaded', function() {


    //hamburger przenieś do sassa - display: none itd
    function setMenu() {


        function setHam(){
            if ($(window).width() < 700) {
                $('.header-nav').hide();
                //$('.fusce').hide();
                $('.vestibulum').hide();
                $('.menuBtn').show();
            } else {
                $('.header-nav').show();
                //$('.fusce').show();
                $('.vestibulum').show();
                $('.menuBtn').hide();
                $('.mobileMenu').hide();
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

nextPerson.on("click", function(){
    //$(allPeople[currentPerson]).removeClass('opacity');
    currentPerson++;

        if(currentPerson >= allPeople.length) {
            currentPerson = 0;
        }
    $(allPeople).addClass('opacity');
    $(allPeople[currentPerson]).removeClass('opacity');

    animatebars($(allPeople[currentPerson]));

});


prevPerson.on("click", function(){

    currentPerson--;

    if(currentPerson < 0) {
        currentPerson = allPeople.length-1;
    }

    $(allPeople).addClass('opacity');
    $(allPeople[currentPerson]).removeClass('opacity');

    animatebars($(allPeople[currentPerson]));

});


    //------------------------------------ PROGRESS BAR ------------------------------------

    function animatebars(skill) {
        //var skill = $(".skill");


        console.log(skill);

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