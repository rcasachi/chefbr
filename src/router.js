import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from '@/store';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/apresentadores',
            name: 'presenters',
            component: () => import('./views/Presenters.vue')
        },
        {
            path: '/jurados',
            name: 'judges',
            component: () => import('./views/Judges.vue')
        },
        {
            path: '/temporadas',
            name: 'seasons',
            component: () => import('./views/Seasons.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/console/add-season',
            name: 'add-season',
            component: () => import('./views/AddSeason.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/console/add-presenter',
            name: 'add-presenter',
            component: () => import('./views/AddPresenter.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/console/add-judge',
            name: 'add-judge',
            component: () => import('./views/AddJudge.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/console/add-competitor/:key',
            name: 'add-competitor',
            component: () => import('./views/AddCompetitor.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/console/add-episode/:key',
            name: 'add-episode',
            component: () => import('./views/AddEpisode.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/console',
            name: 'console',
            component: () => import('./views/Console.vue'),
            meta: {
                authRequired: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.auth.isAuthenticated) {
            next({ path: '/login' });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
