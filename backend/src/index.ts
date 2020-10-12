import { registerRoutes } from './route_registry'
import fastify from 'fastify'


const app = fastify()
const PORT = 5002

const start = async () => {
  try {

    registerRoutes( app )

    let host = 'localhost'
    
    console.log( `Listening on port: ${ PORT }. http://${ host }:${ PORT }` )

    await app.listen( PORT, host )
  } catch ( err ) {
    app.log.error( err )
    console.error( err )
    process.exit( 1 )
  }
}

start()