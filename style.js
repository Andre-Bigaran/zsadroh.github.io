
/* colors */
$placeholder: #888888;
$mainBG: #373D45;
$searchIcon: #888888;
$searchIconActive: white;
$searchText: white;
$searchLine: white;
$blockBG: rgba(0,0,0,0.2);
$blockBorder: #222222;
$blockHeader: #F38630;
$blockLink: white;
$blockHover: #69D2E7;

//theme
$blockHeader: #95EDFD;
$blockHover: #FF92D1;

/* responsive mixin */

$BP_XXL: 1600px;
$BP_XL: 1200px;
$BP_L: 1000px;
$BP_M: 850px;
$BP_S: 710px;
$BP_XS: 650px;
$BP_XXS: 400px;

@mixin responsive($width: $BP_L) {
	@media screen and (max-width: $width) {
		@content;
	}
}

/* placeholder */

@mixin placeholder {
	::-webkit-input-placeholder { @content }
	:-moz-placeholder           { @content }
	::-moz-placeholder          { @content }
	:-ms-input-placeholder      { @content }
}

@include placeholder {
	color: $placeholder;
	opacity: 0;
	transition: opacity .5s cubic-bezier(0.4, 0.0, 0.2, 1);
	@at-root input:focus#{&} {
		opacity: 1;
	}
}

/* main content */

* {
	margin: 0;
	padding: 0;
	line-height: 1.2;
	font-family: "Inconsolata", monospace;
	font-weight: 400;
	opacity: 1.0;
}

html, body {
	background-color: $mainBG;
}

.search-block {
	position: relative;
	width: 40%;
	margin: 10vh auto 0px;
  text-align: center;

	@include responsive() {
		width: 60%;
		margin: 5vh auto 0vh;
	}

	label {
		position: absolute;
		color: $searchIcon;
		top: 7px;
		left: -20px;
		transition: all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
	}

	input {
		width: 100%;
		margin: 0 auto; padding: 5px 0;
		font-size: 16px;
		background: transparent;
		border: 2px solid transparent;
		border-bottom: 2px solid transparent;
		color: $searchText;
		outline: none;
		transition: all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
		&:hover, &:focus {
			border-bottom: 2px solid $searchLine;
			& + label {
				color: $searchIconActive;
			}
		}
	}
	ul.search-help {
		transition: all .5s cubic-bezier(0.4, 0.0, 0.2, 1);
    display: inline-block;
		@include responsive() {
			max-height: 100px;
		}

		li {
			display: inline-block;
			padding: 25px;
			list-style: none;
			cursor: pointer;
			> span {
				position: relative;
				color: $searchText;
				font-size: 20px;
				.icon {
					transition: opacity .5s cubic-bezier(0.4, 0.0, 0.2, 1);
				}
				.command {
					position: absolute;
					left: 0; right: 0;
					text-align: center;
					opacity: 0;
					transition: opacity .5s cubic-bezier(0.4, 0.0, 0.2, 1);
				}
			}
			&:hover {
				.icon {
					opacity: .2;
				}
				.command {
					opacity: 1;
				}
			}
		}
	}
}

.blocks {
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 50px;

	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	overflow: hidden;

	.block {
		flex: 1;

		margin: 2px;
		padding: 10px 15px;
		background-color: $blockBG;
		border: 1px solid $blockBorder;
		min-width: 160px;
		li {
			list-style: none;
		}
		.header {
			color: $blockHeader;
		}
		a {
			text-decoration: none;
			cursor: pointer;
			&:visited, &:focus, &:link {
				color: $blockLink;
			}
			&:hover {
				color: $blockHover;
			}
		}
	}
	@include responsive() {
		width: 80%;
	}
}
