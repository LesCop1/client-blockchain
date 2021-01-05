import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { API_URL } from "../globals";

type Response = {
  code: number;
};

export type SuccessResponse = {
  data: unknown;
} & Response;

export type ErrorResponse = {
  error: {
    message: string;
    stack?: unknown;
  };
} & Response;

async function request(config: AxiosRequestConfig): Promise<SuccessResponse | ErrorResponse> {
  try {
    const res = await axios({ ...config, withCredentials: true, responseType: "json" });

    return {
      code: res.status,
      data: res.data,
    };
  } catch (error) {
    return {
      code: Number((<AxiosError>error).code) || 500,
      error: {
        message: (<AxiosError>error).message || "An error occured",
        stack: (<AxiosError>error).stack,
      },
    };
  }
}

async function get(path: string): Promise<SuccessResponse | ErrorResponse> {
  const url = API_URL + path;
  return request({ method: "GET", url });
}

async function post(path: string, body: unknown): Promise<SuccessResponse | ErrorResponse> {
  const url = API_URL + path;
  return request({ method: "POST", url, data: body });
}

export default { get, post };
