import { getDetails, getProbability } from "./api"

export const makePrediction = async (formData) => {

    console.log(formData.start_date)

    let processedData = {
        ...formData,
        start_date: formData.start_date ? `${formData.start_date.getFullYear()}-${formData.start_date.getMonth()+1}-${formData.start_date.getDate()}` : "",
        end_date: formData.end_date ? `${formData.end_date.getFullYear()}-${formData.end_date.getMonth()+1}-${formData.end_date.getDate()}` : "",
    }
    const detailedData = await getDetails(processedData)
    const probability = await getProbability(detailedData)
    return {
        probability: probability.pos,
        detailedData
    }
}

export const refinePrediction = async (detailedData) => {
    const probability = await getProbability(detailedData)
    return probability.pos
}