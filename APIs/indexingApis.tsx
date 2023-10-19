import api from "./api"

export const IndexingAPI = {
    getAll: async () => {
        try {
            const response = api.axios_instance.get(api.baseUrl+'')
            return response
        }
        catch {
            throw new Error("Couldn't fetch all indexing request")
        }
    }
}