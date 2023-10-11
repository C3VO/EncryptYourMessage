function Error() {
    return (
        <div className="div">
            <p className="text-8xl">404</p>
            <p className="text-3xl">Такой страницы не существует!</p>
            <p><a className="transition-all duration-300 text-black font-semibold inline-block py-3 px-2 border-b-2 border-black hover:text-white hover:border-white"
                href="/">Вернуться на главную &rsaquo;</a></p>
        </ div>
    );
}

export default Error;