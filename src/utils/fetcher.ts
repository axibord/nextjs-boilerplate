const fetcher = (...args: [input: RequestInfo, init?: RequestInit | undefined]):any => fetch(...args).then((response) => response.json())

export default fetcher
