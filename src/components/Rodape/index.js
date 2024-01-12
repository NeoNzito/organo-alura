import  "./Rodape.css"

const Rodape = () => {
    return (
        <section className="rodape-site">
            <div className="logos">
                <img src="/images/fb.png" alt="Logo Facebook"/>
                <img src="/images/tw.png" alt="Logo Twitter"/>
                <img src="/images/ig.png" alt="Logo Instagram"/>
            </div>
            <img src="/images/logo.png" alt="Logo Organo"/>
            <h3>Desenvolvido por Alura.</h3>
        </section>
    )
}

export default Rodape