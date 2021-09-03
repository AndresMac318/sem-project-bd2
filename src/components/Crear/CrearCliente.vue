<template>
  <v-container>
      <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Agregar Cliente</h1>
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <form v-on:submit.prevent="guardarCliente()">
                <v-text-field v-model="cliente.cedula" 
                label="Documento"
                type="number"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="cliente.nombrec" 
                label="Nombre"
                type="text"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="cliente.telefonoc" 
                label="Telefono"
                type="number"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="cliente.correoc" 
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

let url = 'http://localhost:3000/apirestnodejs/cliente/';
import axios from 'axios';

export default {
    name: 'crearCliente',
    data(){
        return{
            cliente:{
                cedula:0,
                nombrec:'',
                telefonoc:0,
                correoc:''
            }
        };
    },
    methods:{
        guardarCliente(){
            var router = this.$router;
            let params = this.cliente;
            axios.post(url,params)
            .then(()=>{
                router.push('/clientes')
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