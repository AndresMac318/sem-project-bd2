<template>
  <v-container>
      <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar proveedor</h1>
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <form v-on:submit.prevent="guardarProveedor()">
                <v-text-field 
                v-model="proveedor.nitproveedor" 
                label="NIT"
                type="number"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="proveedor.nombrepro" 
                label="Nombre"
                type="text"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="proveedor.telefonopro" 
                label="Telefono"
                type="number"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="proveedor.direccionpro" 
                label="Dirección"
                type="text"
                outlined
                required
                ></v-text-field>
                
                <v-card-actions>
                    <v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>
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
    name: 'editarProveedor',
    mounted(){
      this.id=this.$route.params.id;
      axios.get(url+this.id)
      .then(r=>{
        this.proveedor = r.data[0];
      })
      .catch(function(error){
        console.log(error);
      })
    },
    data(){
      return{
          id:null,
        proveedor:{
          nitproveedor: '',
          nombrepro:'',
          telefonopro:'',
          direccionpro:''
        }
      }
    },
    methods:{
      guardarProveedor(){
        var router = this.$router;
        let parametros = this.proveedor;
        axios.put(url+this.id, parametros)
        .then(function(){
            console.log('llego aqui');
          router.push('/proveedores');
        })
        .catch(function (error){
          console.log(error);
        });
      }
    }

}
</script>

<style>

</style>