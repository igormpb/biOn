import api from "./api";

class EventsService {
    list = () => api.get();
    /**
     *  getEvent - busca um evento por ID
     *  @param uuid -> identificador do evento.
     */
    getEvent = (uuid) =>  api.get(`/events/${uuid}`);

    /*
    busca todos os eventos.
    */ 
    all = () =>  api.get('/events?sort=-createdAt');

     /*
      * Posta uma festa  
      */ 

      create = (data) => api.post('/events/create', data)
}

export default new EventsService();