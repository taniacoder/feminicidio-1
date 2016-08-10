function responsive() {
	    this.altura_map = $("#map-canvas").innerHeight()
	    this.altura_cuadro = $("#cuadro").innerHeight()
	    this.ancho = window.innerWidth
	    var ct = document.querySelectorAll('[data-attr]')
	     for( var i=0; i<ct.length; i++){
	        	ct[i].classList.add("v-center"); 
	     }
	    if (ancho > 767) {
	        ct[0].style.height = altura_map + "px"	
	        ct[1].style.height = altura_cuadro + "px"	          
	        }
	      else{
	      	ct[0].style.height = ""	
	        ct[1].style.height = ""	
	      }
	    } 

	$(window).load(function() {
	    responsive();
	    obtener_modal(ancho)
	    poner_modal()
	});    
$(window).resize(function() {
  responsive();
	});

	function poner_modal() {
	    var chichico = document.getElementsByClassName("chichico")
	    for (var i = 0; i < chichico.length; i++) {
	        var modal = document.createElement("div");
	        modal.innerHTML = '<a href= "" type="button" data-toggle="modal" data-target=#' + [i] + '><i class="fa fa-play-circle-o fa-5x" aria-hidden="true"></i></a>'
	        chichico[i].appendChild(modal)
	    }
	}

	function obtener_modal(ancho) {
	    var modal_transparent = document.querySelectorAll("#modal-transparent")
	    for (var j = 0; j < modal_transparent.length; j++) {
	        modal_transparent[j].setAttribute('id', j);
	        var modal_dialog = document.createElement("div")
	        modal_dialog.className = "modal-dialog"
	        modal_dialog.innerHTML = '<div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><h4 class="modal-title" id="myModalLabel">Modal title</h4></div><div class="modal-footer"></div></div>'
	        modal_transparent[j].appendChild(modal_dialog)
	    }

	    var obtener_md = document.getElementsByClassName("modal-content")
	    for (var k = 0; k < obtener_md.length; k++) {
	        switch (obtener_md[k]) {
	            case obtener_md[0]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/tdM_ArIOkl8" frameborder="0" allowfullscreen></iframe><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus iure est, ab sequi, similique dolores eius totam velit quia illo, porro vitae quaerat magnam repellat eos laborum amet molestiae natus neque repudiandae dignissimos. Maiores eius ullam ducimus corporis hic ea, quod in, aspernatur cupiditate et mollitia quasi excepturi deserunt. Commodi!</div>'
	                obtener_md[0].appendChild(modal_body)
	                break;
	            case obtener_md[1]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[1].appendChild(modal_body)
	                break;
	            case obtener_md[2]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[2].appendChild(modal_body)
	                break;
	            case obtener_md[3]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[3].appendChild(modal_body)
	                break;
	            case obtener_md[4]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[4].appendChild(modal_body)
	                break;
	            case obtener_md[5]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[5].appendChild(modal_body)
	                break;
	            case obtener_md[6]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[6].appendChild(modal_body)
	                break;
	            case obtener_md[7]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[7].appendChild(modal_body)
	                break;
	            case obtener_md[8]:
	                var modal_body = document.createElement("div")
	                modal_body.className = "modal-body"
	                modal_body.innerHTML = '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	                obtener_md[8].appendChild(modal_body)
	                break;
	        }
	        obtener_md[k].insertBefore(modal_body, obtener_md[k].childNodes[1]);
	        if (ancho < 500) {
	            $('.modal-body').children('iframe').css("height", "180");;
	        }
	    }
	    footer_modal()
	}

	function footer_modal() {
	    var poner_redes = document.getElementsByClassName("modal-footer")
	    for (z = 0; z < poner_redes.length; z++) {
	        var redes = document.createElement("div")
	        redes.innerHTML = '<div class="redes-sociales"><!--Twitter--><a href="https://twitter.com/share" class="twitter-share-button">Tweet</a> <!--Twitter--><!--facebook--><div class="fb-like" data-href="" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div><!--facebook--></div>'
	        poner_redes[z].appendChild(redes)
	    }
	}
