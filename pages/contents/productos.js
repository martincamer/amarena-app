import pack_uno from '../../public/img/productos/pack/7.png';
import pack_dos from '../../public/img/productos/pack/8.png';
import pack_tres from '../../public/img/productos/pack/9.png';
import pack_cuatro from '../../public/img/productos/pack/10.png';
import pack_cinco from '../../public/img/productos/pack/11.png';
import pack_seis from '../../public/img/productos/pack/12.png';
//productos
import producto_uno from '../../public/img/productos/producto/5.png';
import producto_dos from '../../public/img/productos/producto/6.png';
import producto_tres from '../../public/img/productos/producto/4.png';
import producto_cuatro from '../../public/img/productos/producto/3.png';
import producto_cinco from '../../public/img/productos/producto/2.png';

const PRODUCTOS = {
	package: [
		//uno
		{
			id: '20c652e5-04db-418c-a0f7-ca9acf6cf568 ',
			nombre: 'pack gestion de redes basico',
			imagen: pack_uno,
			precio: '10.000',
			descripcion: [
				{
					comentario:
						'Deja tu packaging hermoso, te propongo este pack que te va a encantar ♥',
				},
				{
					comentario_dos: 'No dudes en empezar a emprender y con mucha onda! ♥',
				},
			],
			lista: [
				{
					titulo: '6 publicaciones mensuales',
				},
				{
					titulo: '10 historias mensuales',
				},
				{
					titulo: 'reunión de asesoría mensual de 30 min.',
				},
			],
			url: 'pack-gestion-de-redes-basico',
		},
		//dos
		{
			id: 'dbe8fe48-927c-4e29-b106-430856ce1e72',
			nombre: 'pack gestion de redes medio',
			imagen: pack_dos,
			precio: '10.000',
			descripcion: [
				{
					comentario:
						'Deja tu packaging hermoso, te propongo este pack que te va a encantar ♥',
				},
			],
			lista: [
				{ titulo: '9 publicaciones mensuales' },
				{ titulo: '15 historias mensuales' },
				{ titulo: 'reunión de asesoría mensual de 30 min' },
				{ titulo: 'sorteo mensual' },
			],
			comentario_dos: 'No dudes en empezar a emprender y con mucha onda! ♥',
			url: 'pack-gestion-de-redes-medio',
		},
		//tres
		{
			id: '415ba30c-d4c0-4922-99a8-7023ced12d3e ',
			nombre: 'pack gestion de redes full',
			imagen: pack_tres,
			precio: '10.000',
			descripcion: [
				{
					comentario:
						'Deja tu packaging hermoso, te propongo este pack que te va a encantar ♥',
				},
			],
			lista: [
				{ titulo: '12 publicaciones mensuales' },
				{ titulo: '20 historias mensuales' },
				{ titulo: 'reunión de asesoría mensual de 30 min' },
				{ titulo: 'sorteo mensual' },
			],

			comentario_dos: 'No dudes en empezar a emprender y con mucha onda! ♥',
			url: 'pack-gestion-de-redes-full',
		},
		//cuatro
		{
			id: '6d75d029-dcef-43ef-ba35-62b85190d6fc  ',
			nombre: 'pack emprendedor',
			imagen: pack_cuatro,
			precio: '10.000',
			descripcion: [
				{
					comentario:
						'Deja tu packaging hermoso, te propongo este pack que te va a encantar ♥',
				},
			],
			lista: [
				{ titulo: 'diseño logo' },
				{ titulo: 'paleta de colores' },
				{ titulo: 'tipografía' },
				{ titulo: 'diseño de tarjeta de agradecimiento' },
				{ titulo: 'íconos para destacadas de instagram x5' },
				{ titulo: 'optimización de la biografia' },
				{
					titulo:
						'3 diseños de plantillas en redes (podes elegir si para feed / historias / etc)',
				},
			],

			comentario_dos: 'No dudes en empezar a emprender y con mucha onda! ♥',
			url: 'pack-emprendedor',
		},
		//cinco
		{
			id: 'ba60633a-e496-48f9-9fc9-d2a6437de088',
			nombre: 'pack despegando',
			imagen: pack_cinco,
			precio: '10.000',
			descripcion: [
				{
					comentario:
						'Deja tu packaging hermoso, te propongo este pack que te va a encantar ♥',
				},
			],
			lista: [
				{ titulo: 'diseño de logo' },
				{ titulo: 'paleta de colores y tipografias utilizadas' },
				{ titulo: 'diseño digital de tarjetas personales' },
				{ titulo: 'optimización de la biografia de instagram' },
				{
					titulo:
						'íconos para destacadas de instagram x5 + info correspondiente de c/u',
				},
				{ titulo: '3 diseños de feed / posteos' },
				{ titulo: '3 diseños de plantillas para historias' },
			],

			comentario_dos: 'No dudes en empezar a emprender y con mucha onda! ♥',
			url: 'pack-despegando',
		},
		//cinco
		{
			id: '7ffe9e4a-fdbf-4364-b8c4-ca5dbadabfc5',
			nombre: 'crea tu propio pack',
			imagen: pack_seis,
			precio: '10.000',
			descripcion: [
				{
					comentario:
						'Deja tu packaging hermoso, te propongo este pack que te va a encantar ♥',
				},
			],
			lista: [
				{
					titulo:
						'Contame que necesitas y que estas buscando para tu marca o emprendimiendo',
				},
				{
					titulo:
						'Desde diseñar tus redes, darle una nueva imagen o cualquier tipo de diseño',
				},
				{ titulo: 'Te ayudo a personalizar tu pack según tus necesidades :)' },
			],
			comentario_dos: 'No dudes en empezar a emprender y con mucha onda! ♥',
			url: 'crea-tu-propio-pack',
		},
	],
	productos: [
		{
			id: '0b8d2265-e16b-4a12-8031-23a4b4897b16',
			nombre: 'landing page',
			imagen: producto_uno,
			precio: '20.000',
			url: 'landing-page',
			descripcion_lista: {
				item: 'Se trata de una sola página, que contiene opciones simples mostrando el contenido de forma concreta ya que su finalidad es lograr conversiones.',
			},
			lista_item: [
				{
					item: 'Por ejemplo que el usuario compre y no se maree con otra info',
				},
				{
					item: 'Una web personal o profesional',
				},
				{
					item: 'Tambien puede ser una landing organizando la informacion',
				},
			],
		},
		{
			id: '1b8d61fd-e03b-4448-a028-de5dff4267f2',
			nombre: 'tienda online',
			imagen: producto_dos,
			precio: '50.000',

			url: 'tienda-online',
			descripcion_lista: {
				item: 'Una tienda online es un sitio web ecommerce diseñado especialmente para vender productos/servicios mediante forma online.',
			},
			lista_item: [
				{
					item: 'Este espacio permite a los vendedores exhibir sus productos durante las 24hrs del dia los 7 días de la semana y desde cualquier lugar',
				},
				{
					item: 'Posee carrito de compras, envio, metodos de pago, login y registro, panel administrador',
				},
			],
		},
		{
			id: 'e308e42a-5d42-4e14-99b7-be04a5461cc1',
			nombre: 'invitaciones digitales',
			imagen: producto_cuatro,
			precio: '10.000',

			url: 'invitaicones-digitales',
			descripcion_lista: {
				item: 'Diseñamos tarjetas/invitaciones de todo tipo totalmente personalizadas. Son digitales y se envian en formatos listos aptos para impresión como para enviar por todas tus redes',
			},
			lista_item: [
				{
					item: 'Cumpleaños, casamientos, bautismos, comuniones, beyby showeer y miles de opciones más',
				},
			],
		},
		{
			id: 'e308e42a-5d42-4e14-99b7-be04a5461cc1',
			nombre: 'branding',
			imagen: producto_tres,
			precio: '10.000',
			url: 'branding',
			descripcion_lista: {
				item: 'Te ayudo a crear una marca fuerte y profesional partiendo de un concepto de la misma, con una identidad propia que la identifique y diferencie del resto',
			},
			lista_item: [
				{
					item: 'Diseño de elementos visuales, como el logotipo, los colores y la tipografía, etc.',
				},
			],
		},
		{
			id: '6ed3b743-6e47-4c65-861f-f13c88ffc982',
			nombre: 'curriculum vitae',
			imagen: producto_cinco,
			precio: '10.000',
			descripcion:
				'Avatar para usar en tu foto de perfil o como logo de tu emprendimiento! Mandame tu foto a Lbruno.designn@gmail.com y listo ♥',
			url: 'curriculum-vitae',
			descripcion_lista: {
				item: 'Te ofrecemos un servicio de confección y diseño de CV orientado a tu perfil profesional, el objetivo de la búsqueda y palabras claves',
			},
			lista_item: [
				{
					item: '¡Mas de 60 plantillas personalizables!',
				},
			],
		},
	],
};

export default PRODUCTOS;
