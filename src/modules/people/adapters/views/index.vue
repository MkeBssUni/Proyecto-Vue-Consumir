<template>
  <div>
  <b-row>
    <b-col cols="12" md="4">Sección 1</b-col>
    <b-col cols="12" md="4">
      <b-form>
        <b-form-group
          description="Nombre de la persona a registrar: "
          label="Nombre"
          label-for="inputName"
        >
        <b-form-input id="inputName" v-model="person.name" ></b-form-input>
        </b-form-group>
        <b-form-group
          description="Trabajo de la persona: "
          label="Trabajo"
          label-for="inputName"
        >
        <b-form-input id="inputJob" v-model="person.job" ></b-form-input>
        </b-form-group>
      </b-form>
    </b-col>
    <b-col cols="12" md="4">Sección 3</b-col> 
  </b-row>
  <h1>{{valueX}}</h1>
  <code>{{ person }}</code>
</div>
  
</template>

<script lang="ts" >
import Vue from "vue";
import { Person } from "../../entities/Person";

export default Vue.extend({
    name:'IndexPersonVue',
    data(){
        return {
            valueX:'Este valor esta aquí' as string,
            person:{
              name:'',
              job:'',
            } as Person
        }
    },
    methods:{
      //funciones a ejecutar 
    }
})
</script>

<style>

</style>