const iziToastFunctions = {
    getInfo(messageInfo) {
        iziToast.info({
            title: 'Hello',
            message: messageInfo,
        });
    },

    getErrorInfo(messageInfo) {
        iziToast.error({
            title: 'Error',
            message: messageInfo,
        });
    },

    getSuccessInfo(messageInfo) {
        iziToast.success({
            title: 'OK',
            message: messageInfo,
        });
    }
};

export { iziToastFunctions }
