/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	eventName: 'NEXT_VERSION',
	payload: {
		version: '9.0.5-canary.2',
		isDevelopment: false,
	},
};

module.exports = nextConfig;
