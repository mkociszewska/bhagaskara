/**
 * Created by Marysia on 20.11.15.
 */
document.addEventListener('DOMContentLoaded', function() {


    //hamburger
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

    });