import { API_KEY, API_BASE_URL } from "constants/api";
import { stringify } from "query-string";

const request = async <T>(
  url: string,
  queryParams?: Record<string, string>,
  options?: RequestInit
): Promise<T> => {
  const headers = { "X-Auth-Token": API_KEY };
  const queryString = stringify(queryParams || {});

  try {
    const result = await fetch(`${API_BASE_URL}${url}?${queryString}`, {
      ...(options || {}),
      headers: {
        ...(options?.headers || {}),
        ...headers,
      },
    });

    return result.json();
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const api = {
  get: async <T>(
    url: string,
    queryParams?: Record<string, string>,
    options?: RequestInit
  ): Promise<T> => {
    return await request(url, queryParams, options);
  },
};

export default api;
