interface Carro {
    id: number;
    marca: string;
    modelo: string;
    ano: number;
    imagem: string;
  }

const carros: Carro[] = [
    {
        id: 1,
        marca: 'Audi',
        modelo: 'Q8 e-tron Sportback',
        ano: 2023,
        imagem: 'src/assets/cars/AudiQ8etronSportback.jpg',
    },
    {
        id: 2,
        marca: 'BMW',
        modelo: 'iX3',
        ano: 2023,
        imagem: 'src/assets/cars/BMWiX3.jpg',
    },
    {
        id: 3,
        marca: 'Jaguar',
        modelo: 'XKR Coupe X100',
        ano: 2002,
        imagem: 'src/assets/cars/JaguarXKRCoupe.jpg',
    },
    {
        id: 4,
        marca: 'Land Rover',
        modelo: 'Range Rover Sport',
        ano: 2022,
        imagem: 'src/assets/cars/RangeRoverSport.jpg',
    },
    {
        id: 5,
        marca: 'Porsche',
        modelo: 'Carrera GT',
        ano: 2005,
        imagem: 'src/assets/cars/PorscheCarreraGT.jpg',
    },
    {
        id: 6,
        marca: 'Mercedes-Benz',
        modelo: 'C 43 AMG',
        ano: 2018,
        imagem: 'src/assets/cars/MercedesBenzC43AMG.jpg',
    },

];

export default carros;
