import { userAgent } from "next/server";
import { rule } from "postcss";
import { all } from "three/examples/jsm/nodes/Nodes";
import sitemap from "./sitemap";

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            allow: '/ar',
            allow: '/ar/aboutus',
            allow: '/ar/blogs',
            allow: '/ar/contactus',
            allow: '/ar/careers',
            allow: '/ar/partnerships',
            allow: '/ar/products',
            allow: '/ar/news',
            allow: '/blogs',
            allow: '/aboutus',
            allow: '/contactus',
            allow: '/careers',
            allow: '/partnerships',
            allow: '/products',
            allow: '/news',
            disallow: '/dashboard',
        },
        sitemap: 'https://valeursegy.vercel.app/sitemap.xml'
    }
}