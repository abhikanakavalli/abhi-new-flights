const { StatusCodes } = require('http-status-codes');

const { CityService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airplanes 
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */
async function createCity(req, res) {
    console.log('2. createAirplane Controller');
    console.log('aa', req.body);

    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully created City',
                    data: city,
                    error: {}
                });
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                        success: false,
                        message: 'Something went wrong creating City',
                        data: {},
                        error: error
                    });
    }
}


/**
 * POST : /airplanes
 * req-body {}
 */
// async function getAirplanes(req, res) {
//     try {
//         const airplanes = await AirplaneService.getAirplanes();
//         SuccessResponse.data = airplanes;
//         return res
//                 .status(StatusCodes.OK)
//                 .json(SuccessResponse);
//     } catch(error) {
//         ErrorResponse.error = error;
//         return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse);
//     }
// }

// // /**
// //  * POST : /airplanes/:id 
// //  * req-body {}
// //  */
// async function getAirplane(req, res) {
//     try {
//         const airplanes = await AirplaneService.getAirplane(req.params.id);
//         SuccessResponse.data = airplanes;
//         return res
//                 .status(StatusCodes.OK)
//                 .json(SuccessResponse);
//     } catch(error) {
//         ErrorResponse.error = error;
//         return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse);
//     }
// }

// /**
//  * DELETE : /cities/:id
//  * req-body {}
//  */
async function destroyCity(req, res) {
    try {
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

// async function updateAirplane(req, res) {
//     try {
//         const airplanes = await AirplaneService.updateAirplane(req.params.id);
//         SuccessResponse.data = airplanes;
//         return res
//                 .status(StatusCodes.OK)
//                 .json(SuccessResponse);
//     } catch(error) {
//         ErrorResponse.error = error;
//         return res
//                 .status(error.statusCode)
//                 .json(ErrorResponse);
//     }
// }

module.exports = {
    createCity,
    // getAirplanes,
    // getAirplane,
    destroyCity,
    // updateAirplane,
}