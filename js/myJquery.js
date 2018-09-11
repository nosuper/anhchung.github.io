if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="flaticon-arrow-pointing-to-left"></span>', '<span class="flaticon-arrow-pointing-to-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});    		
	}

if ($('.navcarousel').length) {
		$('.navcarousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			animateOut: 'slideOutLeft',
    		animateIn: 'slideInRight',
			smartSpeed: 500,
			autoplay: 4000,
			autoWidth:true,
			lazyLoad:true,
			autoHeight: true,
			navText: [ '<span class="flaticon-arrow-pointing-to-left"></span>', '<span class="flaticon-arrow-pointing-to-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});  

	}

