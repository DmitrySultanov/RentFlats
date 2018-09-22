<template>
	<div class="flat rounded">
      	<div class="flat__preview" :style="flat.prevSrc"><a href="#" @click.prevent="viewDetailsClicked"></a><span><fa-icon name="eye"></fa-icon></span></div>
      	<div class="flat__desc">
	        <div class="row">
	          	<div class="col">
	            	<div class="flex">
	            		<div class="flat-cost"><span>{{ flat.price }}</span> <i><fa-icon name="ruble-sign"></fa-icon></i></div>
	              		<div class="flat-type"><b>{{ flat.type }}</b></div> |
	              		<div class="flat-size"><b>{{ flat.AreaDesc.totalArea }} м<sup>2</sup></b></div>
	            	</div>
	          	</div>
	        </div>
	        <div class="row">
	          	<div class="col">
	          		<div class="flex">
		            	<div class="flat-metro"><i>м</i> <span>{{ flat.metro }}</span></div>
						<div class="flat-metro-distance">{{ flat.metroDistance }}</div>
	          		</div>
	          	</div>
	        </div>
	        <div class="row">
	        	<div class="col">
	        		<div class="flex">
	        			<div class="flat-placed">Размещено: {{ flat.placed}} </div>
	        		</div>
	        	</div>
	        </div>
	    </div>
  	</div>
</template>

<script>
 	export default {
 		props: {
 			flat: {
 				type: Object,
 				required: true
 			},
 			index: Number,
 		},
	    data() {
	      return {
	        
	      }
	    },
	    methods: {
	    	viewDetailsClicked(){
	    		this.$router.push({name: 'flat-expanded', params: {flat: this.flat, id:this.flat.id}}); //именованный переход на страницу
	    	}
	    }
   	}
</script>

<style lang="scss" scoped>
	.flat{
		padding: 10px;
		background: #fff;
		margin: 0 .5% 1% .5%;
		width: 24%;
		box-shadow: 0px 2px 5px -1px rgba(0,0,0, .44);
		// color: #3d3d3d;

		span{
			font-size: 15px;
			line-height: 22px;
		}

		&__preview{
			position: relative;
			height: 140px;
			background-repeat: no-repeat;
    		background-position: 50% 50%;
    		background-size: cover;

			&:after{
				content: '';
				background: transparent;
				pointer-events: none;
				z-index: 11;
				position: absolute;
				top: 10px;
				left: 10px;
				right: 10px;
				bottom: 10px;
				transition: ease-in-out .3s;
			}

			span{
				font-size: 20px;
				position: absolute;
				top: 50%;
				left: 50%;
				transition: ease-in-out .3s;
				opacity: 0;
				display: inline-block;
				width: 30px;
				height: 30px;
				margin: -15px 0 0 -15px;
				color: #fff;
				z-index: 22;
				pointer-events: none;

				svg{
					width: 100%;
					height: 100%;
				}
			}

			img{
				max-width: 100%;
			}

			a{
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 11;
			}

			&:hover{
				&:after{
					background: rgba(0,0,0, .3);
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					transition: ease-in-out .3s;
				}

				span{
					opacity: 1;
				}
			}
		}

		&__desc{
			padding-top: 4px;
		}

		.flat-cost{
			margin-right: 5px;

			span{
				font-size: 20px;
				color: rgb(204,0,0);
			}
			i{
				vertical-align: text-top;
				color: rgb(204,0,0);
			}
		}

		.flat-type, .flat-size{
			font-size: 18px;
			margin: 0 10px 0 10px;
			line-height: 24px;

			&:last-child{
				margin-right: 0;
			}
		}

		.flat-metro{
			padding-left: 5px;
			margin-right: 15px;

			i{
				font-size: 16px;
				font-style: normal;
				display:inline-block;
				position: relative;
				color: rgb(204,0,0);
				vertical-align: top;
				margin-right: 5px;

				&:after{
					content: '';
					width: 20px;
					height: 20px;
					border: 1px solid rgb(204,0,0);
					border-radius: 50%;
					position: absolute;
					top: 4px;
					left: -50%;
				}
			}

			span{
				color: rgb(204,0,0);
			}
		}

		.flat-metro-distance{
			// color: rgb(204,0,0);
			font-size: 13px;
			line-height: 27px;
		}

		.flat-placed{
			font-size:13px;
		}
	}

	@media (max-width: 1200px){
		.flat{
			.flat-cost{
				margin-right: 10px;

				span{
					font-size: 18px;
				}

				svg{
					width: 10px;
				}
			}

			.flat-type, .flat-size{
				font-size: 15px;
				margin: 0 5px;
			}
		}
	}

	@media (max-width: 991px){
		.flat{
			width: 32.3%;

			.flat-cost{
				margin-right: 15px;
			}

			.flat-type, .flat-size{
			}
		}
	}

	@media (max-width: 768px){
		.flat{
			width: 49%;
			margin: 0 0 10px 0;
		}
	}

	@media (max-width: 576px){
    	.flat{
			width: 100%;
			margin: 0 0 10px 0;
		}
  	}
</style>
