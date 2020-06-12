<template>

  <section class="src-components-login">
    <h1>LOGIN</h1>
    <vue-form :state="formState" @submit.prevent="enviar()">

      <validate tag="div">
        <label for="usuario">usuario</label>
        <input 
          type="text"
          id="usuario"
          class="form-control"
          autocomplete="off"
          name="usuario"
          v-model.trim="formData.usuario"
          required
        >
        <field-messages name="usuario" show="$dirty">
          <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
          <div slot="required" class="alert alert-danger my-1">Campo usuario requerido</div>
        </field-messages>
      </validate>


      <br>
      <validate tag="div">
        <label for="clave">clave</label>
        <input 
          type="password"
          id="clave"
          class="form-control"
          autocomplete="off"
          name="clave"
          v-model.trim="formData.clave"
          required
          no-espacios
          :minlength="claveChrMin"
          :maxlength="claveChrMax"
        >
        <field-messages name="clave" show="$dirty">
          <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
          <div slot="required" class="alert alert-danger my-1">Campo clave requerido</div>
          <div slot="no-espacios" class="alert alert-danger my-1">No se permiten espacios intermedios en este campo</div>
          <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{claveChrMin}} caracteres</div>
          <div v-if="formData.clave.length == claveChrMax" class="alert alert-danger my-1">Máximo de caracteres alcanzados ({{nombreChrMax}})</div>
        </field-messages>


      </validate>
      
      <br>

 
      <br>

      <button class="btn btn-primary mr-2" @click="login()">Login</button>

    </vue-form>
  </section>

</template>

<script lang="js">
  export default {
    name: 'src-components-login',
    components: {},
    props: [],
    data () {
      return {
        formState : {},
        formData : this.getInitialData(),
        claveChrMin: 5,
        claveChrMax: 15,
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
          usuario: '',
          clave: ''
        }
      },
      login() {
        this.$router.push({
          path: '/formulario',
          name: 'formulario',
          params: {},
          query: {}
        })
      }
    }
  }


</script>

<style scoped lang="css">
  .src-components-login {

  }
</style>
