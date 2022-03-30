export const handle= async ({event, resolve}) => {

    event.locals.userName = "Sharath"
    
    const response = await resolve(event)
    // console.log(event)
    response.auth = "good"
    // response.headers = await {
    //     ...response.headers,
    //     "hello": "world",
    // }
    // let headers = await {...response.headers, "hello": "there"}
    // headers["hello"] = "there"

    // new Response(headers, response);
    // await console.log(new Response(headers, response))

    return response
}

export const getSession = (event) => {
    // console.log(event.locals)
    return {
        hookUser: {
            id: "fhjiodwhg",
            name: "faeez",
            access: "admin"
        }
    }
}