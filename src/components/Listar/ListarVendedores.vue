<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h2 class="display-2 font-weight-bold mb-3">Listado de vendedores</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mb-1">
        <v-btn
          :to="{ name: 'crearVendedor' }"
          class="mx-2"
          
          dark
          color="#FFC107"
        >
          Agregar
          <!-- <v-icon dark>mdi-plus</v-icon> -->
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col cols="12">
        <v-simple-table fixed-header height="336" class="elevation-3">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">ID</th>
                <th class="text-center">Nombre</th>
                <th class="text-center">Telefono</th>
                <th class="text-center">Correo</th>                
                <th class="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="vendedor in vendedores" :key="vendedor.idvendedor">
                <td>{{ vendedor.idvendedor }}</td>
                <td>{{ vendedor.nombrev }}</td>
                <td>{{ vendedor.telefonov }}</td>
                <td>{{ vendedor.correov }}</td>
                <td>
                  <v-btn :to="{name:'editarVendedor', params:{id:vendedor.idvendedor}}" fab small color="#FFC107">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn @click.stop="dialog=true" @click="id=vendedor.idvendedor" fab small color="#FF1744">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>

    <!--ventana de dialogo para eliminar registros-->
    <v-dialog v-model="dialog" max-width="450">
      <v-card>
      <v-card-title class="headline"
        >¿Está seguro de eliminar este local?</v-card-title
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="dialog=false">Cancelar</v-btn><!--oculta el elemento-->
        <v-btn @click="confirmarBorrado(id)" color="error">Aceptar</v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" color="success">
        {{textsnack}}
        <template v-slot:action="{attrs}">
            <v-btn text v-bind="attrs" @click="snackbar=false">Cerrar</v-btn>        
        </template>
    </v-snackbar>
  </v-container>
</template>

<script>

let url = 'http://localhost:3000/apirestnodejs/vendedor/';
import axios from 'axios';

export default {
    name: 'listarVendedores',
    mounted() {//cuando se carga la pagina
      this.obtenerVendedores();
    },
    data(){
      return{
        dialog: false,
        vendedores: null,
        id: null,
        snackbar:false,
        textsnack:'Registro Eliminado!!'
      }
    },
    methods:{
      obtenerVendedores(){
        axios.get(url)
        .then(respuesta=>{
          this.vendedores=respuesta.data;
        })
        .catch(function(error){
          console.log(error);
        })
      },
      confirmarBorrado(id){
        axios.delete(url+id)
        .then(()=>{
          this.obtenerVendedores();
          this.dialog=false;
          this.snackbar=true
        })
        .catch(function(error){
          console.log(error);
        });
      }
    }
};
</script>

<style></style>
