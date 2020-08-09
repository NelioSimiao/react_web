import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


import './styles.css'
import api from 'src/services/api';


export interface Teacher {
    id: number,
    avatar: string,
    bio: string,
    cost: number,
    name: string,
    subject: string,
    whatsapp: string

}

interface TeacherItemProps {
    teacher: Teacher;
}


const TeacherItem: React.FC<TeacherItemProps> = (teacher) => {

    function createNewConnection(){
        api.post('connections',{
            user_id:teacher.teacher.id
        });
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.teacher.avatar} alt={teacher.teacher.avatar} />
                
                <div>
                    <strong>{teacher.teacher.name}</strong>
                    <span>{teacher.teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/hora
                <strong>MZN {teacher.teacher.cost}</strong>
                </p>
                <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Whatsapp" />Entrar em contacto

            </a>
            </footer>

        </article>

    );

}
export default TeacherItem;