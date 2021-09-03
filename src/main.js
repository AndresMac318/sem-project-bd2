import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'


//importacion de vue router
import VueRouter from 'vue-router'

//importamos nuestros componentes
import inicio from '@/components/Inicio';
import listarArticulos from '@/components/ListarArticulos';
import listarProveedores from '@/components/Listar/ListarProveedores';
import listarClientes from '@/components/Listar/ListarClientes';
import listarVendedores from '@/components/Listar/ListarVendedores';
import listarLocales from '@/components/Listar/ListarLocales';
import crearArticulo from '@/components/CrearArticulo';
import crearProveedor from '@/components/Crear/CrearProveedor';
import crearCliente from '@/components/Crear/CrearCliente';
import crearVendedor from '@/components/Crear/CrearVendedor';
import crearLocal from '@/components/Crear/CrearLocal';
import editarArticulo from '@/components/EditarArticulo';
import editarProveedor from '@/components/Editar/EditarProveedor';
import editarCliente from '@/components/Editar/EditarCliente';
import editarVendedor from '@/components/Editar/EditarVendedor';
import editarLocal from '@/components/Editar/EditarLocal';
import contacto from '@/components/Contacto';

import register from '@/views/Register';
import login from '@/views/Login';

//creamos el componente
Vue.component('inicio', inicio);
Vue.component('listarArticulos', listarArticulos);
Vue.component('listarProveedores', listarProveedores);
Vue.component('listarClientes', listarClientes);
Vue.component('listarVendedores', listarVendedores);
Vue.component('listarLocales', listarLocales);
Vue.component('crearArticulo', crearArticulo);
Vue.component('crearProveedor', crearProveedor);
Vue.component('crearCliente', crearCliente);
Vue.component('crearVendedor', crearVendedor);
Vue.component('crearLocal', crearLocal);
Vue.component('editarArticulo', editarArticulo);
Vue.component('editarProveedor', editarProveedor);
Vue.component('editarCliente', editarCliente);
Vue.component('editarVendedor', editarVendedor);
Vue.component('editarLocal', editarLocal);
Vue.component('contacto', contacto);

Vue.component('register', register);
Vue.component('login', login);

//usar vue-router
Vue.use(VueRouter);

//definimos las rutas
const routes = [
  {
    path: '/', component:inicio
  },
  {
    path: '/inicio', component:inicio,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/registro', component:register
  },
  {
    path: '/login', component:login
  },
  {
    path: '/articulos', component:listarArticulos,
    meta:{
      requiresAuth:true
    }
    
  },
  {
    path: '/proveedores', component:listarProveedores
  },
  {
    path: '/locales', component:listarLocales
  },
  {
    path: '/clientes', component:listarClientes
  },
  {
    path: '/vendedores', component:listarVendedores
  },
  {
    path: '/crear', component:crearArticulo, name: 'crearArticulo',
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/crearProveedor', component:crearProveedor, name: 'crearProveedor',
  },
  {
    path: '/crearCliente', component:crearCliente, name: 'crearCliente',
  },
  {
    path: '/crearVendedor', component:crearVendedor, name: 'crearVendedor',
  },
  {
    path: '/crearLocal', component:crearLocal, name: 'crearLocal',
  },
  {
    path:'/editar/:id', component:editarArticulo, name: 'editarArticulo',
    
  },
  {
    path: '/editarproveedor/:id', component:editarProveedor, name: 'editarProveedor'
  },
  {
    path: '/editarcliente/:id', component:editarCliente, name: 'editarCliente'
  },
  {
    path: '/editarvendedor/:id', component:editarVendedor, name: 'editarVendedor'
  },
  {
    path: '/editarlocal/:id', component:editarLocal, name: 'editarLocal',
  },
  {
    path: '/contacto', component:contacto
  }
];



//creamos el objeto router
const router = new VueRouter({
  routes,
  mode: 'history'//elimina el simbolo #
});

/* router.beforeEach((req, res, next)=>{
  if(req.matched.some(ruta=>ruta.meta.requiresAuth)){
    const auth = req.session.loggedit;
    if(auth){
      next();
    }else{
      next({name: 'login'})
    }
  }else{
    next();
  }
}) */

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
