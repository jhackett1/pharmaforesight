import { getDetails, getProbability } from "./api"

export const makePrediction = async (formData) => {
    const detailedData = await getDetails(formData)
    const probability = await getProbability(detailedData)
    return probability.pos
}