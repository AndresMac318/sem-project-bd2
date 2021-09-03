<template>
  <v-container>
      <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Agregar Proveedor</h1>
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <form v-on:submit.prevent="guardarProveedor()">
                <v-text-field v-model="proveedor.nitproveedor" 
                label="NIT"
                type="number"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="proveedor.nombrepro" 
                label="Nombre"
                type="text"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="proveedor.telefonopro" 
                label="Telefono"
                type="number"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="proveedor.direccionpro" 
                label="Dirección"
                type="text"
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

let url = 'http://localhost:3000/apirestnodejs/proveedor/';
import axios from 'axios';

export default {
    name: 'crearProveedor',
    data(){
        return{
            proveedor:{
                nitproveedor:0,
                nombrepro:'',
                telefonopro:0,
                direccionpro:''
            }
        };
    },
    methods:{
        guardarProveedor(){
            var router = this.$router;
            let params = this.proveedor;
            axios.post(url,params)
            .then(()=>{
                router.push('/proveedores')
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