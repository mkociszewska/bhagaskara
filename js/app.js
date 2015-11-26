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

    //var allPeople = $(".peopleList li");
    //var nextPerson = $("#nextPerson");
    //var prevPerson = $("#prevPerson");
    //var currentPerson = 0;
    //
    //allPeople.eq(currentPerson).fadeIn(2000);
    //
    //nextPerson.on("click", function(){
    //    allPeople.eq(currentPerson).fadeOut(2000, function() {
    //        allPeople.hide();
    //        allPeople.eq(currentPerson).fadeIn(2000);
    //    });
    //    currentPerson++;
    //    if(currentPerson >= allPictures.length) {
    //        currentPerson = 0;
    //    }
    //
    //});
    //
    //
    //prevPerson.on("click", function(){
    //    allPeople.eq(currentPerson).fadeOut(2000, function(){
    //        allPeople.eq(currentPerson).fadeIn(2000);
    //    });
    //    currentPerson--;
    //    if(currentPerson < 0) {
    //        currentPerson = allPeople.length-1;
    //    }
    //
    //})
    //
    //
    //
    //});

//------------------------------------ABOUT US GALLERY------------------------------------

var allPeople = $(".peopleList li");
var nextPerson = $("#nextPerson");
var prevPerson = $("#prevPerson");
var currentPerson = 1;
var peopleList = $(".peopleList");


$(allPeople[currentPerson]).removeClass('opacity');

nextPerson.on("click", function(){
    //$(allPeople[currentPerson]).removeClass('opacity');
    currentPerson++;

        if(currentPerson >= allPeople.length) {
            currentPerson = 0;
        }
    $(allPeople).addClass('opacity');
    $(allPeople[currentPerson]).removeClass('opacity');

});


prevPerson.on("click", function(){

    currentPerson--;

    if(currentPerson < 0) {
        currentPerson = allPeople.length-1;
    }

    $(allPeople).addClass('opacity');
    $(allPeople[currentPerson]).removeClass('opacity');

});



});