import './style.css'

// FICARÁ NO FINAL DA PÁGINA
export default function Footer() {
    return (
        <footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} - Todos os direitos reservados.
                <br />
                Desenvolvido por Guilherme Silva
            </p>
        </footer>
    )
}