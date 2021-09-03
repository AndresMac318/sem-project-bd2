<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary app clipped>
      <v-list>

        <v-list-item :to="{path: '/registro'}">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[4] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Registrarse</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{path: '/login'}">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[5] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Iniciar sesión</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{path: '/'}">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[0] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{path: '/articulos'}">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[1] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Articulos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{path: '/proveedores'}">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[1] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Proveedores</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{path: '/clientes'}">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[1] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Clientes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{path: '/vendedores'}">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[1] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Vendedores</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{path: '/locales'}">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[1] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Locales</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="{path: '/contacto'}">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[2] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contacto</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-action>
            <v-icon>mdi-{{ icons[6] }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-card class="mx-auto overflow-hidden" height="100%" width="100%">
      <!--<v-system-bar color="grey darken-3"></v-system-bar>  --color="deep-purple"-->
      <v-app-bar class="grey darken-3 white--text"><!--boton agregar  color="deep-purple accent-4"-->
        <v-app-bar-nav-icon @click="drawer=true" class="white--text"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <v-list-item :to="{path: '/'}">
            <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" :to="{path: '/'}"/>
          </v-list-item>
        </v-toolbar-title>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <v-fade-transition mode="out-in">
            <router-view></router-view>
          </v-fade-transition>
        </v-container>
        
      </v-main>

    </v-card>
  </v-app>

</template>

<script>

import axios from 'axios';
/* import session from 'express-session';
import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router'; */

export default {
  name: "App",
  data(){
    return{
      icons:["home", "shopping", "email", "storefront", "account", "account-check", "account-arrow-right"],
      drawer: false
    }
  },
  /* setup(){
    const router = useRouter();
    const route = useRoute();
    onBeforeMount(()=>{
      session.sessionStorage(session.name)
    })
 */
  
  methods:{
    logout(){
      let router = this.$router;
      axios.get('http://localhost:3000/apirestnodejs/logout/')
      .then((res)=>{
        console.log('se cerro la sesion');
        console.log(res);
        router.push('/login');
      })
      
    }
  }
  /* data:() => ({
    icons: ["home", "shopping", "email"],
    drawer: false,
  }), */
};
</script>
