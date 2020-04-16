import React, { useState } from 'react';
import States from './config/states/states';
import Menu from '../Menu/Menu';
import './style.css'
import EventsService from '../../service/events.service';
import { useHistory } from 'react-router-dom';
import months from './config/mouth/mouth';
import { Ellipsis } from 'react-spinners-css';

export default function FormEvents() {
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [hours, setHours] = useState('');
    const [dayInit, setDayInit] = useState('');
    const [dayEnd, setDayEnd] = useState('');
    const [month, setMonth] = useState('');
    const [information, setInformation] = useState('');
    const [photo, setPhoto] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function createEvent(e) {
        e.preventDefault();
        setLoading(true)
        const data = {
            name,
            state,
            city,
            hours,
            dayInit,
            dayEnd,
            month,
            information,
            photo
        }
        try {
            
            await EventsService.create(data).then( ()=>{
                setLoading(false)
                history.push('/').alert('aaa')
            }).catch(err=>{
                setLoading(false)
            })
            
        } catch (err) {
            setLoading(false)
            alert('Houve um erro ao cadastrar!')
        }
    }

    return (
        <div>
            {
                !loading ? (
                    <div>
                        <Menu />
                        <div className="container mt-5 card shadow-sm p-3 mb-5 bg-light rounded">
                            <h1>Cadastro de Festa</h1>
                            <form className="mt-5" onSubmit={createEvent}>
                                <div className="form-row">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="validationServer01">Nome da Festa</label>
                                        <input type="text" className={name === '' ? "form-control is-invalid" : "form-control"} id="validationServer01" value={name} onChange={e => setName(e.target.value)} required />
                                        <div className="invalid-feedback">
                                            <p className="text-warning"> *required</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 mb-3">
                                        <label htmlFor="validationServer02">Dia da festa</label>
                                        <input type="number" className={dayInit === '' ? "form-control is-invalid" : "form-control"} id="validationServer02" value={dayInit} onChange={e => setDayInit(e.target.value)} required />
                                        <div className="invalid-feedback">
                                            <p className="text-warning"> *required</p>
                                        </div>
                                    </div>
                                     <div className="col-md-2 mb-3">
                                    <label htmlFor="validationServer02">Dia do final da festa</label>
                                    <input type="number" className={dayEnd === '' ? "form-control is-invalid" : "form-control"} id="validationServer02" value={dayEnd} onChange={e => setDayEnd(e.target.value)} required />
                                    <div className="invalid-feedback">
                                        <p className="text-warning"> *required</p>
                                    </div>
                                </div> 
                                    <div className="col-md-2 mb-3">
                                        <label htmlFor="validationServer02">Horas</label>
                                        <input type="number" className={hours === '' ? "form-control is-invalid" : "form-control"} id="validationServer02" value={hours} onChange={e => setHours(e.target.value)} required />
                                        <div className="invalid-feedback">
                                            <p className="text-warning"> *required</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 mb-3">
                                        <label htmlFor="validationServer04">Mês</label>
                                        <select className={month === '' ? 'custom-select is-invalid' : 'custom-select'} id="validationServer04" value={month} onChange={e => setMonth(e.target.value)} required>
                                            <option value='' disabled>Select..</option>
                                            {months.map(m => {
                                                return <option key={m.month} value={m.month}>{m.month}</option>
                                            })}
                                        </select>
                                        <div className="invalid-feedback">
                                            <p className="text-warning"> *required</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationServer03">Cidade</label>
                                        <input type="text" className={city === '' ? "form-control is-invalid" : 'form-control'} id="validationServer03" value={city} onChange={e => setCity(e.target.value)} required />
                                        <div className="invalid-feedback">
                                            <p className="text-warning"> *required</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="validationServer04">Estado</label>
                                        <select className={state === '' ? 'custom-select is-invalid' : 'custom-select'} id="validationServer04" value={state} onChange={e => setState(e.target.value)} required>
                                            <option value='' disabled>Select..</option>
                                            {States.map(st => {
                                                return <option key={st.uState} value={st.uState}>{st.uState}</option>
                                            })}
                                        </select>
                                        <div className="invalid-feedback">
                                            <p className="text-warning"> *required</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-1">
                                        <label htmlFor="validationServer05">Foto</label>
                                        <input type="text" className={photo === '' ? "form-control is-invalid" : "form-control"} id="validationServer05" value={photo} onChange={e => setPhoto(e.target.value)} placeholder="foto por URL..." required />
                                        <div className="invalid-feedback">
                                            <p className="text-warning"> *required</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-1">
                                        <label htmlFor="validationServer05">Informações</label>
                                        <input type="text" className={information === '' ? "form-control is-invalid" : "form-control"} id="validationServer05" value={information} onChange={e => setInformation(e.target.value)} placeholder="informaçoes sobre o local exato e etc..." required />
                                        <div className="invalid-feedback">
                                            <p className="text-warning"> *required</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="btn btn-success mt-5 mb-2" type="submit">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                ) : (<div className="container-loading">
                    <div className="box">
                        <Ellipsis color="#333" size={200} />

                    </div>
                </div>)
            }
        </div>
    )
}