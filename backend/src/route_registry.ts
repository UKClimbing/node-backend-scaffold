import autoLoad from 'fastify-autoload'
import path from 'path'


export const registerRoutes = function ( app: any ) {
  
  app.register(require('fastify-cors'), { 
    origin: true
  })

  app.register(autoLoad, {
    dir: path.join(__dirname, 'routes'),
  } )
  
}