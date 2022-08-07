const RESULT = {
    SUCCESS: {code: 200, msg: 'Request Success'},
    CREATE_SUCCESS: {code: 201, msg: 'Created Successfully'},
    UPDATE_SUCCESS: {code: 201, msg: 'Updated Successfully'},
    DELETE_SUCCESS: {code: 204, msg: 'Deleted Successfully'},
    NO_DATA: {code: 204, msg: ''},
    DUPLICATE_DATA: {code: 203, msg: 'Duplicate data'},
    ARG_ERROR: {code: 400, msg: 'Parameter Error'},
    NO_LOGIN: {code: 401, msg: 'Not Logined In'},
    FORBIDDEN: {code: 403, msg: 'No Access'},
    NOT_FOUND: {code: 404, msg: 'Not Found'},
    UPLOAD_ERR: {code: 405, msg: 'Upload Failed'},
    INTERNAL_ERROR: {code: 500, msg: 'Server Internal Error'},
    FAILD: {code: 503, msg: 'Request Failed'},
    TOKEN_NO_FIND: {code: 401, msg: 'Token Not Found, Please Login In Again'},
    TOKEN_ERR: {code: 401, msg: 'The Token Is Invalid, Please Login In Again'},
}

export default RESULT;