const responce = fetch('https://jsonplaceholder.typicode.com/users')

.then(res => {
    console.log(res)
    return res.json()
})
.then(data  => {
  data.map(user=> {
    console.log(`# Nome: ${user.id}, Nome de Usuário: ${user.username}, Email: ${user.email},  Endereço: ${user.street}` )
    
  })

})
  
console.log(responce);   

