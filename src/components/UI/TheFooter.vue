<template>
  <div>
    <footer>
      <ul class="icons">
        <li><a href="https://github.com/DougJones866" ><box-icon type="logo" name="github" color="white"></box-icon></a></li>
        <li><a href="https://www.linkedin.com/in/douglas-jones-5a161566/"><box-icon name="linkedin" type="logo" color="white"></box-icon></a></li>
        <li><a href="https://codepen.io/dougjones866"><box-icon name="codepen" type="logo" color="white"></box-icon></a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
footer {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  color: white;
  justify-content: center;
}
.icons li {
    list-style:none;
    display:inline-flex;
    padding-right:10px;
    

  }

  @media only screen and (max-width: 500px) {
 
}
</style>