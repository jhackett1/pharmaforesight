import { getDetails, getProbability } from "./api"

export const makePrediction = async (formData) => {
    let processedData = {
        ...formData,
        start_date: formData.start_date ? `${formData.start_date.getFullYear()}-${formData.start_date.getMonth()}-${formData.start_date.getDate()}` : "",
        end_date: formData.end_date ? `${formData.end_date.getFullYear()}-${formData.end_date.getMonth()}-${formData.end_date.getDate()}` : "",
    }
    const detailedData = await getDetails(processedData)
    const probability = await getProbability(detailedData)
    return {
        probability: probability.pos,
        detailedData
    }
}


export const refinePrediction = async () => {

}