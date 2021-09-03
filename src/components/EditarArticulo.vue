<template>
  <v-container>
      <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar artículo</h1>
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <form v-on:submit.prevent="guardarArticulo()">
                <v-text-field 
                v-model="articulo.nombreA" 
                label="Nombre"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="articulo.descripcionA" 
                label="Descripcion"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="articulo.precioA" 
                label="Precio"
                type="number"
                prefix="$"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="articulo.stock" 
                label="Stock"
                type="number"
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

let url = 'http://localhost:3000/apirestnodejs/articulos/';
import axios from 'axios';

export default {
    name: 'editarArticulo',
    mounted(){
      this.id=this.$route.params.id;
      axios.get(url+this.id)
      .then(r=>{
        this.articulo = r.data[0];
      })
      .catch(function(error){
        console.log(error);
      })
    },
    data(){
      return{
        idArticulo:null,
        articulo:{
          nombreA:'',
          descripcionA:'',
          precioA:'',
          stock:''
        }
      }
    },
    methods:{
      guardarArticulo(){
        var router = this.$router;
        let parametros = this.articulo;
        axios.put(url+this.id, parametros)
        .then(function(){
          router.push('/articulos');
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