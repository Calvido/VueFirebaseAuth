import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: HelloWorld,
      meta: {
        admin: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {

  let user = firebase.auth().currentUser;
  console.log(user);
  let toAdmin = to.matched.some(record => record.meta.admin);

  if(toAdmin && !user)
  {
    next('Login');
  }
  else if (!toAdmin && user)
  {
    next('Admin');
  }
  else
  {
    next();
  }

})

export default router;
