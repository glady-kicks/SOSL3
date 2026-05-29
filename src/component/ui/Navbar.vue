<template>
  <nav class="navbar">

    <!-- Logo -->
    <img :src="logo" class="logo" alt="Logo" />

    <!-- Navigation Links -->
    <div class="links">

      <RouterLink to="/">Home</RouterLink>

      <RouterLink to="/about">About Us</RouterLink>

      <!-- Gallery Dropdown -->
      <div class="dropdown">
        <button class="dropbtn">
          Gallery ▼
        </button>

        <div class="dropdown-content">
          <RouterLink to="/photos">Photos</RouterLink>
          <RouterLink to="/videos">Videos</RouterLink>
        </div>
      </div>

      <!-- Destination Dropdown -->
      <div class="dropdown">
        <button class="dropbtn">
          Destination ▼
        </button>

        <div class="dropdown-content">
          <RouterLink to="/kigali">Kigali</RouterLink>
          <RouterLink to="/north">Northern Province</RouterLink>
          <RouterLink to="/south">Southern Province</RouterLink>
          <RouterLink to="/east">Eastern Province</RouterLink>
          <RouterLink to="/west">Western Province</RouterLink>
        </div>
      </div>

      <RouterLink to="/service">Services</RouterLink>

      <RouterLink to="/contact">Contact</RouterLink>

    </div>

  </nav>
</template>


<style scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b4332;
  padding: 15px 40px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Logo */
.logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

/* Links */
.links {
  display: flex;
  align-items: center;
  gap: 25px;
}

/* Normal Links */
.links a,
.dropbtn {
  color: white;
  text-decoration: none;
  font-size: 17px;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.links a:hover,
.dropbtn:hover {
  color: gold;
}

/* Dropdown */
.dropdown {
  position: relative;
}

/* Dropdown Content */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 200px;
  border-radius: 8px;
  overflow: hidden;
  top: 35px;
}

/* Dropdown Links */
.dropdown-content a {
  display: block;
  padding: 12px;
  color: #1b4332;
  text-decoration: none;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show Dropdown */
.dropdown:hover .dropdown-content {
  display: block;
}

</style>