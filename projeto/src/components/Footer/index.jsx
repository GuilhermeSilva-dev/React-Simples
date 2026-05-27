import './style.css'

//FICARÁ NO FINAL DA PÁGINA
export default function Footer() {
    return (
        <Footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} - Todos os direitos
                reservados
                <br />
                SENAI BAHIA
            </p>
        </Footer>
    )
}
