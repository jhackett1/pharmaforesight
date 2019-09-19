import fetch from "isomorphic-unfetch"

export const getDetails = async inputs => {
    const res = await fetch(`${process.env.REACT_APP_API_HOST}/details`, {
        method: "post",
        // headers: {
        //     "Content-type": "application/json",
        // },
        body: JSON.stringify(inputs)
    })
    const data = await res.json()
    return data
}

export const getProbability = async inputs => {
    const res = await fetch(`${process.env.REACT_APP_API_HOST}/probability`, {
        method: "post",
        // headers: {
        //     "Content-type": "application/json",
        // },
        body: JSON.stringify(inputs)
    })
    const data = await res.json()
    return data
}