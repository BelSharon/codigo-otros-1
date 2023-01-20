const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nombre = document.querySelector('.name');
const blog = document.querySelector('.blog');
//const location = document.querySelector('.location'); no exixte esa etiqueta/clase/id en el html

function displayUser(username) {
  nombre.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  nombre.textContent = '${data.name}';
  blog.textContent = '${data.blog}';
  //location.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);