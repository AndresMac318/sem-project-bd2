<template>
  <v-container>
      <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Iniciar sesión</h1>
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <form v-on:submit.prevent="ingresar()">
                <v-text-field v-model="usuario.correoU" 
                label="Correo electrónico"
                type="email"
                placeholder="e.j. diegodaza@correo.com"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="usuario.passwordU" 
                label="Contraseña"
                type="password"
                outlined
                required
                > 
                </v-text-field>
                <v-card-actions>
                    <v-btn color="#FFC107" class="mr-4" type="submit">Ingresar</v-btn>
                </v-card-actions>
            </form>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

let url = 'http://localhost:3000/apirestnodejs/login/';
import axios from 'axios';

export default {
  name:'login',
  data(){
    return{
      usuario:{
        correoU:'',
        passwordU:'',
        
      }
    }
  },
  methods:{
    ingresar(){
      let router = this.$router;
      let params = this.usuario;
      axios.post(url, params)
      .then((res)=>{
        /* var result = JSON.stringify(res.data);
        console.log(result); */
        if(res.data === 'CREDENCIALES DE ACCESO INCORRECTAS!'){
          alert('Datos incorrectos!, intente nuevamente');
          this.usuario.correoU="";
          this.usuario.passwordU="";
        }else{
          alert('Datos correctos!!');
          router.push({path: '/articulos'});
        }     
        
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }

}
</script>

<style>

</style>