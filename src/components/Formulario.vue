<template>

  <section class="src-components-formulario">
  <div class="jumbotron mt-3">
    <h2>TAREAS</h2>
    <hr>

    <vue-form :state="formState" @submit.prevent="enviar()">

      <validate tag="div">
        <label for="descripcion">descripcion</label>
        <input 
          type="text"
          id="descripcion"
          class="form-control"
          autocomplete="off"
          name="descripcion"
          v-model.trim="formData.descripcion"
          required
        >
        <field-messages name="descripcion" show="$dirty">
          <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
          <div slot="required" class="alert alert-danger my-1">Campo descripcion requerido</div>
        </field-messages>
      </validate>


      <br>
      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input 
          type="text"
          id="nombre"
          class="form-control"
          autocomplete="off"
          name="nombre"
          v-model.trim="formData.nombre"
          required
          no-espacios
          :minlength="nombreChrMin"
          :maxlength="nombreChrMax"
        >
        <field-messages name="nombre" show="$dirty">
          <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
          <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>
          <div slot="no-espacios" class="alert alert-danger my-1">No se permiten espacios intermedios en este campo</div>
          <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{nombreChrMin}} caracteres</div>
          <div v-if="formData.nombre.length == nombreChrMax" class="alert alert-danger my-1">Máximo de caracteres alcanzados ({{nombreChrMax}})</div>
        </field-messages>


      </validate>
      
      <br>

      <validate tag="div">
        <label for="email">Email</label>
        <input 
          type="email"
          id="email"
          class="form-control"
          autocomplete="off"
          name="email"
          v-model="formData.email"
          required
        >
        
        <field-messages name="email" show="$dirty">
          <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
          <div slot="required" class="alert alert-danger my-1">Campo email requerido</div>
          <div slot="email" class="alert alert-danger my-1">Email no válido</div>
        </field-messages>

      </validate>
      <br>

      <button class="btn btn-success my-4" :disabled="formState.$invalid" type="submit">Enviar</button>
      <button class="btn btn-primary mr-2" @click="logout()">Logout</button>

    </vue-form>

  </div>




    <div class="jumbotron mt-3">
      <h2>Tareas</h2>
      <hr>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">DESCRIPCION</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">EMAIL</th>
            <th scope="col">CREADA</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tarea, index) in tareas" :key="index">
            <td>{{ tarea.descripcion }}</td>
            <td>{{ tarea.nombre }}</td>
            <td>{{ tarea.email }}</td>
            <td>{{ tarea.createdAt }}</td>
          </tr>
        </tbody>
      </table>

    </div>


    <div class="jumbotron mt-3">
      <pre></pre>
    </div>

  </section>

</template>

<script lang="js">
  import { urlMockapiio } from '../urls'
  export default {
    name: 'src-components-formulario',
    components: {},
    props: [],
    data () {
      return {
        formState : {},
        formData : this.getInitialData(),
        nombreChrMin: 5,
        nombreChrMax: 15,
        tareas : []
      }
    },
    computed: {

    },
    mounted () {

    },
    methods: {

      getInitialData() {
        return {
          descripcion: '',
          nombre: '',
          email: ''
        }
      },
      enviar() {
        this.axios.post(urlMockapiio, this.formData, {
          'content-type' : 'application/json'
        })
        .then( res => {
          console.log(res.data)
          this.formData = this.getInitialData()
          this.formState._reset()
        })
        .catch(error => {
          console.log('ERROR POST', error)
        })

        setTimeout(() => {
          this.getTareas()
        },10000)
      },
      logout() {
        this.$router.push({
          path: '/login',
          name: 'login',
          params: {},
          query: {}
        })
      },
      getTareas() {
        this.axios(urlMockapiio)
        .then( res => {
          console.log(res.data)
          this.tareas = res.data
        })
        .catch(error => {
          console.log('ERROR GET HTTP', error)
        })
      }
    }
  }


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
</style>
