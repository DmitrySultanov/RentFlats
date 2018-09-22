<template>
	<div class="flat-expanded-wrapper">
		<div class="container">
			<div class="row">
				<div class="col">
					<router-link class="btn btn-primary btn-sm back-btn" :to="{name: 'home'}"><fa-icon name="angle-left"></fa-icon> Назад</router-link>	
				</div>
			</div>
			<div class="flat-expanded">
			  	<div class="row">
			  		<div class="col-lg-6">
			  			<div class="map">
			  				<div id="loading-map" class="flex center"><div>Карта загружается...<fa-icon name="spinner" spin></fa-icon></div></div>
						  	<yandex-map 
							  :coords="this.flat.coords.split(', ')"
							  zoom="12"
							  style="width: 100%; height: 100%;"
							  :cluster-options="{
							    1: {clusterDisableClickZoom: true}
							  }"
							  :behaviors="['scrollZoom', 'drag', 'dblClickZoom', 'multiTouch']"
							  :controls="['fullscreenControl', 'zoomControl']"
							  :placemarks="placemarks" 
							  @map-was-initialized="initHandler"
							>
							</yandex-map>
			  			</div>
						<ul class="flat-icons">
							<!-- <li><div><img :src="flat.prevSrc" alt=""></div></li> -->
						</ul>
			  		</div>
			  		<div class="col-lg-6">
			  			<div class="flat-top-info flex align">
			  				{{ flat.type }}, <!-- {{ flat.AreaDesc.totalArea }} --> м<sup>2</sup>, 
			  				<div class="flat-metro flex align"><i>м</i> <span>{{ flat.metro }}</span></div>
			  				<div class="flat-cost"><span>{{ flat.price }}</span> <i><fa-icon name="ruble-sign"></fa-icon></i></div>
			  			</div>
			  			<div class="flat-location">
			  				<span>{{ flat.location }}</span>, <span>{{ flat.district }}</span>, <span>{{ flat.address }}</span>
			  			</div>
			  			<div class="flatAreaDesc flat-desc">
			  				<p>ХАРАКТЕРИСТИКИ ПОМЕЩЕНИЯ:</p>
			  				<ul>
			  					<li><b>Общая площадь (кв.м):</b> {{ flat.AreaDesc.totalArea }}</li>
			  					<li><b>Площадь комнат (кв.м):</b> {{ flat.AreaDesc.roomArea }}</li>
			  					<li><b>Площадь кухни (кв.м):</b> {{ flat.AreaDesc.kitchenArea }}</li>
			  					<li><b>Общее количество комнат в квартире:</b> {{ flat.AreaDesc.roomInFlat }}</li>
			  					<li><b>Этаж:</b> {{ flat.AreaDesc.floor }} из {{ flat.AreaDesc.totalFloor }}</li>
			  				</ul>
			  			</div>
			  			<div class="flatFurniture flat-desc">
			  				<ul class="flex align">
			  					<li v-if="flat.Furniture.furniture"><fa-icon name="bed"></fa-icon><span>{{ flat.Furniture.furniture }}</span></li>
			  					<li v-if="flat.Furniture.washer"><img src="../assets/img/washing2.png" alt=""><span>{{ flat.Furniture.washer }}</span></li>
			  					<li v-if="flat.Furniture.fridge"><img src="../assets/img/fridge.svg" alt=""><span>{{ flat.Furniture.fridge }}</span></li>
			  					<li v-if="flat.Furniture.phone"><fa-icon name="phone"></fa-icon><span>{{ flat.Furniture.phone }}</span></li>
			  					<li v-if="flat.Furniture.internet"><fa-icon name="wifi"></fa-icon><span>{{ flat.Furniture.internet }}</span></li>
			  				</ul>
			  			</div>
						<div>
							{{ flat.description }}
						</div>
						<div class="after-info">
							<div class="flat-placed">Размещено: <span class="red">{{ flat.placed }}</span> </div>
							<div class="flat-placed">Телефон: <a href="#"><b>Показать номер</b></a> </div>
						</div>
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
 				required: true,
 				// default: function () {
			  //       return { message: 'hello' }
			  //   }
 			}
 		},
	    data() {
	      	return {
	      		message: '',
	      		coords: [],
	        	placemarks: [
			      {
			        coords: this.flat.coords.split(', '),
			        properties: {}, // define properties here
			        options: {
			        	preset: 'islands#blackDotIcon'
			        }, // define options here
			        // clusterName: "1",
			        // balloonTemplate: '<div>"Your custom template"</div>',
			        callbacks: { click: function() {} }
			      }
		    	]
	      	}
	    },
	    methods: {
	    	initHandler(obj){
				console.log(obj)
				let loadingMapPrev = document.getElementById("loading-map");
				loadingMapPrev.style.display = 'none';
			}
	    }
   	}
</script>

<style lang="scss" scoped>
	.flat-expanded-wrapper{
		margin-top: 20px;
	}
	.flat-expanded{
		margin-top: 10px;
	}

	.flat-top-info{
		margin-top: 0;
		font-size: 1.8rem;
    	line-height: 2.2rem;
	}
	sup{
		font-size: 65%;
	}

	.back-btn{
		position: absolute;
	    top: 20px;
	    left: 30px;
	    z-index: 14;

		svg{
			position: relative;
			top: 2px;
			margin-right: 5px;
		}
	}

	.map{
		height: 300px;
		position: relative;

		#loading-map{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 22;
		}
	}

	.flat-metro{
		padding-left: 5px;
		font-size: 22px;
    	margin-left: 15px;
    	line-height: 20px;
    	padding-top: 4px;

		i{
			font-size: 16px;
			font-style: normal;
			position: relative;
			color: rgb(204,0,0);
			vertical-align: top;
			margin-right: 10px;
			margin-top: -2px;

			&:after{
				content: '';
				width: 20px;
				height: 20px;
				border: 1px solid rgb(204,0,0);
				border-radius: 50%;
				position: absolute;
				top: 50%;
				left: -50%;
				margin-top: -9px;
			}
		}

		span{
			color: rgb(204,0,0);
		}
	}

	.flat-cost{
		color: rgb(204,0,0);
		margin-left: 30px;
		font-size: 75%;
		line-height: 75%;
		padding-top: 6px;

		i{
			color: rgb(204,0,0);
		}
	}

	.flat-location{
		font-size: 14px;
		padding-bottom: 5px;
		margin-bottom: 5px;
		border-bottom: 1px solid rgba(0,0,0, .3);
	}
	.flat-desc{
		margin-top: 20px;

		p{
			margin-bottom: 5px;
		}

		ul{
			padding: 0;
		}

		ul.flex li{
			margin-right: 10px;

			span{
				margin-left: 4px;
				font-size: 90%;
			}
		}

		span{
			margin-right: 10px;
		}

		img{
			max-width: 14px;
			max-height: 20px;
			vertical-align: top;
		}

		svg{
			vertical-align: top;
			width: 18px;
    		margin-top: 5px;

			path{
				width: 100%;
			}
		}
	}

	.after-info{
		border-top: 1px solid rgba(0,0,0, .3);
		margin-top: 20px;
		padding-top: 5px;
	}
</style>
