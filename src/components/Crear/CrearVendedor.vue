<template>
  <v-container>
      <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Agregar Vendedor</h1>
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <form v-on:submit.prevent="guardarVendedor()">
                <v-text-field v-model="vendedor.idvendedor" 
                label="ID Vendedor"
                type="number"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="vendedor.nombrev" 
                label="Nombre"
                type="text"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="vendedor.telefonov" 
                label="Telefono"
                type="number"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="vendedor.correov" 
                label="Correo"
                type="email"
                outlined
                required
                > 
                </v-text-field>
                <v-card-actions>
                    <v-btn color="#FFC107" class="mr-4" type="submit">Guardar</v-btn>
                </v-card-actions>
            </form>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

let url = 'http://localhost:3000/apirestnodejs/vendedor/';
import axios from 'axios';

export default {
    name: 'crearVendedor',
    data(){
        return{
            vendedor:{
                idvendedor:0,
                nombrev:'',
                telefonov:0,
                direccionv:''
            }
        };
    },
    methods:{
        guardarVendedor(){
            var router = this.$router;
            let params = this.vendedor;
            axios.post(url,params)
            .then(()=>{
                router.push('/vendedores')
            })
            .catch(function(error){
                console.log(error);
            });
        }
    }

}
</script>

<style>

</style>