let mongoose = require('mongoose')
const app = require('./app')

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://haroldtuquerresp_db_user:Fresas2007%40@cluster0.x2eo9v7.mongodb.net/Musica-Api')
  .then(() => {
    console.log('Base de datos conectada correctamente')

    app.listen(app.get('port'), () => {
      console.log(`Servidor corriendo en http://localhost:${app.get('port')}`)
    })
  })
  .catch(err => console.error(err))
