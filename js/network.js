import moment from 'moment'

/**
 * Get url for train shedules 
 * with current date.
 * 
 * @returns 
 */
function _getCurrentUrl() {
    var url = 'https://extranet.trainose.gr/services/passenger_public/mobile_app/ajax.php?c=dromologia&op=vres_dromologia&apo=%CE%91%CE%98%CE%97%CE%9D&pros=%CE%9B%CE%91%CE%A1%CE%99&date='
        + moment().format('YYYY-MM-DD') +
        '&rtn_date=undefined-undefined-&travel_type=1&trena%5B%5D=apla&trena%5B%5D=ic&trena%5B%5D=ice&trena%5B%5D=bed&time=23%3A59&time_type=anaxwrhsh&rtn_time=23%3A59&rtn_time_type=anaxwrhsh';
    return url;
}

/**
 * Request to get train shedules from 
 * Athens to Larissa
 * 
 * @returns 
 */
function getTrainShedules() {
    return fetch(_getCurrentUrl())
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            return responseJson.data.metabash;
        });
}

module.exports.getTrainShedules = getTrainShedules;