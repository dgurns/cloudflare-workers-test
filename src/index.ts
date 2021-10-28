import 'regenerator-runtime/runtime'
import { handleRequest } from './handler'

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
