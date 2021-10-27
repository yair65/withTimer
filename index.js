const withTimer = async (callback, args) => {
    const start = Date.now();
    return [await callback.apply(null, args), Date.now() - start]

}


const testCallback = async (x, y) => {
    const timeout = new Promise(resolve => { setTimeout(() => resolve(), 2000) })
    await timeout;
    return x + y;
}

const main = async () => {
    console.log(
        await withTimer(testCallback, [2, 3])
    );
}

main();