import {HubConnectionBuilder,LogLevel} from "@aspnet/signalr"

const websocket="http://localhost:53611/AuthenticationHub"


export  const HubConnection =()=>{


   const hubConnection= new HubConnectionBuilder()
                .withUrl(websocket)              
                .build()

hubConnection   .start()
                .then(() => console.log('Connection Hub started!'))
                .catch(err => console.log('Error while establishing connection', err));
                


   
 return hubConnection

}

