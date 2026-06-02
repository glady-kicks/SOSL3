<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input 
            id="email"
            v-model="form.email" 
            type="email" 
            placeholder="Enter your email" 
            required 
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input 
            id="password"
            v-model="form.password" 
            type="password" 
            placeholder="Enter your password" 
            required 
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select 
            id="gender"
            v-model="form.gender" 
            required 
            class="form-input"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit" class="submit-btn">Login</button>
      </form>

      <p class="auth-link">
        Don't have an account? 
        <RouterLink to="/register" class="link-text">Register here</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({
  email: '',
  password: '',
  gender: ''
})

const handleLogin = () => {
  // Store user data in localStorage
  const userData = {
    email: form.value.email,
    gender: form.value.gender,
    loginTime: new Date().toLocaleString()
  }
  localStorage.setItem('user', JSON.stringify(userData))
  
  // Show success message
  alert(`Welcome back, ${form.value.email}!`)
  
  // Reset form
  form.value = {
    email: '',
    password: '',
    gender: ''
  }
  
  // Redirect to home
  router.push('/')
}
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%);
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

.login-title {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #1b4332;
  margin-bottom: 30px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: #1b4332;
  font-size: 14px;
}

.form-input {
  padding: 12px;
  border: 2px solid #d4d4d4;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;
  font-family: inherit;
}

.form-input:focus {
  outline: none;
  border-color: #1b4332;
  box-shadow: 0 0 0 3px rgba(27, 67, 50, 0.1);
}

.submit-btn {
  padding: 12px;
  background-color: #1b4332;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.submit-btn:hover {
  background-color: #2d6a4f;
}

.submit-btn:active {
  transform: scale(0.98);
}

.auth-link {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;
}

.link-text {
  color: #1b4332;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}

.link-text:hover {
  color: #2d6a4f;
  text-decoration: underline;
}
</style>