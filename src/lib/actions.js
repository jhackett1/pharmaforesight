import { getDetails, getProbability } from "./api"

// Turn any trues and falses into 0 and 1 strings
const convertBools = (data) => {
    Object.keys(data).map((key, i) => {
        if(data[key] === true){ data[key] = "1" }
        if(data[key] === false){ data[key] = "0" }
    });
    return data
}

export const makePrediction = async (formData) => {

    console.log(formData)

    let processedData = convertBools({
        ...formData,
        start_date: formData.start_date ? `${formData.start_date.getFullYear()}-${formData.start_date.getMonth()+1}-${formData.start_date.getDate()}` : "",
        end_date: formData.end_date ? `${formData.end_date.getFullYear()}-${formData.end_date.getMonth()+1}-${formData.end_date.getDate()}` : "",
    })
    const detailedData = await getDetails(processedData)
    const probability = await getProbability(detailedData)
    return {
        probability: probability.pos,
        detailedData
    }
}

export const refinePrediction = async (detailedData) => {
    const probability = await getProbability(convertBools(detailedData))
    return probability.pos
}