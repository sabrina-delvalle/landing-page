/** @type {import('next').NextConfig} */

const nextConfig = {
	async rewrites() {
		return [
			//Rewrites all API requests to your Express server
			{
			source: "/api/v1/:path*",
			destination: "http://localhost:5000/api/v1/:path*",
			},
		];
	},
};

module.exports = nextConfig;