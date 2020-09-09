$(document).ready(
	function(){
		//main nav
		$('.about-section').waypoint(
			function(direction){
				if(direction == "down"){
					$('nav').addClass('sticky');
					$('.mobile-nav-icon').css('top','45px');
				}else{
					$('nav').removeClass('sticky');
				}
			},{
				offset: '600px'
			}
		)
		// Scroll
		$('a').click(function(event){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			},700);
			event.preventDefault();
		})
		// Mobile navigation
		$('.mobile-nav-icon').click(
			function(){
				$('.main-nav').slideToggle(300);
				if($('.mobile-nav-icon').hasClass('fa-bars')){
					$('.mobile-nav-icon').addClass('fa-times');
					$('.mobile-nav-icon').removeClass('fa-bars');
				}else{
					$('.mobile-nav-icon').addClass('fa-bars');
					$('.mobile-nav-icon').removeClass('fa-times');
				}
			}
		)
	}
)
