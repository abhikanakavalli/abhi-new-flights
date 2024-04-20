const {StatusCodes} = require('http-status-codes');

const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');


const cityRepository = new CityRepository();

async function createCity(data) {
    console.log('step3 services')
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch(error) {

        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            console.log('ak', error);
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new City object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

// async function getAirplanes() {
//     try {
//         const airplanes = await airplaneRepository.getAll();
//         return airplanes;
//     } catch(error) {
//         throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

// async function getAirplane(id) {
//     try {
//         const airplane = await airplaneRepository.get(id);
//         return airplane;
//     } catch(error) {
//         if(error.statusCode == StatusCodes.NOT_FOUND) {
//             throw new AppError('The airplane you requested is not present', error.statusCode);
//         }
//         throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

async function destroyCity(id) {
    try {
        const response = await cityRepository.destroy(id);
        return response;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of the city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

// async function updateAirplane(id) {
//     try {
//         const response = await airplaneRepository.update(id);
//         return response;
//     } catch(error) {
//         if(error.statusCode == StatusCodes.NOT_FOUND) {
//             throw new AppError('The airplane you requested to delete is not present', error.statusCode);
//         }
//         throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }
 
module.exports = {
    createCity,
    // getAirplanes,
    // getAirplane,
    destroyCity,
    // updateAirplane
}