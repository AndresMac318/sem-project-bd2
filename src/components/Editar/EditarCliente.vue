<template>
  <v-container>
      <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar cliente</h1>
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <form v-on:submit.prevent="guardarCliente()">
                <v-text-field 
                v-model="cliente.cedula" 
                label="No. documento"
                type="number"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="cliente.nombrec" 
                label="Nombre"
                type="text"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="cliente.telefonoc" 
                label="Telefono"
                type="number"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="cliente.correoc" 
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

let url = 'http://localhost:3000/apirestnodejs/cliente/';
import axios from 'axios';

export default {
    name: 'editarCliente',
    mounted(){
      this.id=this.$route.params.id;
      axios.get(url+this.id)
      .then(r=>{
        this.cliente = r.data[0];
      })
      .catch(function(error){
        console.log(error);
      })
    },
    data(){
      return{
          id:null,
        cliente:{
          cedula: '',
          nombrec:'',
          telefonoc:'',
          correoc:''
        }
      }
    },
    methods:{
      guardarCliente(){
        var router = this.$router;
        let parametros = this.cliente;
        axios.put(url+this.id, parametros)
        .then(function(){
          router.push('/clientes');
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