const data = {

     
        "categorias":[
          { 
            "subcategoria":["lijas-y-telas-recubiertas"],
            "marca":["ABRACOL"],
            "nombre":"abrasivos"},
          { 
            "subcategoria":["discos-abrasivos", "discos-de-metal"],
            "marca":["ABRACOL","DEWALT","MULTIMARCAS","UYUSTOOLS"],
            "nombre":"accesorios-para-herramientas"}, 
          {
            "subcategoria":["amarres-plasticos","amarres-para-tejas"],
            "marca":["MULTIMARCAS"],
            "nombre":"amarres"}, 
          {
            "subcategoria":["cerrojos","cerraduras","candados"],
            "marca":["EGRET","MULTIMARCAS","SECURITY","OSBLACK","INDUMA"],
            "nombre":"cerrajeria"},
          {
            "subcategoria":["cementos"],
            "marca":["ARGOS"],
            "nombre":"construccion"},
          { 
            "subcategoria":["enchufes-y-clavijas","tomas-e-interruptores","breakers","cajas-y-electricos","cintas","plafones-y-rosetas"],
            "marca":["CILES","CODELCA","LUMINEX","GLOBY","MULTIMARCAS"],
            "nombre":"electricos"},
          {
            "subcategoria":["tornillos","chazos-en-nylon","chazos-metalicos"],
            "marca":["MULTIMARCAS","FMT"],
            "nombre":"fijaciones"},
          { 
            "subcategoria":["soluciones-para-baños","soluciones-para-cocinas","duchas","jardin-y-exteriores","griferia-lavamanos","soluciones-para-el-hogar"],
            "marca":["GRIVAL","RIOPLAST","MULTIMARCAS"],
            "nombre":"griferia-y-plomeria"},
          { 
            "subcategoria":["pegantes-para-construccion","siliconas-y-selladores"],
            "marca":["SINTESOLDA","PEGADIT"],
            "nombre":"pegantes-y-adhesivos"},
          {  
            "subcategoria":["herramientas-para-pintar"],
            "marca":["GOYA"],
            "nombre":"pintura"},
          { 
          "subcategoria":["albanileria-y-construccion","limas-y-escofinas","herramientas-de-acabado","pinzas-y-alicates","herramientas-manuales-de-corte","herramientas-de-medicion","destornilladores"],
          "marca":["MULTIMARCAS","CRESCENT","NICHOLSON","LUFKIN-CRESCENT","UYUSTOOLS"],
          "nombre":"herramientas-manuales"}
              
        ],
        
        "subcategorias":[
          {
            "categoria":"abrasivos",
            "nombre":"lijas-y-telas-recubiertas"

          },
          {
            "categoria":"accesorios-para-herramientas",
            "nombre":"discos-abrasivos"

          },
          {
            "categoria":"accesorios-para-herramientas",
            "nombre":"discos-de-metal"

          },
          {
            "categoria":"amarres",
            "nombre":"amarres-plasticos"

          },
          {
            "categoria":"amarres",
            "nombre":"amarres-para-tejas"

          },
          {
            "categoria":"cerrajeria",
            "nombre":"candados"

          },
          {
            "categoria":"cerrajeria",
            "nombre":"cerraduras"
 
          },
          {
            "categoria":"cerrajeria",
            "nombre":"cerrojos"

          },
          {
            "categoria":"construccion",
            "nombre":"cementos"

          },
          {
            "categoria":"electricos",
            "nombre":"enchufes-y-clavijas"

          },    
          {
            "categoria":"electricos",
            "nombre":"tomas-e-interruptores"

          },
          {
            "categoria":"electricos",
            "nombre":"breakers"

          },
          {
            "categoria":"electricos",
            "nombre":"cajas-y-electricos"
 
          },          
          {
            "categoria":"electricos",
            "nombre":"cintas"

          },        
          {
            "categoria":"electricos",
            "nombre":"plafones-y-rosetas"
 
          },
          {
            "categoria":"pegantes-y-adhesivos",
            "nombre":"pegantes-para-construccion"

          },
          {
            "categoria":"pegantes-y-adhesivos",
            "nombre":"siliconas-y-selladores"
 
          },
          {
            "categoria":"pinturas",
            "nombre":"herramientas-para-pintar"
 
          },
          {
            "categoria":"fijaciones",
            "nombre":"tornillos"
 
          },
          {
            "categoria":"fijaciones",
            "nombre":"chazos-en-nylon"
 
          },
          {
            "categoria":"fijaciones",
            "nombre":"chazos-metalicos"
 
          },
          {
            "categoria":"griferia-y-plomeria",
            "nombre":"soluciones-para-baños"

          },

          {
            "categoria":"griferia-y-plomeria",
            "nombre":"soluciones-para-cocinas"

          },
          {
            "categoria":"griferia-y-plomeria",
            "nombre":"duchas"

          },
          {
            "categoria":"griferia-y-plomeria",
            "nombre":"jardin-y-exteriores"
 
          },
          {
            "categoria":"griferia-y-plomeria",
            "nombre":"griferia-lavamanos"

          },
          {
            "categoria":"griferia-y-plomeria",
            "nombre":"soluciones-para-el-hogar"
 
          },
          {
            "categoria":"herramientas-manuales",
            "nombre":"albanileria-y-construccion"

          },
          {
            "categoria":"herramientas-manuales",
            "nombre":"limas-y-escofinas"

          },
          {
            "categoria":"herramientas-manuales",
            "nombre":"herramientas de acabado"

          },
          {
            "categoria":"herramientas-manuales",
            "nombre":"pinzas-y-alicates"

          },
          {
            "categoria":"herramientas-manuales",
            "nombre":"herramientas-manuales-de-corte"
 
          },
          {
            "categoria":"herramientas-manuales",
            "nombre":"herramientas-de-medicion"

          },
          {
            "categoria":"herramientas-manuales",
            "nombre":"destornilladores"
            
          },

        ],
      
        "marcas":[
          {
            "_id":"",
            "categoria":["abrasivos","accesorios-para-herramientas"],
            "subcategoria":["lijas-y-telas-recubiertas","discos-abrasivos"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647555/Icon/Logo_Abracol_sycors.png",
            "nombre":"ABRACOL"
          },
          {
            "_id":"",
            "categoria":["cerrajeria"],
            "subcategoria":["cerrojos"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647547/Icon/logo_induma_nooicg.png",
            "nombre":"INDUMA"
          },

          {
            "_id":"",
            "categoria":["electricos"],
            "subcategoria":["cajas-y-electricos"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647557/Icon/Logo_Ciles_b00dsy.jpg",
            "nombre":"CILES"
          },
          {
            "_id":"",
            "categoria":["griferia-y-plomeria"],
            "subcategoria":["soluciones-para-cocinas"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647547/Icon/Logo_Grival_kzpccn.jpg",
            "nombre":"GRIVAL"
          },
          {
            "_id":"",
            "categoria":["herramientas-manuales"],
            "subcategoria":["herramientas-manuales-de-corte"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647552/Icon/nicholson_nf4poe.png",
            "nombre":"NICHOLSON"
          },
          {
            "_id":"",
            "categoria":["abrasivos","griferia-y-plomeria"],
            "subcategoria":["soluciones-para-baños","duchas","solucciones-para-el-hogar"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647548/Icon/logo_rioplast_ozfcdp.jpg",
            "nombre":"RIOPLAST"
          },
          {
            "categoria":["pegantes-y-adhesivos"],
            "subcategoria":["pegantes-para-construcción"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647548/Icon/logo_sintesolda_gk9ozf.jpg",
            "nombre":"SINTESOLDA"
          },
          {
            "categoria":["pinturas"],
            "subcategoria":["herramientas-para-pintar"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647546/Icon/logo_goya_baszig.jpg",
            "nombre":"GOYA"
          },
          {
            "_id":"1",
            "categoria":["cerrajeria"],
            "subcategoria":["cerraduras"],
            "img":"https://www.osblack.co/wp-content/uploads/2019/09/noticia3.jpg",
            "nombre":"OSBLACK"
          },
          {
            "_id":"2",
            "categoria":["accesorios-para-herramientas"],
            "subcategoria":["discos-abrasivos","discos-de-metal"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647546/Icon/logo_dewalt_tyfryk.jpg",
            "nombre":"DEWALT"
          },
          {
            "_id":"3",
            "categoria":["pegantes-y-adhesivos"],
            "subcategoria":["siliconas-y-selladores"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647550/Icon/logo-pegadit_tr1r0l.jpg",
            "nombre":"PEGADIT"
          },
          {
            "_id":"4",
            "categoria":["cerrajeria"],
            "subcategoria":["candados"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647546/Icon/logo_egret_btyjyo.png",
            "nombre":"EGRET"
          },
          {
            "_id":"5",
            "categoria":["accesorios-para-herramientas","herramientas-manuales"],
            "subcategoria":["destornilladores","discos-de-metal"],
            "img":"https://http2.mlstatic.com/soldadura-estano-08-mm-uyustools-D_Q_NP_625402-MCO31561707702_072019-F.webp",
            "nombre":"UYUSTOOLS"
          },
          {
            "_id":"6",
            "categoria":["cerrajeria"],
            "subcategoria":["cerraduras"],
            "img":"https://i.pinimg.com/originals/f4/08/ed/f408edc7cd2df8c0e39811e93224fd5e.jpg",
            "nombre":"SECURITY"
          },
          {
            "_id":"7",
            "categoria":["abrasivos","amarres","electricos","accesorios-para-herramientas","griferia-y-plomeria","herramientas-manuales","herramientas-manuales"],
            "subcategoria":["amarres-plasticos","amarres-para-tejas","candados","plafones-y-rosetas","siliconas-y-selladores","albañileria-y-construcción","limas-y-escofinas","jardin-y-exteriores","tornillos","chazos-metalicos","herramientas-de-acabados","discos-abrasivos"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647547/Icon/logo_multimarcas_rbh3ra.png",
            "nombre":"MULTIMARCA"
          },

          {
            "_id":"8",
            "categoria":["electricos"],
            "subcategoria":["enchufes-y-clavijas","tomas-e-interruptores"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647557/Icon/logo_codelca_e4j6nc.png",
            "nombre":"CODELCA"
          },

          { 
            "_id":"9",
            "categoria":["electricos"],
            "subcategoria":["breakers"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647547/Icon/logo_luminex_gubbhb.gif",
            "nombre":"LUMINEX"
          },
     
          {
            "_id":"10",
            "categoria":["herramientas-manuales"],
            "subcategoria":["herramientas-de-medición"],
            "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647552/Icon/crescent-lufkin-logo_ilqvcu.webp",
            "nombre":"LUFKIN-CRESCENT"
          },
          {
            "_id":"11",
          "categoria":["herramientas-manuales"],
          "subcategoria":["pinzas-y-alicates"],
          "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647546/Icon/logo_crescent_q2auc5.png",
          "nombre":"CRESCENT"
          },
          {
            "_id":"12",
          "categoria":["herramientas-manuales"],
          "subcategoria":["chazos-en-nylon"],
          "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647555/Icon/fmt_u8fbxn.png",
          "nombre":"FMT"
          },
          {
            "_id":"13",
          "categoria":["construccion"],
          "subcategoria":["cementos"],
          "img":"https://res.cloudinary.com/casaforte/image/upload/v1622647556/Icon/logo_argos_wslcue.jpg",
          "nombre":"ARGOS"
          },
        //   {
        //     "_id":"14",
        //   "categoria":["electricos"],
        //   "subcategoria":["cintas"],
        //   "img":"",
        //   "nombre":"GLOBY"
        // }
      
          
        ],
      
        
      
        "productos":[
      
          // {"categoriassss":"abrasivosss"},
          {
            "codigo": "producto1",
            "imagen":{
                "img1":"/productos/lija_de_agua_abracol.jpg"
      
            },
            "marca": "ABRACOL",
            "categoria":"abrasivos",
            "subcategoria":"lijas-y-telas-recubiertas",
            "info": "Lija de Agua Profesional Grano 600 9” x 11” Abracol",
            "precio": 950,
            "enStock": 10,
            "unidad":"Paquete x 50"
      
        },
        {
          "codigo": "producto2",
          "imagen":{
            "img1":"/productos/lija_de_agua_abracol.jpg"
      
          },
          "marca": "ABRACOL",
          "categoria":"abrasivos",
          "subcategoria":"lijas-y-telas-recubiertas",
          "info": "Lija de Agua Profesional Grano 500 9” x 11” Abracol",
          "precio": 950,
          "enStock": 10,
          "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto3",
        "imagen":{
          "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 400 9” x 11” Abracol",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto4",
        "imagen":{
          "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 360 9” x 11” Abracol",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto5",
        "imagen":{
          "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 320 9” x 11” Abracol",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto6",
        "imagen":{
          "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 280 9” x 11” Abracol",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto7",
        "imagen":{
            "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 280 9” x 11” Abracol",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      },
      {
        "codigo": "producto8",
        "imagen":{
          "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 240 9” x 11” Abracol",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto9",
        "imagen":{
          "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 220 9” x 11” Abracol",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      },
      {
        "codigo": "producto10",
        "imagen":{
          "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 180 9” x 11” Abracol",
        "precio": 1150,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto11",
        "imagen":{
          "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 150 9” x 11” Abracol",
        "precio": 1150,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto12",
        "imagen":{
            "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 120 9” x 11” Abracol",
        "precio": 1150,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto13",
        "imagen":{
          "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 100 9” x 11” Abracol",
        "precio": 1150,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto14",
        "imagen":{
          "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 80 9” x 11” Abracol",
        "precio": 1150,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto15",
        "imagen":{
          "img1":"/productos/lija_de_agua_abracol.jpg"
      
        },
        "marca": "ABRACOL",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Profesional Grano 60 9” x 11” Abracol",
        "precio": 1150,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      },
      {
        "codigo": "producto16",
        "imagen":{
            "img1":"/productos/Lija_omega.jpg"
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 600 9” x 11” Omega",
        "precio": 850,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto17",
        "imagen":{
            "img1":"/productos/Lija_omega.jpg"
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 500 9” x 11” Omega",
        "precio": 850,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto18",
        "imagen":{
            "img1":"/productos/Lija_omega.jpg",
            
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 400 9” x 11” Omega",
        "precio": 850,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto19",
        "imagen":{
          "img1":"/productos/Lija_omega.jpg",
          
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 360 9” x 11” Omega",
        "precio": 850,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto20",
        "imagen":{
          "img1":"/productos/Lija_omega.jpg",
          
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 320 9” x 11” Omega",
        "precio": 850,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto21",
        "imagen":{
          "img1":"/productos/Lija_omega.jpg",
          
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 280 9” x 11” Omega",
        "precio": 850,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto22",
        "imagen":{
          "img1":"/productos/Lija_omega.jpg",
          
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 240 9” x 11” Omega",
        "precio": 850,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto23",
        "imagen":{
          "img1":"/productos/Lija_omega.jpg",
          
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 220 9” x 11” Omega",
        "precio": 850,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto24",
        "imagen":{
          "img1":"/productos/Lija_omega.jpg",
          
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 180 9” x 11” Omega",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto25",
        "imagen":{
          "img1":"/productos/Lija_omega.jpg",
          
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 150 9” x 11” Omega",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto26",
        "imagen":{
          "img1":"/productos/Lija_omega.jpg",
          
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 120 9” x 11” Omega",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto27",
        "imagen":{
          "img1":"/productos/Lija_omega.jpg",
          
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 100 9” x 11” Omega",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto28",
        "imagen":{
          "img1":"/productos/Lija_omega.jpg",
          
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 80 9” x 11” Omega",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      
      
      },
      {
        "codigo": "producto29",
        "imagen":{
          "img1":"/productos/Lija_omega.jpg",
          
      
        },
        "marca": "OMEGA",
        "categoria":"abrasivos",
        "subcategoria":"lijas-y-telas-recubiertas",
        "info": "Lija de Agua Grano 60 9” x 11” Omega",
        "precio": 950,
        "enStock": 10,
        "unidad":"Paquete x 50"
      },
      
      
      // {"categoriasss":"Accesorios de herramientasss"},
      
      {
        "codigo": "producto30",
        "imagen":{
          "img1":"/productos/Disco_pulir_abracol_7.jpg",
            
      
        },
        "marca": "ABRACOL",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-abrasivos",
        "info": "Disco Abracol Pulir Metal 7 x 1/4 x 7/8”",
        "precio": 3600,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto31",
        "imagen":{
            "img1":"/productos/disco_corte_fino_abracol_4_1_2.jpg",
            
      
        },
        "marca": "ABRACOL",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-abrasivos",
        "info": "Disco Corte Metal Abracol S/Fino 4 1/2” ",
        "precio": 3100,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "producto32",
        "imagen":{
            "img1":"/productos/disco_diamantado_4_1_2_continuo_abracol.jpg",
            
      
        },
        "marca": "ABRACOL",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-de-metal",
        "info": "Disco Diamantado Continúo Abracol 4 1/2”",
        "precio": 16100,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "producto33",
        "imagen":{
            "img1":"/productos/disco_diamantado_4_1_2_turbo_abracol.jpg",
            
      
        },
        "marca": "ABRACOL",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-de-metal",
        "info": "Disco Diamantado Turbo Abracol 4 1/2”",
        "precio": 16100,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "producto34",
        "imagen":{
            "img1":"/productos/disco_corte_4_x1_8_corte_metal_multimarca.jpg",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-abrasivos",
        "info": "Disco Corte Metal Multimarca S/Fino 4 1/2” ",
        "precio": 1300,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto35",
        "imagen":{
            "img1":"/productos/Disco_Flap_Thomkin.jpg",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-abrasivos",
        "info": "Disco Flap Tomking Grano 60",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto36",
        "imagen":{
            "img1":"/productos/Disco_Flap_Thomkin.jpg",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-abrasivos",
        "info": "Disco Flap Tomking Grano 80",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto37",
        "imagen":{
            "img1":"/productos/Disco_Flap_Thomkin.jpg",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-abrasivos",
        "info": "Disco Flap Tomking Grano 100",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Disco_Flap_Thomkin.jpg",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-abrasivos",
        "info": "Disco Flap Tomking Grano 120",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/DISCO_DIAMANTADO_SECO_4_1.2P_UYUSTOOLS",
            
      
        },
        "marca": "UYUSTOOLS",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-de-metal",
        "info": "Disco de Corte Diamantado Segmentado 4 x 1/2",
        "precio": 4400,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/disco_continuo_4_1_2_UYUSTOOLS",
            
      
        },
        "marca": "UYUSTOOLS",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-de-metal",
        "info": "Disco Diamantado Continuo 4 x 1/2",
        "precio": 4400,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/DISCO_CORTE_CERAMICO_DIAMANTADO_TURBO_UYUSTOOLS",
            
      
        },
        "marca": "UYUSTOOLS",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-de-metal",
        "info": "Disco Diamantado Turbo 4 x 1/2",
        "precio": 4400,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/DISCO_DW_4_1_2_X_1.1mmS_FINODW8062C_INOX",
            
      
        },
        "marca": "DEWALT",
        "categoria":"accesorios-para-herramientas",
        "subcategoria":"discos-abrasivos",
        "info": "Disco de Corte Metal 4 x 1/2",
        "precio": 3800,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      
      // {"categoriasss":"amarres"},
      
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/AMARRE_P_TEJA_ZINC_UNIDAD",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"amarres",
        "subcategoria":"amarres-para-tejas",
        "info": "Amarre Para Tejas",
        "precio": 3800,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      // {"categoriasss":"cerrajeria"},
      
      // {"categoriasss":"construccion"},
      
      // {"categoriasss":"Electricosss"},
      
      {
        "codigo": "producto39",
        "imagen":{
            "img1":"/productos/Enchufe_Codelca_Polo_a_tierra",
            
      
        },
        "marca": "CODELCA",
        "categoria":"electricos",
        "subcategoria":"enchufes-y-clavijas",
        "info": "Clavija Con Terminal Polo a Tierra Domestico 15A",
        "precio": 2500,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "producto40",
        "imagen":{
            "img1":"/productos/Toma_Aereo_Codelca_SKU_1785",
            
      
        },
        "marca": "CODELCA",
        "categoria":"electricos",
        "subcategoria":"enchufes-y-clavijas",
        "info": "Toma Aereo Domestico 10A",
        "precio": 2500,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "producto41",
        "imagen":{
            "img1":"/productos/Clavija_Tipo_Domestico_15A",
            
      
        },
        "marca": "CODELCA",
        "categoria":"electricos",
        "subcategoria":"enchufes-y-clavijas",
        "info": "Clavija Tipo Domestico 15A",
        "precio": 2500,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "producto42",
        "imagen":{
            "img1":"/productos/Clavija_Tipo_Industrial_15A",
            
      
        },
        "marca": "CODELCA",
        "categoria":"electricos",
        "subcategoria":"enchufes-y-clavijas",
        "info": "Clavija Tipo Industrial 15A",
        "precio": 2500,
        "enStock": 10,
        "unidad":"x1"
      },
      
      {
        "codigo": "producto42-2",
        "imagen":{
            "img1":"/productos/Toma_hospitalario_Codelca_SKU_1779",
            
      
        },
        "marca": "CODELCA",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Tomacorriente Doble Tipo Hospitalario",
        "precio": 2500,
        "enStock": 10,
        "unidad":"Caja x 10"
      },
      {
        "codigo": "producto42-3",
        "imagen":{
            "img1":"/productos/toma_doble_para_red_regulada_naranja",
            
      
        },
        "marca": "CODELCA",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Tomacorriente de incrustar Doble Polo a Tierra Aislado",
        "precio": 2500,
        "enStock": 10,
        "unidad":"Caja x 10"
      },
      {
        "codigo": "producto42-4",
        "imagen":{
            "img1":"/productos/TOMA_DOBLE_CON_POLO_A_TIERRA_TIPO_AMERICANO",
            
      
        },
        "marca": "CODELCA",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Tomacorriente de Incrustar Doble Polo a Tierra Tipo Americana",
        "precio": 2500,
        "enStock": 10,
        "unidad":"Caja x 10"
      },
      {
        "codigo": "producto42-5",
        "imagen":{
            "img1":"/productos/taco_monopolar_enchufable_dse_de_20a_ref_dse_1020_luminex",
            
      
        },
        "marca": "LUMINEX",
        "categoria":"electricos",
        "subcategoria":"breakers",
        "info": "Breaker Enchufable Un Polo - 20 Amp Luminex",
        "precio": 2500,
        "enStock": 10,
        "unidad":"x1"
      },
      
      {
        "codigo": "producto42-6",
        "imagen":{
            "img1":"/productos/taco_monopolar_enchufable_dse_de_20a_ref_dse_1020_luminex",
            
      
        },
        "marca": "LUMINEX",
        "categoria":"electricos",
        "subcategoria":"breakers",
        "info": "Breaker Enchufable Un Polo - 40 Amp Luminex ",
        "precio": 2500,
        "enStock": 10,
        "unidad":"x1"
      },
      
      {
        "codigo": "producto43",
        "imagen":{
            "img1":"/productos/tablero_para_breakers_enchufable_6_circuitos_bifasico_220v",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"cajas-y-tableros",
        "info": "Tablero Plastico para Breaker Enchufable 8 circuitos sobreponer",
        "precio": 1000,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "producto44",
        "imagen":{
            "img1":"/productos/tablero_para_breakers_enchufable_6_circuitos_bifasico_220v",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"cajas-y-tableros",
        "info": "Tablero Plastico para Breaker Enchufable 4 circuitos sobreponer",
        "precio": 1000,
        "enStock": 10,
        "unidad":"x1"
      },
      
      {
        "codigo": "producto45",
        "imagen":{
            "img1":"/productos/tbc2p_tablero_2_circuitos_enchufable_sobreponer_ciles",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"cajas-y-tableros",
        "info": "Tablero Plastico para Breaker Enchufable 2 circuitos sobreponer",
        "precio": 1000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "producto46",
        "imagen":{
            "img1":"/productos/interruptor_sencillo_de_sobreponer_blanco_astral",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Interruptor Sencillo De Incrustar Linea Astral",
        "precio": 1000,
        "enStock": 10,
        "unidad":"Caja x 10"
      },
      
      {
        "codigo": "producto47",
        "imagen":{
            "img1":"/productos/interruptor_doble_conmutable_sin_polo_blanco_astral",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Interruptor Doble De Incrustar Linea Astral",
        "precio": 1000,
        "enStock": 10,
        "unidad":"Caja x 10"
      },
      
      {
        "codigo": "producto48",
        "imagen":{
            "img1":"/productos/toma_doble_integral_con_polo_blanco_ultra",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Tomacorriente Doble De Incrustar Linea Ultra Marco",
        "precio": 1000,
        "enStock": 10,
        "unidad":"Caja x 10"
      
      
      },
      {
        "codigo": "producto49",
        "imagen":{
            "img1":"/productos/interruptor_sencillo_ultra_blanco_foto_luminiscente",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Interruptor Sencillo De Incrustar Linea Ultra Sin Marco",
        "precio": 1000,
        "enStock": 10,
        "unidad":"Caja x 10"
      
      
      },
      {
        "codigo": "producto50",
        "imagen":{
          "img1":"/productos/interruptor_doble_ultra_blanco_foto_luminiscente",
          
      
      },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Interruptor Doble De Incrustar Linea Ultra Sin Marco",
        "precio": 1000,
        "enStock": 10,
        "unidad":"Caja x 10"
      
      
      },
      {
        "codigo": "producto51",
        "imagen":{
            "img1":"/productos/breaker_enchufable_1_polo_16_amperios",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"breakers",
        "info": "Breaker Enchufable Un Polo - 16 Amp - 6ka",
        "precio": 15000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto52",
        "imagen":{
          "img1":"/productos/breaker_para_riel_1polo_20_amperios",
          
      
      },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"breakers",
        "info": "Breaker Enchufable Un Polo - 20 Amp - 6ka",
        "precio": 15000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto53",
        "imagen":{
          "img1":"/productos/breaker_para_riel_1_polo_32_amperios",
          
      
      },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"breakers",
        "info": "Breaker Enchufable Un Polo - 32 Amp - 6ka",
        "precio": 15000,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "producto54",
        "imagen":{
            "img1":"/productos/breaker_para_riel_1_polo_40_amperios",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"breakers",
        "info": "Breaker Enchufable Un Polo - 40 Amp - 6ka",
        "precio": 1500,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "producto55",
        "imagen":{
          "img1":"/productos/breaker_para_riel_1_polo_50_amperios",
          
      
      },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"breakers",
        "info": "Breaker Enchufable Un Polo - 50 Amp - 6ka",
        "precio": 15000,
        "enStock": 10,
        "unidad":"x1"
      },
      
      {
        "codigo": "producto56",
        "imagen":{
          "img1":"/productos/bc2321_breaker_enchufable_2x32a_120_240v_10ka_ciles1",
          
      
      },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"breakers",
        "info": "Breaker Enchufable Dos Polos - 16 Amp",
        "precio": 1500,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "producto57",
        "imagen":{
            "img1":"/productos/bc2321_breaker_enchufable_2x32a_120_240v_10ka_ciles1",
            "img2":"/productos/bc2501_breaker_enchufable_2x50a_120_240v_10ka_ciles_(1)"
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"breakers",
        "info": "Breaker Enchufable Dos Polos - 20 Amp",
        "precio": 15000,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "producto58",
        "imagen":{
            "img1":"/productos/bc2321_breaker_enchufable_2x32a_120_240v_10ka_ciles1",
            "img2":"/productos/bc2501_breaker_enchufable_2x50a_120_240v_10ka_ciles_(1)"
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"breakers",
        "info": "Breaker Enchufable Dos Polos - 32 Amp",
        "precio": 15000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto59",
        "imagen":{
            "img1":"/productos/bc2401_breaker_enchufable_2x40a_120_240v_10ka_ciles",
            "img2":"/productos/bc2501_breaker_enchufable_2x50a_120_240v_10ka_ciles_(1)"
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"breakers",
        "info": "Breaker Enchufable Dos Polos - 40 Amp ",
        "precio": 15000,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "producto60",
        "imagen":{
            "img1":"/productos/bc2501_breaker_enchufable_2x50a_120_240v_10ka_ciles",
            "img2":"/productos/bc2501_breaker_enchufable_2x50a_120_240v_10ka_ciles_(1)"
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"breakers",
        "info": "Breaker Enchufable Dos Polos - 50 Amp",
        "precio": 1500,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto61",
        "imagen":{
            "img1":"/productos/cinta_aislante_negra_15_metros",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"cintas",
        "info": "Cinta Aislante Profesional Ciles 15mts Negra",
        "precio": 3000,
        "enStock": 10,
        "unidad":"Unidad x 10"
      
      
      },
      {
        "codigo": "producto62",
        "imagen":{
            "img1":"/productos/cinta_aislante_x_5m_negra_ciles_electrox",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"cintas",
        "info": "Cinta Aislante Profesional Ciles 5mts Negra",
        "precio": 1500,
        "enStock": 10,
        "unidad":"Unidad x 10"
      
      },
      {
        "codigo": "producto63",
        "imagen":{
            "img1":"/productos/cinta_aislante_azul_x_15_metros",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"cintas",
        "info": "Cinta Aislante Profesional Ciles 15mts Azul",
        "precio": 1500,
        "enStock": 10,
        "unidad":"Unidad x 10"
      },
      
      {
        "codigo": "producto64",
        "imagen":{
            "img1":"/productos/cinta_aislante_x_5m_azul_ciles",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"cintas",
        "info": "Cinta Aislante Profesional Ciles 5mts Azul",
        "precio": 1500,
        "enStock": 10,
        "unidad":"Unidad x 10"
      
      },
      
      {
        "codigo": "producto65",
        "imagen":{
            "img1":"/productos/cinta_aislante_x_5m_blanca_ciles",
            
      
        },
        "marca": "CILES",
        "categoria":"electricos",
        "subcategoria":"cintas",
        "info": "Cinta Aislante Profesional Ciles 5mts Blanca",
        "precio": 1500,
        "enStock": 10,
        "unidad":"Unidad x 10"
      
      },
      {
        "codigo": "producto66",
        "imagen":{
            "img1":"/productos/interruptor_conmutable_sencillo_blanco",
            
      
        },
        "marca": "OSBLACK",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Interruptor Sencillo De Incrustar Linea Eco",
        "precio": 2500,
        "enStock": 10,
        "unidad":"caja x 10"
      },
      {
        "codigo": "producto67",
        "imagen":{
            "img1":"/productos/interruptor_conmutable_doble_blanco",
            
      
        },
        "marca": "OSBLACK",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Interruptor Doble De Incrustar Linea Eco",
        "precio": 3500,
        "enStock": 10,
        "unidad":"Caja x 10"
      
      },
      {
        "codigo": "producto68",
        "imagen":{
            "img1":"/productos/interruptor_conmutable_triple_blanco",
            
      
        },
        "marca": "OSBLACK",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Interruptor Triple De Incrustar Linea Eco",
        "precio": 4000,
        "enStock": 10,
        "unidad":"Caja x 10"
      },
      {
        "codigo": "producto69",
        "imagen":{
            "img1":"/productos/tomacorriente_doble_osblack",
            
      
        },
        "marca": "OSBLACK",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Tomacorriente Doble De Incrustar Linea Eco",
        "precio": 3500,
        "enStock": 10,
        "unidad":"Caja x 10"
      
      },
      {
        "codigo": "producto70",
        "imagen":{
            "img1":"/productos/toma_interrutor_blanco",
            
      
        },
        "marca": "OSBLACK",
        "categoria":"electricos",
        "subcategoria":"tomas-e-interruptores",
        "info": "Tomacorriente + Interruptor De Incrustar Linea Eco",
        "precio": 3500,
        "enStock": 10,
        "unidad":"Caja x 10"
      },
      
      {
        "codigo": "producto71",
        "imagen":{
            "img1":"/productos/caja_plastica_2x4_blanca",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"electricos",
        "subcategoria":"cajas-y-tableros",
        "info": "Caja Plastica Conduit 2x4 Linea Eco",
        "precio": 330,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "producto71",
        "imagen":{
            "img1":"/productos/caja_octagonal_pvc_retie",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"electricos",
        "subcategoria":"cajas-y-tableros",
        "info": "Caja Plastica Conduit Octagonal Linea Eco",
        "precio": 490,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto71",
        "imagen":{
            "img1":"/productos/CAJA_PVC_4X4",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"electricos",
        "subcategoria":"cajas-y-tableros",
        "info": "Caja Plastica Conduit 4x4 Linea Eco",
        "precio": 500,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto71",
        "imagen":{
            "img1":"/productos/plafon_baquelita_ave",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"electricos",
        "subcategoria":"plafones-y-rosetas",
        "info": "Plafón Plastico E27 de 4 1/2”",
        "precio": 900,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto71",
        "imagen":{
            "img1":"/productos/plafon_de_loza",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"electricos",
        "subcategoria":"plafones-y-rosetas",
        "info": "Plafón de Ceramico E27 de 4 1/2”",
        "precio": 2200,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      // {"categoriasss":"Pegantes y adhesivos"},
      
      {
        "codigo": "producto72",
        "imagen":{
            "img1":"/productos/SINTESOLDA_STANDARD_31_grs",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"pegantes-para-construcción",
        "info": "Pegante Epoxico Para Soldar Sintesolda 24 H",
        "precio": 6500,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto73",
        "imagen":{
            "img1":"/productos/SINTESOLDA_RAPIDO_14_grs",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"pegantes-para-construcción",
        "info": "Pegante Epoxico Para Soldar Sintesolda 10 M",
        "precio": 6900,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "producto74",
        "imagen":{
            "img1":"/productos/SILICONA_SINTECO_50ml_TRANSPARENT_C_BLISTER30",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona Multiusos Transparente 50 ml Sintesolda",
        "precio": 5500,
        "enStock": 10,
        "unidad":"x1"
      },
      
      {
        "codigo": "producto75",
        "imagen":{
            "img1":"/productos/SILICONA_GRIS_SINTESOLDA",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona utomotriz Gris 50 ml Sintesolda",
        "precio": 7500,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto76",
        "imagen":{
            "img1":"/productos/silicona_negra_50_ml_sinteco_itw",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona utomotriz Negra 50 ml Sintesolda",
        "precio": 7500,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto77",
        "imagen":{
            "img1":"/productos/SILICONA_ROJA_SINTESOLDA",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona utomotriz Roja 50 ml Sintesolda",
        "precio": 50000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto78",
        "imagen":{
            "img1":"/productos/SILICONA_SINTECO_28gr_TRANSPARENT_C_BLISTER",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona Antihongos Baño y Cocina Transparente 50ml",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto79",
        "imagen":{
            "img1":"/productos/SILICONA_GRIS_SINTESOLDA",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona utomotriz Gris 70 ml Sintesolda",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "producto80",
        "imagen":{
            "img1":"/productos/silicona_negra_50_ml_sinteco_itw",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona utomotriz Negra 70 ml Sintesolda",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "producto81",
        "imagen":{
            "img1":"/productos/silicona_roja_50_ml_Sinteco_itw",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona utomotriz Roja 70 ml Sintesolda",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto82",
        "imagen":{
            "img1":"/productos/silicona_sanitaria_transparente_cartucho_280_ml_sinteco_itw",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona Antihongos Baño y Cocina Transparente 280ml Sintesolda",
        "precio": 50000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "producto83",
        "imagen":{
            "img1":"/productos/silicona_sanitaria_blanca_cartucho_280_ml_sinteco_itw",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona Antihongos Baño y Cocina Blanca 280ml Sintesolda",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto84",
        "imagen":{
            "img1":"/productos/MASILLA_SINTESOLDA_LIDER_EPOXI_50grs",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"pegantes-para-construcción",
        "info": "Pegante Epoxico En Masilla Profesional 50g",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto85",
        "imagen":{
            "img1":"/productos/MASILLA_SINTESOLDA_LIDER_EPOXI_30grs",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"pegantes-para-construcción",
        "info": "Pegante Epoxico En Masilla Profesional XS 30g",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto86",
        "imagen":{
            "img1":"/productos/MASILLA_SINTESOLDA_LIDER_EPOXI_100grs",
            
      
        },
        "marca": "SINTESOLDA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"pegantes-para-construcción",
        "info": "Pegante Epoxico En Masilla Profesional 100g",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto87",
        "imagen":{
            "img1":"/productos/PEGADIT_SUPERADHESIVO_INSTANTANE_4grs_744_UC",
            
      
        },
        "marca": "PEGADIT",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"pegantes-para-construcción",
        "info": "Pegante Instantaneo Liquido 4g Pegadit",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto88",
        "imagen":{
            "img1":"/productos/PEGADIT_TURBOMAX_165grs",
            
      
        },
        "marca": "PEGADIT",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Sellador Multiusos 165g Pegadit",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "producto89",
        "imagen":{
            "img1":"/productos/SILICONA_PEGADIT_VIDRIO_ALUM_50mlTRANSP",
            
      
        },
        "marca": "PEGADIT",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona Antihongos Vidrio y Aluminio Transparente 50ml Pegadit",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto90",
        "imagen":{
            "img1":"/productos/SILICONA_PEGADIT_BAÑOS_COCINA_BLANCA50ml",
            
      
        },
        "marca": "PEGADIT",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona Antihongos Baño y Cocina Transparente 50ml Pegadit",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "producto91",
        "imagen":{
            "img1":"/productos/SILICONA_PEGADIT_VIDRIO_ALUM_280ml_TRANSP",
            
      
        },
        "marca": "PEGADIT",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Silicona Antihongos Vidrio y Aluminio Transparente 280ml Pegadit",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/PISTOLA_P_SILICONA_CALAFATEO_MULTIMARCAAZUL_SENC.jpg",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"pegantes-y-adhesivos",
        "subcategoria":"siliconas-y-selladores",
        "info": "Pistola de Calafateo Linea Eco Azul",
        "precio": 3800,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/PISTOLA_P_SILICONA_CALAFATEO_MULTIMARCA_TUBO_GRIS.jpg",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"siliconas-y-selladores",
        "info": "Pistola de Calafateo Profesional",
        "precio": 14500,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      // {"categoriasss":"Pinturasss"},
      
      {
        "codigo": "producto92",
        "imagen":{
            "img1":"/productos/Rodillo_Goya_Felpa_Junior_3",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Rodillo Goya Felpa Junior 3”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Caja x 6"
      
      },
      {
        "codigo": "producto93",
        "imagen":{
            "img1":"/productos/Rodillo_Goya_Felpa_Junior_4",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Rodillo Goya Felpa Junior 4",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Caja x 6"
      
      },
      {
        "codigo": "producto94",
        "imagen":{
            "img1":"/productos/Rodillo_Goya_Felpa_Junior_6",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Rodillo Goya Felpa Junior 6”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 6"
      
      },
      {
        "codigo": "producto95",
        "imagen":{
            "img1":"/productos/Rodillo_Goya_Acrilica_Profesional_9",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Rodillo Goya Felpa Acrilica Profesional 9”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 6"
      
      },
      
      {
        "codigo": "producto96",
        "imagen":{
            "img1":"/productos/Rodillo_Goya_Felpa_Acrilico_C_Repuesto_9",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Rodillo Goya Felpa Acrilica Profesional 9” Con Repuesto",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 6"
      
      },
      
      {
        "codigo": "producto97",
        "imagen":{
            "img1":"/productos/Rodillo_Goya_Epoxico_9",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Rodillo Epoxico Goya 9”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 6"
      
      },
      {
        "codigo": "producto98",
        "imagen":{
            "img1":"/productos/BROCHA_PROFESI_MONA_C_AZUL_GOYA_1_2",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Brocha Profesional Mona C/Azul GOYA 1/2”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 12"
      
      },
      {
        "codigo": "producto99",
        "imagen":{
            "img1":"/productos/brocha_profesional_mona_1_mango_azul_ref_1270_goya",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Brocha Profesional Mona C/Azul GOYA 1”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 12"
      
      },
      {
        "codigo": "producto100",
        "imagen":{
            "img1":"/productos/BROCHA_ROFESI_MONA_C_AZUL_GOYA_1_1_2",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Brocha Profesional Mona C/Azul GOYA 1 1/2”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 12"
      
      },
      {
        "codigo": "producto101",
        "imagen":{
            "img1":"/productos/Brocha_2_goya",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "RBrocha Profesional Mona C/Azul GOYA 2”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 12"
      
      },
      {
        "codigo": "producto102",
        "imagen":{
            "img1":"/productos/BROCHA_PROFESI_MONA_C_AZUL_GOYA_2_1_2",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Brocha Profesional Mona C/Azul GOYA 2 1/2”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 12"
      
      },
      {
        "codigo": "producto103",
        "imagen":{
            "img1":"/productos/BROCHA_PROFESI_MONA_C_AZUL_GOYA_3",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Brocha Profesional Mona C/Azul GOYA 3”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 12"
      
      },
      
      {
        "codigo": "producto105",
        "imagen":{
            "img1":"/productos/BROCHA_PROFESI_MONA_C_AZUL_GOYA_4",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Brocha Profesional Mona C/Azul GOYA 4”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 12"
      
      },
      {
        "codigo": "producto106",
        "imagen":{
            "img1":"/productos/BROCHA_PROFESI_MONA_C_AZUL_GOYA_5",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Brocha Profesional Mona C/Azul GOYA 5”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 12"
      
      },
      {
        "codigo": "producto107",
        "imagen":{
            "img1":"/productos/brocha_6_goya",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Brocha Profesional Mona C/Azul GOYA 6”",
        "precio": 5000,
        "enStock": 10,
        "unidad":"Paquete x 12"
      
      },
      {
        "codigo": "producto108",
        "imagen":{
            "img1":"/productos/Bandeja_Plastica_Goya",
            
      
        },
        "marca": "GOYA",
        "categoria":"pinturas",
        "subcategoria":"herramientas-para-pintar",
        "info": "Bandeja Plastica",
        "precio": 5000,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      
      // {"categoriasss":"fijaciones"},
      
      
      // {"categoriasss":"Griferia y plomeriaaa"},
      
      {
        "codigo": "320010142",
        "imagen":{
            "img1":"/productos/Acople_Manguera_Sanit",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Acople Plastico Lavamanos 40 Cm",
        "precio": 1440,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "320010143",
        "imagen":{
            "img1":"/productos/Acople_Manguera_Sanit",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Acople Plastico Sanitario 40 Cm",
        "precio": 1440,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "320010101",
        "imagen":{
            "img1":"/productos/agua_stop_plastico_rioplast",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Agua Stop PlasticoO Economizador Blanco",
        "precio": 1380,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "320010139",
        "imagen":{
            "img1":"/productos/agua_stop_vulcanizado_rioplas16",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Agua Stop Vulcanizado Con Soporte",
        "precio": 3800,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "320010310",
        "imagen":{
            "img1":"/productos/canastilla_4_lavaplatos_inoxidable_plastico_1",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-cocinas",
        "info": "Canastilla Filtro Lavaplatos 4",
        "precio": 5061,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "320010739",
        "imagen":{
            "img1":"/productos/Conjunto_Griferia_Sanitario_Con_Valvula_Hidrostatica",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Conjunto Griferia Sanitario Con Valvula Hidrostatica",
        "precio": 25231,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "320010708",
        "imagen":{
            "img1":"/productos/Conjunto_Griferia_Sanitaria_Valvula_Entrada_Grecco_17_Cm",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Conjunto Griferia Sanitaria Valvula Entrada Grecco 17 Cm",
        "precio": 10191,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "320012311",
        "imagen":{
            "img1":"/productos/Desague_Lavamanos_Tapa_Cromo",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Desague Lavamanos Tapa Cromo",
        "precio": 2878,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "320010434",
        "imagen":{
            "img1":"#",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"duchas",
        "info": "Ducha Acrilica Blanca",
        "precio": 2954,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "320010402",
        "imagen":{
            "img1":"/productos/Ducha_acrilica_cromada_rioplast",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"duchas",
        "info": "Ducha Acrilica Cromada",
        "precio": 7219,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "320010604",
        "imagen":{
            "img1":"/productos/Filtro_Canastilla_Lavaplatos_Sello_4_Blanco",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-cocinas",
        "info": "Filtro Canastilla Lavaplatos Sello 4 Blanco",
        "precio": 930,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "320010605",
        "imagen":{
            "img1":"/productos/Filtro_Canastilla_Lavaplatos_Sello_4_Cromo",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-cocinas",
        "info": "Filtro Canastilla Lavaplatos Sello 4 Cromo",
        "precio": 3588,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "350010701",
        "imagen":{
            "img1":"/productos/grapas_lavamanos_x_2_unidades",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Grapa Lavamanos Blanca",
        "precio": 1511,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "350010802",
        "imagen":{
            "img1":"/productos/Herraje_Sanitario_Plastico_Dos_Piezas",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Herraje Sanitario Plastico Dos Piezas",
        "precio": 1342,
        "enStock": 10,
        "unidad":"Unidad x 2"
      
      },
      {
        "codigo": "320011221",
        "imagen":{
            "img1":"/productos/Llave_Jardin_Manguera_Blanca",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"jardin-y-exteriores",
        "info": "Llave Jardin Manguera Blanca",
        "precio": 1999,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "320011205",
        "imagen":{
            "img1":"/productos/Llave_Jardin_Manguera_Gris",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"jardin-y-exteriores",
        "info": "Llave Jardin Manguera Gris",
        "precio": 1925,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "320011209",
        "imagen":{
            "img1":"/productos/Llave_Lavamanos_Blanca",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"griferia-lavamanos",
        "info": "Llave Lavamanos Blanca",
        "precio": 5547,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "320011211",
        "imagen":{
            "img1":"/productos/Llave_Lavamanos_Cromo",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"griferia-lavamanos",
        "info": "Llave Lavamanos Cromo",
        "precio": 7675,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      
      {
        "codigo": "320011317",
        "imagen":{
            "img1":"/productos/Manija_Tanque_Push_Superior_38_mm",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Manija Tanque Push Superior 38 mm",
        "precio": 6498,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "320011312",
        "imagen":{
            "img1":"/productos/Manija_Tanque_Sanitario_Blanca",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Manija Tanque Sanitario Blanca",
        "precio": 1805,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "320011314",
        "imagen":{
            "img1":"/productos/manija_tanque_sanit",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Manija Tanque Sanitario Cromada",
        "precio": 2710,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "320011313",
        "imagen":{
            "img1":"/productos/Manija_Tanque_Sanitario_Transparente",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Manija Tanque Sanitario Transparente",
        "precio": 1804,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "350011701",
        "imagen":{
            "img1":"/productos/Porta_Rollo_Plastico",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Porta Rollo Plastico",
        "precio": 952,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "320011907",
        "imagen":{
            "img1":"/productos/racor_manguera_plastico",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"jardin-y-exteriores",
        "info": "Racor Plastico Manguera",
        "precio": 450,
        "enStock": 10,
        "unidad":"x1"
      
      
      },
      {
        "codigo": "320012042",
        "imagen":{
            "img1":"/productos/#",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Rejilla Cuadrada Perforada 3X2",
        "precio": 1739,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "320012037",
        "imagen":{
            "img1":"Rejilla_piso_cuadrada_PVC_ranurada",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Rejilla Cuadrada Ranurada 3X2",
        "precio": 1739,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "320012009",
        "imagen":{
            "img1":"/productos/Rejilla_Plástica_Anticucaracha_3x1_2",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Rejilla Sosco 3X 1 1/2",
        "precio": 1525,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "320012014",
        "imagen":{
            "img1":"/productos/REJILLA_PLÁSTICA_RANURADA_3X2",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Rejilla Sosco 3X2 Ranurado",
        "precio": 1614,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320012012",
        "imagen":{
            "img1":"/productos/Rejilla_Perforada_3X2",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Rejilla Sosco 3X2 Perforado",
        "precio": 1614,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320012030",
        "imagen":{
            "img1":"/productos/rejilla_4_x_3_sosco_corriente",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Rejilla Sosco 4X3 Ranurada",
        "precio": 2613,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320012051",
        "imagen":{
            "img1":"/productos/rejilla_perforada_4x3",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Rejilla Sosco 5X4 Perforado",
        "precio": 4235,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320012046",
        "imagen":{
            "img1":"/productos/rejilla_4_x_3_sosco_corriente",
            
      
        },
        "marca": "GLOBY",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Rejilla Sosco 5X4 Ranurado",
        "precio": 5040,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "Producto400",
        "imagen":{
            "img1":"/productos/SIFON_FLEXIBLE_GLOBY",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-cocinas",
        "info": "Sifon Acordeon Mixto Blanco",
        "precio": 5314,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "3320012026",
        "imagen":{
            "img1":"/productos/Sifón_Lavamanos_tapa_Desagüe_Cromo_ó_Blanca_Rioplast",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Sifon Lavamanos Tapa Desague Cromo",
        "precio": 5169,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320012002",
        "imagen":{
            "img1":"/productos/sifon_en_p_blanco_rioplast",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-cocinas",
        "info": "Sifon Lavaplatos En P  1 1/2 O 1 1/4 Blanco",
        "precio": 3567,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320012020",
        "imagen":{
            "img1":"/productos/sifon_en_p_gris_rioplast",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-cocinas",
        "info": "Sifon Lavaplatos En P  1 1/2 O 1 1/4 Gris",
        "precio": 3058,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320012138",
        "imagen":{
            "img1":"/productos/tapa_asiento_basicox3_blanco",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Tapa Asiento Cubierta Total Blanca",
        "precio": 15035,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320012102",
        "imagen":{
            "img1":"/productos/tapa_registro_15_x_15_Rioplast",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"jardin-y-exteriores",
        "info": "Tapa Registro 15X15",
        "precio": 4647,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320012110",
        "imagen":{
            "img1":"/productos/tornillo_sanitario_plastico_blanco",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Tornillo Cisterna",
        "precio": 337,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "350032101",
        "imagen":{
            "img1":"/productos/tranca_puerta_rioplast",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"Soluciones para el hogar",
        "info": "Tranca Puerta",
        "precio": 1005,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320010120",
        "imagen":{
            "img1":"/productos/Válvula_de_Entrada_16_17_cm_Rioplast",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Valvula De Entrada Grecco 17 Cm",
        "precio": 3344,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320012331",
        "imagen":{
            "img1":"#",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Valvula De Entrada Hidrostatica",
        "precio": 11050,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320010118",
        "imagen":{
            "img1":"/productos/Válvula_de_Salida_con_Agua_Stop_Plástico_y_Cono_Grueso_Rioplast",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Valvula De Salida Con Aguastop Plastico",
        "precio": 5513,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320012321",
        "imagen":{
            "img1":"/productos/valvula_pozuelo_pvc_sin_sosco_rioplast",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Valvula Pozuelo Sin Sosco",
        "precio": 1048,
        "enStock": 10,
        "unidad":"x1"
      },
      {
        "codigo": "320012341",
        "imagen":{
            "img1":"/productos/valvula_regulacion_sin_acople_rioplast",
            
      
        },
        "marca": "RIOPLAST",
        "categoria":"griferia-y-plomeria",
        "subcategoria":"soluciones-para-baños",
        "info": "Valvula Regulacion Sin Acople",
        "precio": 2970,
        "enStock": 10,
        "unidad":"x1"
      },
      
      
      
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Palustre_mango_plastico",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Palustre Mango Plastico de 6",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Palustre_mango_plastico",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Palustre Mango Plastico de 7",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Palustre_mango_plastico",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Palustre Mango Plastico de 8",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Palustre_mango_plastico",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Palustre Mango Plastico de 9",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Palustre_mango_plastico",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Palustre Mango Plastico de 10",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/palustre_9_pulgadas_mango_madera",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Palustre Mango Madera de 6",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/palustre_9_pulgadas_mango_madera",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Palustre Mango Madera de 7",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/palustre_9_pulgadas_mango_madera",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Palustre Mango Madera de 8",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/palustre_9_pulgadas_mango_madera",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Palustre Mango Madera de 9",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/palustre_9_pulgadas_mango_madera",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Palustre Mango Madera de 10",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Llana_Lisa_mango_plastico",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Llana Lisa Mango Plastico",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Llana_Lisa_mango_madera",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Llana Lisa Mango Madera",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Llana_Dentada_mango_madera",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Llana Dentada Mango Madera",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Llana_Dentada_mango_plastico",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Llana Dentada Mango Plastico",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Espatula_metalica_mango_plastico_2",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Espatula Metalica Mango Plastico de 2",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Espatula_metalica_mango_plastico_3",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Espatula Metalica Mango Plastico de 3",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Espatula_metalica_mango_plastico_4",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Espatula Metalica Mango Plastico de 4",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Espatula_metalica_mango_plastico_5",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Espatula Metalica Mango Plastico de 5",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Espatula_metalica_mango_madera_2",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Espatula Metalica Mango Madera de 2",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Espatula_metalica_mango_madera_3",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Espatula Metalica Mango Madera de 3",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Espatula_metalica_mango_madera_4",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Espatula Metalica Mango Madera de 4",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Espatula_metalica_mango_madera_5",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Espatula Metalica Mango Madera de 5",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Martillo_pequeño",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Martillo Pequeño 8 Oz.",
        "precio": 4950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"..productos/Martillo_fibra_vidrio_16oz",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Martillo Mango Metal 16 Oz",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/martillo_mango_madera",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Martillo Mango Madera 16 Oz",
        "precio": 1950,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Lima_Triangular",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"limas-y-escofinas",
        "info": "Lima Triangular Linea Eco",
        "precio": 2500,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/cepillo_alambre_espatula",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"herramientas-de-acabado",
        "info": "Cepillo de Acero Con Espatula Metalica",
        "precio": 2700,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/ALICATE_CRESCENT",
            
      
        },
        "marca": "CRESCENT",
        "categoria":"herramientas-manuales",
        "subcategoria":"pinzas-y-alicates",
        "info": "Pinza Crescent",
        "precio": 14500,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Hoja_segueta_nicholson",
            
      
        },
        "marca": "NICHOLSON",
        "categoria":"herramientas-manuales",
        "subcategoria":"herramientas-manuales-de-corte",
        "info": "Hoja de Segueta Nicholson",
        "precio": 3200,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Hoja_segueta_nicholson",
            
      
        },
        "marca": "SECURITY",
        "categoria":"herramientas-manuales",
        "subcategoria":"herramientas-manuales-de-corte",
        "info": "Hoja de Segueta Security",
        "precio": 3800,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/cincel_puntero_punta_con_mango_protector",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Cincel de Punta Mango de Caucho",
        "precio": 3800,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/cincel_punta_pala",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"albañileria-y-construcción",
        "info": "Cincel de Pala Mango de Caucho",
        "precio": 3800,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/FLEXOMETRO_LUFKIN_L510CME_x3mts_NARANJA",
            
      
        },
        "marca": "LUFKIN-CRESCENT",
        "categoria":"herramientas-manuales",
        "subcategoria":"herramientas-de-medición",
        "info": "FLEXOMETRO -LUFKIN-L510CME x3mts NARANJA",
        "precio": 3800,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/FLEXOMETRO_REFORZADO_5M",
            
      
        },
        "marca": "UNIFLEX",
        "categoria":"herramientas-manuales",
        "subcategoria":"herramientas-de-medición",
        "info": "FLEXOMETRO REFORZADO 5M",
        "precio": 3800,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/FLEXOMETRO_LUFKIN_L525CME_x8mts_NARANJA",
            
      
        },
        "marca": "LUFKIN CRESCENT",
        "categoria":"herramientas-manuales",
        "subcategoria":"herramientas-de-medición",
        "info": "FLEXOMETRO LUFKIN L525CME x8mts NARANJA",
        "precio": 3800,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/JGO_DESTORNILLADOR_GOLPE_UYUSTOOLS_6pzsMIXTA",
            
      
        },
        "marca": "UYUSTOOLS",
        "categoria":"herramientas-manuales",
        "subcategoria":"destornilladores",
        "info": "Juego Destornillador de Golpe x 6",
        "precio": 11500,
        "enStock": 10,
        "unidad":"x1"
      
      },
      
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/MARCO_DE_SIERRA_NICHOLSON_PINTADO",
            
      
        },
        "marca": "NICHOLSON-CRESCENT",
        "categoria":"herramientas-manuales",
        "subcategoria":"herramientas-manuales-de-corte",
        "info": "Marco de Segueta Metal",
        "precio": 7800,
        "enStock": 10,
        "unidad":"x1"
      
      },
      {
        "codigo": "producto38",
        "imagen":{
            "img1":"/productos/Hombre_Solo",
            
      
        },
        "marca": "MULTIMARCA",
        "categoria":"herramientas-manuales",
        "subcategoria":"pinzas-y-alicates",
        "info": "Alicate Hombresolo 7",
        "precio": 8700,
        "enStock": 10,
        "unidad":"x1"
      
      }
      
      ]
      

}

export default data;