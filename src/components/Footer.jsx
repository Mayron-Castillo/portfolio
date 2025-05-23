function Footer() {
    return (
        <>
        <hr className='border-none h-[2px] bg-[#bce6fb] w-full my-5 mt-12'/>
        <section className='bg-[#f1f9fe] flex justify-between p-4'>
            
            <p className='flex items-center text-l font-semibold opacity-70'>👨‍💻 Desarrollado por Mayron</p>
            <section className="flex gap-4">
                <a href="https://github.com/Mayron-Castillo" target="_blank">
                    <svg className="transition-all duration-300 ease-in-out hover:fill-[#083a5a]" viewBox="0 0 24 24" width="26" height="26" fill="#0b5981">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.113.793-.258.793-.577v-2.165c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.306.764-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.469-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.523 11.523 0 0 1 3-.404c1.02.005 2.045.137 3 .404 2.293-1.552 3.299-1.23 3.299-1.23.653 1.653.241 2.873.118 3.176.769.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.624-5.475 5.922.43.372.815 1.103.815 2.223v3.293c0 .32.192.694.801.577C20.565 22.092 24 17.594 24 12.297c0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>

                <a href="https://www.linkedin.com/in/mayron-castillo/" target="_blank">
                    <svg className="transition-all duration-300 ease-in-out hover:fill-[#083a5a]" viewBox="0 0 24 24" width="26" height="26" fill="#0b5981">
                    <path d="M22.23 0H1.77C.79 0 0 .774 0 1.725V22.27c0 .95.79 1.725 1.77 1.725h20.46c.98 0 1.77-.774 1.77-1.725V1.725C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.023h3.56v11.43zM5.34 7.718a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm15.11 12.734h-3.56v-5.564c0-1.32-.03-3.022-1.84-3.022-1.84 0-2.12 1.44-2.12 2.93v5.656H9.37V9.023h3.42v1.56h.05c.48-.91 1.64-1.87 3.38-1.87 3.61 0 4.28 2.38 4.28 5.48v6.26z"/>
                    </svg>
                </a>
            </section>
        </section>
        </>
    )
}

export default Footer