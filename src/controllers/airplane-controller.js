const { StatusCodes } = require('http-status-codes');

const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airplanes 
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */
async function createAirplane(req, res) {
    console.log('2. createAirplane Controller');
    console.log('aa', req.body);

    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success: true,
                    message: 'Successfully created Airplane',
                    data: airplane,
                    error: {}
                });
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                        success: false,
                        message: 'Something went wrong creating Airplane',
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

// /**
//  * POST : /airplanes/:id 
//  * req-body {}
//  */
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
//  * DELETE : /airplanes/:id
//  * req-body {}
//  */
// async function destroyAirplane(req, res) {
//     try {
//         const airplanes = await AirplaneService.destroyAirplane(req.params.id);
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
    createAirplane,
    // getAirplanes,
    // getAirplane,
    // destroyAirplane
}