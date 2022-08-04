<template>
  <div class="main">
    <div class="profile"><img
        src="https://static.remove.bg/remove-bg-web/36b50c4385f75bb65509f63b1e81f99fe2b334fc/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" />
    </div>
    <div class="details">
      <div class="post">
        <h2>54</h2>
        <p>Post</p>
      </div>
      <div class="followers">
        <h2>309</h2>
        <p>followers</p>
      </div>
      <div class="following">
        <h2>502</h2>
        <p>following</p>
      </div>
      <br>
    </div>
    <br>
    <div class="info">
      <div class="name">
        <h3>Renu</h3>
      </div>
      <div class="service">
        <h3>Product/Service</h3>
      </div>
      <div class="work">
        <h3>Web Programmer</h3>
      </div>
      <div class="button">
        <br>
        <div class="edit"><button>Edit Profile</button></div>
        <br>
        <!-- <div class="links">
          <button>Promotion</button>
          <button>Insights</button>
          <button>Contact</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: whitesmoke;
}

h2,
p {
  color: black;
  font-weight: bold;
  padding: 0px 15px;
}

.profile img {
  height: 90px;
  width: 90px;
  border-radius: 50%;
}

.main {
  height: 700px;
  width: 400px;
  margin: 10px auto;
  display: grid;
  grid-template-rows: 120px;
  grid-template-columns: 120px 120px 120px;
  /* border: 5px solid gray; */
  column-gap: 10px;
  position: relative;
}

.details {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 150px;
  margin: 20px;
}

.profile img {
  margin: 20px;
}

h3 {
  color: black;
  font-weight: bold;
}

.info {
  /* margin-left: 2px; */
  margin: 10px;
  width: 400px;
}

.edit button{
  width: 90%;
  margin: 0px auto;
  height: 30px;
  background-color: white;
  color: black;
  font-weight: bold;
}
</style>
