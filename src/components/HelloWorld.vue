<template>
  <div class="container">
    <div class="main">
      <div class="profileImg">
        <img src="../assets/test.jpg" />
      </div>
        <a href="https://github.com/DougJones866">Github</a>
    </div>
    <div class="info">
      <h1>I am a Web Developer</h1>
      <h3>Hello, I am a web Developer.</h3>
    </div>
  </div>
    
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  background-color: #745ff8;
  color: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-style:solid;
  border-color: #3e3d45 #25148f;
  border-width: 8px;
  margin: 25px;
  
 
}

.main {
  float: left;
  flex: 25%;
 
}

.info {
  flex: 50%;
 
}

img {
  border-radius: 250px;
  max-width: 250px;
  height: auto;
}

a {
  color:white;
}

@media only screen and (max-width: 500px) {
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    wrap: nowrap;
  }
}
</style>
