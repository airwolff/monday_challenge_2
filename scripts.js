$( document )
	.ready( function () {
		var totalRed = 0;
		var totalYellow = 0;
		var totalGreen = 0;
		var totalBlue = 0;
		var color;
		// count number of colors


		$( 'button' )
			.on( 'click', clicker );

		function clicker() {
			color = $( 'button' )
				.attr( 'data-color' );
			return color;
		}


		switch ( color ) {
		case red:
			$( '.container' )
				.append( '<div class="red"></div>' );
			break;
		case yellow:
			$( '.container' )
				.append( '<div class="yellow"></div>' );
			break;
		case green:
			$( '.container' )
				.append( '<div class="green"></div>' );
			break;
		case blue:
			$( '.container' )
				.append( '<div class="blue"></div>' );
			break;

		}
		// color box added
	} )
