describe("Monopoly",function(){
	
	var partida = new Partida()
	var usuarios = []
	
	for (var i=0; i<10; i++)
	{
		usuarios[i] = new Usuario("Usuario"+(i+1))
	}
	
	beforeEach(function(){
		tablero = partida.tablero
		dados = partida.dados
    });

    describe("Crear la partida",function(){
		it("debe crearse un tablero",function(){
			expect(tablero).toBeDefined();
		});
		
		it("debería existir 40 casillas",function(){
			expect(tablero.numeroCasillas).toEqual(40);
		});
	});
	
	describe("Comprobar la salida",function(){
		it("en la casilla[0] debería estar la casilla de Salida ",function(){
			expect(tablero.casillas[0].tema.nombre).toEqual('Salida');
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[1] debería estar la calle con nombre: Ronda de Valencia",function(){
			expect(tablero.casillas[1].tema.nombre).toEqual('Ronda de Valencia');
			expect(tablero.casillas[1].tema.precio).toEqual(60);
		});
   	});
	   
	describe("Comprobar la Comunidad",function(){
		it("en la casilla[2] debe haber una casilla de Comunidad",function(){
			expect(tablero.casillas[2].tema.nombre).toEqual('Comunidad');
			expect(tablero.casillas[1].tema.precio).toEqual(60);
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[3] debería estar la calle con nombre: Plaza Lavapies",function(){
			expect(tablero.casillas[3].tema.nombre).toEqual('Plaza Lavapies');
		});
   	});
	
	describe("Comprobar el Impuesto",function(){
		it("en la casilla[4] debe haber una casilla de Impuesto con nombre: Impuesto de Capital",function(){
			expect(tablero.casillas[4].tema.nombre).toEqual('Impuesto de Capital');
		});
   	});
	   
	describe("Comprobar la Comunidad",function(){
		it("en la casilla[5] debe haber una casilla de Estación: Estación de Goya",function(){
			expect(tablero.casillas[5].tema.nombre).toEqual('Estación de Goya');
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[6] debería estar la calle con nombre: Glorieta Cuatro Caminos",function(){
			expect(tablero.casillas[6].tema.nombre).toEqual('Glorieta Cuatro Caminos');
		});
   	});
	   
	describe("Comprobar la Suerte",function(){
		it("en la casilla[7] debería estar la casilla de Suerte",function(){
			expect(tablero.casillas[7].tema.nombre).toEqual('Suerte');
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[8] debería estar la calle con nombre: Avenida Reina Victoria",function(){
			expect(tablero.casillas[8].tema.nombre).toEqual('Avenida Reina Victoria');
		});
   	});
	   
	describe("Comprobar la Calle",function(){
		it("en la casilla[9] debería estar la calle con nombre: Calle Bravo Murillo",function(){
			expect(tablero.casillas[9].tema.nombre).toEqual('Calle Bravo Murillo');
		});
   	});
	   
	describe("Comprobar la Cárcel",function(){
		it("en la casilla[10] debería estar la casilla de Carcel",function(){
			expect(tablero.casillas[10].tema.nombre).toEqual('Carcel');
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[11] debería estar la calle con nombre: Glorieta de Bilbao",function(){
			expect(tablero.casillas[11].tema.nombre).toEqual('Glorieta de Bilbao');
		});
   	});
	
	describe("Comprobar la Empresa",function(){
		it("en la casilla[12] debe haber una casilla de Empresa: Compañia de Electricidad",function(){
			expect(tablero.casillas[12].tema.nombre).toEqual('Compañia de Electricidad');
		});
   	});
	   
	describe("Comprobar la Calle",function(){
		it("en la casilla[13] debería estar la calle con nombre: Calle Alberto Aguilera",function(){
			expect(tablero.casillas[13].tema.nombre).toEqual('Calle Alberto Aguilera');
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[14] debería estar la calle con nombre: Calle Fuencarral",function(){
			expect(tablero.casillas[14].tema.nombre).toEqual('Calle Fuencarral');
		});
   	});
	
	describe("Comprobar la Estación",function(){
		it("en la casilla[15] debe haber una casilla de Estación: Estación de las Delicias",function(){
			expect(tablero.casillas[15].tema.nombre).toEqual('Estación de las Delicias');
		});
   	});
	   
	describe("Comprobar la Calle",function(){
		it("en la casilla[16] debería estar la calle con nombre: Avenida Felipe II",function(){
			expect(tablero.casillas[16].tema.nombre).toEqual('Avenida Felipe II');
		});
   	});
	   
	describe("Comprobar la Comunidad",function(){
		it("en la casilla[17] debe haber una casilla de Comunidad",function(){
			expect(tablero.casillas[17].tema.nombre).toEqual('Comunidad');
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[18] debería estar la calle con nombre: Calle Velázquez",function(){
			expect(tablero.casillas[18].tema.nombre).toEqual('Calle Velázquez');
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[19] debería estar la calle con nombre: Calle Serrano",function(){
			expect(tablero.casillas[19].tema.nombre).toEqual('Calle Serrano');
		});
   	});
	
	describe("Comprobar la Cárcel",function(){
		it("en la casilla[20] debería estar la casilla de Parking",function(){
			expect(tablero.casillas[20].tema.nombre).toEqual('Parking Gratuito');
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[21] debería estar la calle con nombre: Avenida de América",function(){
			expect(tablero.casillas[21].tema.nombre).toEqual('Avenida de América');
		});
   	});
	
	describe("Comprobar la Suerte",function(){
		it("en la casilla[22] debería estar la casilla de Suerte",function(){
			expect(tablero.casillas[22].tema.nombre).toEqual('Suerte');
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[23] debería estar la calle con nombre: Calle María de Molina",function(){
			expect(tablero.casillas[23].tema.nombre).toEqual('Calle María de Molina');
		});
   	});
	   
	describe("Comprobar la Calle",function(){
		it("en la casilla[24] debería estar la calle con nombre: Calle Cea Bermúdez",function(){
			expect(tablero.casillas[24].tema.nombre).toEqual('Calle Cea Bermúdez');
		});
   	});
	
	describe("Comprobar la Estación",function(){
		it("en la casilla[25] debe haber una casilla de Estación: Estación de Mediodía",function(){
			expect(tablero.casillas[25].tema.nombre).toEqual('Estación de Mediodía');
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[26] debería estar la calle con nombre: Avenida de los Reyes Católicos",function(){
			expect(tablero.casillas[26].tema.nombre).toEqual('Avenida de los Reyes Católicos');
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[27] debería estar la calle con nombre: Calle Bailén",function(){
			expect(tablero.casillas[27].tema.nombre).toEqual('Calle Bailén');
		});
   	});
	   
	describe("Comprobar la Empresa",function(){
		it("en la casilla[28] debe haber una casilla de Empresa: Compañia del Agua",function(){
			expect(tablero.casillas[28].tema.nombre).toEqual('Compañia del Agua');
		});
   	});
	   
	describe("Comprobar la Calle",function(){
		it("en la casilla[29] debería estar la calle con nombre: Plaza de España",function(){
			expect(tablero.casillas[29].tema.nombre).toEqual('Plaza de España');
		});
   	});
	   
	describe("Comprobar la Cárcel",function(){
		it("en la casilla[30] debería estar la casilla de MultaCarcel",function(){
			expect(tablero.casillas[30].tema.nombre).toEqual('MultaCarcel');
		});
   	});
	   
	describe("Comprobar la Calle",function(){
		it("en la casilla[31] debería estar la calle con nombre: Puerta del Sol",function(){
			expect(tablero.casillas[31].tema.nombre).toEqual('Puerta del Sol');
		});
   	});
	   
	describe("Comprobar la Calle",function(){
		it("en la casilla[32] debería estar la calle con nombre: Calle Alcalá",function(){
			expect(tablero.casillas[32].tema.nombre).toEqual('Calle Alcalá');
		});
   	});
	
	describe("Comprobar la Comunidad",function(){
		it("en la casilla[33] debe haber una casilla de Comunidad",function(){
			expect(tablero.casillas[33].tema.nombre).toEqual('Comunidad');
		});
   	});
	   
	describe("Comprobar la Calle",function(){
		it("en la casilla[34] debería estar la calle con nombre: Gran Vía",function(){
			expect(tablero.casillas[34].tema.nombre).toEqual('Gran Vía');
		});
   	});
	   
	describe("Comprobar la Estación",function(){
		it("en la casilla[35] debe haber una casilla de Estación: Estación del Norte",function(){
			expect(tablero.casillas[35].tema.nombre).toEqual('Estación del Norte');
		});
   	});
	   
	describe("Comprobar la Suerte",function(){
		it("en la casilla[36] debería estar la casilla de Suerte",function(){
			expect(tablero.casillas[36].tema.nombre).toEqual('Suerte');
		});
   	});
	
	describe("Comprobar la Calle",function(){
		it("en la casilla[37] debería estar la calle con nombre: Paseo de la Castellana",function(){
			expect(tablero.casillas[37].tema.nombre).toEqual('Paseo de la Castellana');
		});
   	});
	
	describe("Comprobar el Impuesto",function(){
		it("en la casilla[38] debe haber una casilla de Impuesto con nombre: Impuesto de Lujo",function(){
			expect(tablero.casillas[38].tema.nombre).toEqual('Impuesto de Lujo');
		});
   	});
	   
	describe("Comprobar la Calle",function(){
		it("en la casilla[39] debería estar la calle con nombre: Paseo del Prado",function(){
			expect(tablero.casillas[39].tema.nombre).toEqual('Paseo del Prado');
		});
   	});
	
	/*Está por terminar*/
	
	describe("Comprobar Barrios",function(){
				
		it("debe haber 1 barrio Marrón con 2 calles",function(){
			var color=0;
			
			for (var i=0; i<40; i++)
			{
				if (tablero.casillas[i].tema.color=="Marron")
					color=color+1;
			}
			
			expect(color).toEqual(2);
		});
		
		it("debe haber 1 barrio AzulClaro con 3 calles",function(){
			var color=0;
			
			for (var i=0; i<40; i++)
			{
				if (tablero.casillas[i].tema.color=="AzulClaro")
					color=color+1;
			}
			
			expect(color).toEqual(3);
		});
		
		it("debe haber 1 barrio Rosa con 3 calles",function(){
			var color=0;
			
			for (var i=0; i<40; i++)
			{
				if (tablero.casillas[i].tema.color=="Rosa")
					color=color+1;
			}
			
			expect(color).toEqual(3);
		});
		
		it("debe haber 1 barrio Naranja con 3 calles",function(){
			var color=0;
			
			for (var i=0; i<40; i++)
			{
				if (tablero.casillas[i].tema.color=="Naranja")
					color=color+1;
			}
			
			expect(color).toEqual(3);
		});
		
		it("debe haber 1 barrio Rojo con 3 calles",function(){
			var color=0;
			
			for (var i=0; i<40; i++)
			{
				if (tablero.casillas[i].tema.color=="Rojo")
					color=color+1;
			}
			
			expect(color).toEqual(3);
		});
		
		it("debe haber 1 barrio Amarillo con 3 calles",function(){
			var color=0;
			
			for (var i=0; i<40; i++)
			{
				if (tablero.casillas[i].tema.color=="Amarillo")
					color=color+1;
			}
			
			expect(color).toEqual(3);
		});
		
		it("debe haber 1 barrio Verde con 3 calles",function(){
			var color=0;
			
			for (var i=0; i<40; i++)
			{
				if (tablero.casillas[i].tema.color=="Verde")
					color=color+1;
			}
			
			expect(color).toEqual(3);
		});
		
		it("debe haber 1 barrio AzulOscuro con 2 calles",function(){
			var color=0;
			
			for (var i=0; i<40; i++)
			{
				if (tablero.casillas[i].tema.color=="AzulOscuro")
					color=color+1;
			}
			
			expect(color).toEqual(2);
		});
	});
	
	describe("Comprobar los Dados",function(){
		
		it("Lanzamos un dado 100 veces y el valor siempre tiene que estar entre 1 y 6 (incluidos)",function(){
			for (var i=0; i<100; i++)
			{
				dados.tirarDados();
				expect(dados.dado1).toBeGreaterThan(0);
				expect(dados.dado1).toBeLessThan(7);
			}
		});
		
		it("Lanzamos los 2 dados 100 veces y el valor de la suma siempre tiene que estar entre 2 y 12 (incluidos)",function(){
			for (var i=0; i<100; i++)
			{
				dados.tirarDados();
				expect(dados.resultado).toBeGreaterThan(1);
				expect(dados.resultado).toBeLessThan(13);
			}
		});
   	});
	   
	describe("Comprobar los Participantes",function(){
		
		it("El juego permite añadir 6 jugadores como máximo",function(){
			for (var i=0; i<10; i++)
				partida.agregarParticipante(usuarios[i])
			expect(partida.fichas.length).toEqual(6);				
		});
   	});
	
	describe("Comprobar las Fichas",function(){
		
		it("Todas las fichas tienen asociado un usuario",function(){
			for (var i=0; i<partida.fichas.length; i++)
				expect(partida.fichas[i].usuario).toEqual(usuarios[i]);		
		});
		
		it("Todas las fichas tienen un saldo inicial de 1500 pelotis",function(){
			for (var i=0; i<partida.fichas.length; i++)
				expect(partida.fichas[i].dinero).toEqual(1500);		
		});
		
		it("Todas las fichas tienen asociada una figura distinta",function(){
			for (var i=0; i<partida.fichas.length; i++)
				for (var j=0; j<partida.fichas.length; j++)
				{
					if(i==j)
						expect(partida.fichas[i].figura).toEqual(partida.fichas[j].figura);
					else
						expect(partida.fichas[i].figura).not.toEqual(partida.fichas[j].figura);
				}
		});
		
		it("Todas las fichas pueden lanzar el dado y cambiar de posición",function(){
			var aux
			
			for (var i=0; i<partida.fichas.length; i++)
			{
				aux = partida.fichas[i].posicion;
				partida.fichas[i].lanzar();
				expect(partida.fichas[i].posicion).not.toEqual(aux)	
			}	
		});
		
		it("La ficha siempre se mueve dentro de los límites del tablero (lanza 100 veces)",function(){
			for (var i=0; i<100; i++)
			{
				partida.fichas[0].lanzar();
				expect(partida.fichas[0].posicion).toBeGreaterThan(-1);
				expect(partida.fichas[0].posicion).toBeLessThan(40);
			}	
		});
		
		it("Si la ficha lanza 3 dobles seguidos va a la carcel",function(){
			var aux = 0
			
			for (var i=0; i<1000; i++)
			{
				partida.fichas[0].lanzar();
				
				if(partida.dados.esDoble())
				{
					aux++
					if(aux==3)
					{
						expect(partida.fichas[0].posicion).toEqual(10);
						aux=0;
					}
				}
				else
				{
					aux=0
				}
			}	
		});
   	});
})