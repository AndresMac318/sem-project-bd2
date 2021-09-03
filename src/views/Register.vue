<template>
  <v-container>
      <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Registro</h1>
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <form v-on:submit.prevent="registrar()">
                <v-text-field v-model="usuario.nombreU" 
                label="Nombre"
                placeholder="e.j. Diego Daza"
                outlined
                required
                > 
                </v-text-field>
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
                    <v-btn color="#FFC107" class="mr-4" type="submit">Registrarse</v-btn>
                </v-card-actions>
            </form>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

let url = 'http://localhost:3000/apirestnodejs/usuario/';
import axios from 'axios';

export default {
    name: 'register',
    data(){
        return{
            usuario:{
                nombreU:'',
                correoU:'',
                passwordU:'',
                dialog: false,        
                snackbar:false,       
                textsnack:'Registro exitoso!, inicie sesion...'
            }
        }
    },
    methods:{
        registrar(){
            let router = this.$router;
            let params = this.usuario;
            axios.post(url, params)
            .then(()=>{
                this.dialog=false;
                this.snackbar=true;
                router.push('/login')
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }

};
</script>

<style>

</style>