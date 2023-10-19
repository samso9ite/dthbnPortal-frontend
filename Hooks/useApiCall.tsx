import { useState } from "react";

const apiStatus = {
    loading: 'loading',
    complete: 'complete',
    errored: 'errored'
}

const useApiCall = (service) => {
    const [status, setStatus] = useState(apiStatus.loading);
    const [data, setData] = useState(null)
    service()
        .then((data) => {
            setData(data);
            setStatus(status.complete)
        })
        .catch(() => {
            setStatus(status.errored)
        })
    return [status === apiStatus.loading, data, status === apiStatus.errored]
}

export default useApiCall