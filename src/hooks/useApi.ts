import { ApiResponse } from "apisauce";
import { useState } from "react";

function useApi(apiFunc: (...args: any) => Promise<ApiResponse<any, any>>) {
  const [data, setData] = useState<any>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const request = async (...args: any) => {
    setIsLoading(true);
    try {
      const response = await apiFunc(...args);
      setIsLoading(false);

      console.log(response);

      setIsError(!response.ok);
      setData(response.data);

      return response;
    } catch (e) {
      console.log('test', e);
    }
  };

  return {
    request,
    data,
    isError,
    isLoading,
  };
}

export default useApi;