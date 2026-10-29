/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // O Next 16 aceita só 75 por padrão; as fotos da médica e do consultório usam 90.
    qualities: [75, 90],
    formats: ["image/webp"],
  },
};

export default nextConfig;
