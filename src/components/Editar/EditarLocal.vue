<template>
  <v-container>
      <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Editar local</h1>
      </v-col>
    </v-row>

    <v-row>
        <v-col>
            <form v-on:submit.prevent="guardarLocal()">
                <v-text-field 
                v-model="local.idlocal" 
                label="Id Local"
                type="number"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="local.nombrel" 
                label="Nombre"
                type="text"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="local.telefonol" 
                label="Telefono"
                type="number"
                outlined
                required
                ></v-text-field>
                <v-text-field 
                v-model="local.direccionl" 
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

let url = 'http://localhost:3000/apirestnodejs/local/';
import axios from 'axios';

export default {
    name: 'editarLocal',
    mounted(){
      this.id=this.$route.params.id;
      axios.get(url+this.id)
      .then(r=>{
        this.local = r.data[0];
      })
      .catch(function(error){
        console.log(error);
      })
    },
    data(){
      return{
          id:null,
        local:{
          idlocal: '',
          nombrel:'',
          telefonol:'',
          direccionl:''
        }
      }
    },
    methods:{
      guardarLocal(){
        var router = this.$router;
        let parametros = this.local;
        axios.put(url+this.id, parametros)
        .then(function(){
          router.push('/locales');
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