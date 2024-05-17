<template>
  <div class="footer">
    <div class="logo">
      <img src="../assets/logo.png " />
    </div>
    <div>
      <p class="copyright">Copyright © 2024 Password Gestor</p>
    </div>
  </div>
</template>

<script></script>

<style>
.footer {
  background-color: black;
  height: 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 150px;
  padding-left: 150px;
}
.logo img {
  width: 150px;
}
.copyright {
  color: #fff;
}

@media (max-width: 1024px) {
  .footer {
    padding-right: 4px;
    padding-left: 4px;
  }
}
</style>
