import ContenidoData from './contents/ContenidoData';
import Carousel from './components/Carousel';
import Clientes from './components/Clientes';
import Contenido from './components/Contenido';
import Metodos from './components/Metodos';
import Packs from './components/Packs';
import Productos from './components/Productos';
import Layout from './layout/Layout';

export default function Home() {
	return (
		<Layout pagina={'Inicio'}>
			<Carousel />
			{ContenidoData.sobre_mi.map(contenido => (
				<Contenido
					key={contenido.id}
					contenido={contenido.titulo}
					enlace={contenido.enlace}
				/>
			))}
			<Packs />
			<Productos />
			{ContenidoData.clientes.map(contenido => (
				<Contenido
					key={contenido.id}
					contenido={contenido.titulo}
					enlace={contenido.enlace}
				/>
			))}
			<Clientes />
			<Metodos />
		</Layout>
	);
}
