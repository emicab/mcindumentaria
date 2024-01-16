
const BarNav = () => {

    const optionNav = ["inicio", "Uniformes", "Contacto"]


    return (
        <nav>
            <h1 className="text-center text-4xl my-2">MC UNIFORMES</h1>
            <ul className="flex text-sm justify-around bg-blue-500 py-3 text-white sm:justify-center">
                {
                    optionNav.map((option, index) => (
                        <a className="uppercase font-bold px-3 py-1 rounded-sm hover:bg-blue-400" key={index} href={`/${option.toLocaleLowerCase()}`}><li className="">{option}</li></a>
                    ))
                }
            </ul>
        </nav>
    )
}

export default BarNav