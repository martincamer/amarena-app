import Layout from '../../layout/Layout';
import ProductoContainer from '../../components/ui/ProductoContainer';
import ProductoContainerPackage from '../../components/ui/ProductoContainerPackage';
import { PRODUCTOS } from '../../contents/productos';
import { Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';

function Producto() {
	const params = useRouter();

	function capitalize(str) {
		if (typeof str === 'string') {
			const lower = str.toLowerCase();
			return str.charAt(0).toUpperCase() + lower.slice(1);
		}
	}

	return (
		<Layout pagina={capitalize(params.query.url)}>
			<Container
				maxW={1220}
				className="mx-auto py-[100px] max-md:px-10 max-md:py-[80px] border-b-[1px] border-gray-400"
			>
				{PRODUCTOS.productos.map(producto => (
					<>
						{params.query.url == producto.url && (
							<ProductoContainer
								key={producto.id}
								producto={producto}
							/>
						)}
					</>
				))}
				{PRODUCTOS.package.map(producto => (
					<>
						{params.query.url == producto.url && (
							<ProductoContainerPackage
								key={producto.id}
								producto={producto}
							/>
						)}
					</>
				))}
			</Container>
		</Layout>
	);
}

export default Producto;
