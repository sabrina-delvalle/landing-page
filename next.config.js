/** @type {import('next').NextConfig} */

const nextConfig = {
	async rewrites() {
		return [
			//Rewrites all API requests to your Express server
			{
			source: "/api/v1/:path*",
			destination: `${process.env.NEXT_PUBLIC_DB_API}/api/v1/:path*`,
			},
		];
	},
};

module.exports = nextConfig;