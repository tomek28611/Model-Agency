/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.s3.amazonaws.com", 'images.unsplash.com'],
  },
  i18n: {
    locales: ['pl', 'en'], 
    defaultLocale: 'pl',   
  },
};

export default nextConfig;
