const Sequelize = require('sequelize')
const Sequelize = new  Sequelize('deber','postgres','abel',{
    host: 'localhost',
    dialect: 'postgres',
})
Sequelize.authenticate()
.them(() =>{
    console.log('Base conectado')

})
.catch( err =>{
    console.log('Base no de Conecto')
})
