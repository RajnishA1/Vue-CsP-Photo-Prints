import ImageCropper from './components/ImageCropper.vue'
import PasswordSizePhoto from './components/PasswordSizePhoto.vue'

import Home from './components/Home.vue'
import { createRouter,createWebHistory } from 'vue-router'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name: 'ImageCropper',
        component: ImageCropper,
        path: '/image/'
    },
    {
        name: 'PasswordSizePhoto',
        component: PasswordSizePhoto,
        path: '/password-size-photo'
    },
 
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router