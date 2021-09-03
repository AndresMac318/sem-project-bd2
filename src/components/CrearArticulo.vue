<template>
  <v-container>
      <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Agregar artículo</h1>
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <form v-on:submit.prevent="guardarArticulo()">
                <v-text-field v-model="articulo.nombre" 
                label="Nombre"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="articulo.descripcion" 
                label="Descripcion"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="articulo.precio" 
                label="Precio"
                type="number"
                prefix="$"
                outlined
                required
                > 
                </v-text-field>
                <v-text-field v-model="articulo.stock" 
                label="Stock"
                type="number"
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

let url = 'http://localhost:3000/apirestnodejs/articulos/';
import axios from 'axios';

export default {
    name: 'crearArticulo',
    data(){
        return{
            articulo:{
                nombre:'',
                descripcion:'',
                precio:'',
                stock:''
            }
        };
    },
    methods:{
        guardarArticulo(){
            var router = this.$router;
            let params = this.articulo;
            axios.post(url,params)
            .then(()=>{
                router.push('/articulos')
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