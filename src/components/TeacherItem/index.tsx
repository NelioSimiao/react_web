import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


import './styles.css'
function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="data:image/jpeg;base64,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" alt="" />
                <div>
                    <strong>Nélio Simião Muchisse</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>É um facto estabelecido de que um leitor é distraído pelo conteúdo legível .
            <br /><br />
                Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância.
        </p>
            <footer>
                <p>
                    Preço/hora
                <strong>MZN 80.00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />Entrar em contacto
    
            </button>
            </footer>

        </article>

    );

}
export default TeacherItem;