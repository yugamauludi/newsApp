<template>
    <header>
        <nav>
        <ul>
            <li><a href="#" @click.prevent="$router.push(`/`)">Home</a></li>
        </ul>
        </nav>
    </header>
</template>

<style>
header {
  background-color: #333;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
}

nav ul li a:hover {
  background-color: #555;
}
</style>