<template>
  <div>
    <nav>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
nav {
  justify-content: center;
}
    ul{
        list-style: none;
        display: flex;
        justify-content: center;
    }

    li {
        padding: 5px;
    }

</style>