export default async function ( app: any, _opts: any ) {
  app.get( '/', async ( _request: any, _reply: any ) => {
    try {
      return { result: 'bellend' }
    } catch ( e ) {
      console.error( e )
      throw e
    }
  } )
}
