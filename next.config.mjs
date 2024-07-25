/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_LOCAL_URI: "mongodb://localhost:27017/bookIt-v2",
        DB_URI: "mongodb://localhost:27017/bookIt"
    }
};

export default nextConfig;
