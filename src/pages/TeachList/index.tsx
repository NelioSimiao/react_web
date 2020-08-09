import React, { useState, FormEvent } from 'react';

import './styles.css'
import PageHeader from 'src/components/PageHeader';
import TeacherItem, { Teacher } from 'src/components/TeacherItem';
import Input from 'src/components/Input';
import Select from 'src/components/Select';
import api from 'src/services/api';
import { any } from 'prop-types';
import { async } from 'q';


function TeacherList() {
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    const [teachers,setTeachers]=useState([]);

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

     const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time
            }
        })

       setTeachers(response.data);

       console.log(response)

    }


    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>

                    <Select
                        name="subjct"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Matematica', label: 'Matematica' },
                            { value: 'Fisica', label: 'Fisica' },
                            { value: 'Geografia', label: 'Geografia' },

                        ]}
                    />


                    <Select
                        name="week_day"
                        label="Dia de Semana"
                        value={week_day}
                        onChange={(e) => { setWeek_day(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terca-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sabado' },


                        ]}
                    />
                    <Input name="time"
                        label="Hora"
                        type="time"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }} />
                    <button type="submit">
                        Buscar
                        </button>
                </form>
            </PageHeader>
            <main>
               {teachers.map((teacher:Teacher)=>{
                  return  <TeacherItem  key={teacher.id} teacher={teacher}/>
               })}
            </main>
        </div>
    );

}
export default TeacherList;