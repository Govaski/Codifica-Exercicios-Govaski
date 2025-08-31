export default function About() {

    const sectionStyle = {
        padding: '2em'
    }

    const paragraphStyle = {
        padding: '1em',
    }

    return (
        <section style={sectionStyle}>
            <h2>Sobre</h2>
            <p style={paragraphStyle}>
                Esse site foi criado com o intuito de concluir a atividade 5 do módulo 3 do curso Dev Fullstack Jr da MaisPraTi e Codifica.
            </p>
        
            <p style={paragraphStyle}>
                As tecnologias utilizadas foram: HTML, CSS, Javascript e React, além da API da OMDB.
            </p>
        </section>
    )
}