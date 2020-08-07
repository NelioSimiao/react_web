import React from 'react';

import './styles.css'
import PageHeader from 'src/components/PageHeader';
import TeacherItem from 'src/components/TeacherItem';
import Input from 'src/components/Input';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">

                <Input name="subject" label="Matéria"/>
                <Input name="week_day" label="Dia de Semana"/>
                <Input name="time" label="Hora"/>
                </form>
            </PageHeader>
            <main>

                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );

}
export default TeacherList;