<template>
  <div class="maincontainer">
    <div class="container1">
      <h1>About</h1><p>Web Developer looking to gain new experiences and skills. I have experience working with VueJs, React, HTML, Javascript, CSS, and Tailwind.</p>
    </div>
    <div class="container2">
      <div class="box1"><a href="https://dougjones866.github.io/artists/"><h1>Artist Database</h1><img src="../assets/artist.png" /><div class="description" ><p>This is an artist database.</p></div></a></div>
      <div class="box2"><a href="https://dougjones866.github.io/contact-list/"><h1>Contact List</h1><img src="../assets/contact.png" /><div class="description"><p >Contact List</p></div></a></div>
      <div class="box3"><a href="https://dougjones866.github.io/expense-form/"><h1>Expense Form</h1><img src="../assets/expense.png" /><div class="description"><p>Expense form made using React</p></div></a></div>
    </div>
    <div class="container3">
      <h1>Contact</h1>
      <div class="email">
      <h2>Email:</h2>
      <h3><a href="mailto:kibromanx@gmail.com">Kibromanx@gmail.com</a></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
  methods: {
    mouseOver: function() {
      this.active = !this.active;
    },
    mouseLeave: function() {
      this.active = false;
    }
  }
};
</script>

<style scoped>
.maincontainer {
  display: flex;
  flex-direction: column;
  margin: 25px;
  background-color: #745ff8;
  color: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-style:solid;
  border-color: #3e3d45 #25148f;
  border-width: 8px;
  
  
}

.container1 {
  background-color: black;

  
}
.container2 {
  
  display: flex;
  
}

img {
    max-width: 100%;
    height:auto;
}

.box1 {
  position: relative;
  flex: 33.3333%;
  
  
}
.box2 {
  position: relative;
  flex: 33.3333%;
  
}
.box3 {
  position: relative;
  flex: 33.3333%;
}
.container3 {
  background-color: black;
}
.container3 .email {
    display:inline-flex;
}

.description {
  background-color: #745ff8;
  
  justify-content: center;
  bottom:0;
  position: absolute;
  width:100%;
  
  
}
a{
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}
img:hover {
  /* background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 5px 15px rgba(182, 151, 92, 0.4); */
  
}

.box1:hover,.box2:hover,.box3:hover {
  border:solid black;
  border-width: 5px;
}

.container2 h1  {
  color:black;
}

.container2 p {
  color:black;
}

@media only screen and (max-width: 500px) {
  .container2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    wrap: nowrap;
  }
  .box1 {
    border-bottom:solid;
    border-color:black;
  }
  .box2 {
    border-bottom:solid;
    border-color:black;
  }
}
</style>