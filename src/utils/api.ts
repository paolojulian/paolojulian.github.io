export interface IAPIResponse<Data, Error = null | any> {
  ok: boolean;
  data?: Data
  error?: Error
}
export function APIResponse<Data, Error>(ok = true, data = null, error = null): IAPIResponse<Data, Error> {
  if (error) {
    console.error('APIResponseError', error)
  }
  return {
    ok,
    data,
    error
  }
}