import HomePage from '@/pages/homepage'
import { createRouter, createWebHistory } from 'vue-router'
import PageThread from '@/pages/PageThread'
import NotFound from '@/pages/NotFound'
import sourceData from '@/forumdata.json'


const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/thread/:id",
        name: "Thread",
        component: PageThread,
        props: true,
        beforeEnter(to, from, next) {
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
            if (threadExists) {
                return next()
            } else {
                next(
                    {
                        name: "NotFound",
                        params: {
                            pathMatch: to.path.substring(1).split('/')
                        }, 
                        query: to.query, 
                        hash: to.hash
                    })
            }

        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: NotFound,

    }

]

export default createRouter({
    history: createWebHistory(),
    routes

})