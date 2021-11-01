const withTimer = async (callback, args) => {
    const start = Date.now();
    return [await callback.apply(null, args), Date.now() - start]

}

module.exports = { withTimer }