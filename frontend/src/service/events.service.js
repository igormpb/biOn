import api from "./api";

class EventsService {
    list = () => api.get()
    /**
     *  getEvent - busca um evento por ID
     *  @param uuid -> identificador do evento.
     */
    getEvent = (uuid) =>  api.get(`/events/${uuid}`)

    all = () =>  api.get('/events?sort=-createdAt')
}

export default new EventsService();