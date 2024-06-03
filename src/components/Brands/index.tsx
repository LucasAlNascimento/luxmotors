function Brands() {

    return (
        <div className="flex flex-wrap items-center justify-center w-20 h-64 mx-auto mt-28 mb-64 gap-14 md:w-24 md:mb-72 lg:grid lg:grid-flow-col lg:w-full lg:my-2 lg:px-48 lg:gap-20 xl:w-full xl:px-72 2xl:px-96 2xl:my-0 3xl:-mt-3 3xl:mb-10">
            <img className="w-48" src="/assets/brands/audi-logo.svg" alt="Logo Audi"></img>
            <img className="w-16 3xl:w-24" src="/assets/brands/bmw-logo.png" alt="Logo BMW"></img>
            <img className="w-48" src="/assets/brands/jaguar-logo.png" alt="Logo Jaguar"></img>
            <img className="w-40" src="/assets/brands/landrover-logo.png" alt="Logo Land Rover"></img>
            <img className="w-14 3xl:w-24 3xl:ml-5" src="/assets/brands/porsche-logo.png" alt="Logo Porsche"></img>
        </div>
    );
}

export default Brands;
