function Footer() {
    
    return(

        <footer className="flex justify-between items-center w-full h-20 px-5 bg-gray-200 shadow-md md:px-11 mt-auto">
            <p>© 2023 Luxmotors Car Rentals Inc.</p>
            <div className="flex items-center justify-center gap-2">
                <img className="w-8 rounded-md" src="/assets/icons/Brazil.png" alt="Ícone Brasil"/>
                <p className="text-sm font-fabrikatMedium">Brazil</p>
            </div>
        </footer>
    );
}

export default Footer;