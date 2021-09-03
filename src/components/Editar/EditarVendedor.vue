<template>
  <v-container>
      <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar vendedor</h1>
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <form v-on:submit.prevent="guardarVendedor()">
                <v-text-field 
                v-model="vendedor.idvendedor" 
                label="ID"
                type="number"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="vendedor.nombrev" 
                label="Nombre"
                type="text"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="vendedor.telefonov" 
                label="Telefono"
                type="number"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="vendedor.correov" 
                label="Correo"
                type="email"
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

let url = 'http://localhost:3000/apirestnodejs/vendedor/';
import axios from 'axios';

export default {
    name: 'editarVendedor',
    mounted(){
      this.id=this.$route.params.id;
      axios.get(url+this.id)
      .then(r=>{
        this.vendedor = r.data[0];
      })
      .catch(function(error){
        console.log(error);
      })
    },
    data(){
      return{
          id:null,
        vendedor:{
          idvendedor: '',
          nombrev:'',
          telefonov:'',
          correov:''
        }
      }
    },
    methods:{
      guardarVendedor(){
        var router = this.$router;
        let parametros = this.vendedor;
        axios.put(url+this.id, parametros)
        .then(function(){
          router.push('/vendedores');
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