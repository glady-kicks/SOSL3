<template>
  <section class="contact">
    <div class="content">
      <h2>Contact Us</h2>
      <p>Have questions or want to plan a trip? Reach out to us!</p>

      <div class="form">
        <input v-model="name" type="text" placeholder="Your Name" />
        <input v-model="email" type="email" placeholder="Your Email" />
        <textarea v-model="message" placeholder="Your Message" rows="4"></textarea>
        <button @click="submit">Send Message</button>
      </div>

      <p v-if="sent" class="success">✅ Message sent! We'll get back to you soon.</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name    = ref('')
const email   = ref('')
const message = ref('')
const sent    = ref(false)

function submit() {
  if (name.value && email.value && message.value) {
    sent.value = true
    name.value = ''
    email.value = ''
    message.value = ''
  }
}
</script>

<style scoped>
.contact {
  min-height: 100vh;
  background: #1b4332;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
}

.content {
  max-width: 500px;
  width: 100%;
  text-align: center;
  color: white;
}

.content h2 {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
}

.content > p {
  opacity: 0.85;
  margin-bottom: 2rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea {
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: none;
  font-size: 1rem;
  width: 100%;
  outline: none;
}

button {
  background: #d4a853;
  color: #111;
  padding: 0.85rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
button:hover { background: #c49540; }

.success {
  margin-top: 1.2rem;
  color: #a8f0c6;
  font-size: 1rem;
}
</style>