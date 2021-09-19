import { Socket } from "socket.io";

export const disconnect = ( client: Socket)=>{
  client.on('disconnect', ()=>{
    console.log('|--> Cliente Desconectado');
    
  })
}