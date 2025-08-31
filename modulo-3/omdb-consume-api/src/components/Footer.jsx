export default function Footer() {
    const footerStyle = {
        backgroundColor: 'var(--color-background)',
        borderTop: '1px solid var(--primary-color)',
        textAlign: 'center',
        padding: '.25em',
        marginTop: '1em',
        width: '100%',
        position: 'absolute',
        bottom: 0
    }
    
    return (
        <footer style={footerStyle}>
            <p>&copy; João Pedro Govaski, 2025</p>
        </footer>
    )
}