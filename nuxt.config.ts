// https://nuxt.com/docs/api/configuration/nuxt-config
 
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',
      ],
      
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    plugins: [
     ],
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/strapi'
      ],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt',
       
      }
    
    
})
