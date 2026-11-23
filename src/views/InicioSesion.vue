<template>
  <section class="login-container">

    <div class="login-card">

      <div class="login-header">
        <h1>¡Bienvenido!</h1>
        <p>Inicia sesión para continuar</p>
      </div>

      <form @submit.prevent="iniciarSesion">

        <div class="form-group">
          <label for="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            v-model="correo"
            placeholder="Ingresa tu correo"
            required
          >
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Ingresa tu contraseña"
            required
          >
        </div>

        <div class="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>

        <button type="submit" class="btn-login">
          Iniciar sesión
        </button>

      </form>

      <div class="register-link">
        <p>¿No tienes una cuenta?
          <a href="#">Regístrate</a>
        </p>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const correo = ref('')
const password = ref('')

const iniciarSesion = () => {
  console.log('Correo:', correo.value)
  console.log('Contraseña:', password.value)

  alert('Formulario enviado')
}
</script>

<style scoped>

.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f1e4;
  padding: 20px;
}

.login-card {
  background: white;
  width: 100%;
  max-width: 420px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.10);
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h1 {
  color: #474447;
  font-size: 30px;
  margin-bottom: 10px;
}

.login-header p {
  color: #777;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-group label {
  color: #474447;
  font-weight: bold;
  margin-bottom: 8px;
}

.form-group input {
  padding: 13px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  font-size: 15px;
}

.form-group input:focus {
  border-color: #2f89f9;
}

.forgot-password {
  text-align: right;
  margin-bottom: 25px;
}

.forgot-password a {
  color: #2f89f9;
  text-decoration: none;
  font-size: 13px;
}

.btn-login {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: #fe4f76;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn-login:hover {
  background: #e83d65;
  transform: translateY(-2px);
}

.register-link {
  text-align: center;
  margin-top: 25px;
  color: #777;
  font-size: 14px;
}

.register-link a {
  color: #fe4f76;
  font-weight: bold;
  text-decoration: none;
}

</style>