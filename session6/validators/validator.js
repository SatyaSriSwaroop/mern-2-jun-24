const getQueryErrors = (schema, data) => {
    const result = schema.validate(data);
    return result.error;
};

module.exports = getQueryErrors;