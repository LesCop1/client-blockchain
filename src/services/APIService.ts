import axios, { AxiosError } from "axios";
import { API_URL } from "../globals";

type Response = {
	code: number;
	success: boolean;
};

export type SuccessResponse = {
	data: unknown;
} & Response;

export type ErrorResponse = {
	error: {
		name?: unknown;
		message: string;
	};
} & Response;

async function get(path: string): Promise<SuccessResponse | ErrorResponse> {
	const url = API_URL + path;
	try {
		const res = await axios.get(url, { responseType: "json", withCredentials: true });

		return {
			code: res.status,
			success: true,
			data: <unknown>res.data,
		};
	} catch (error) {
		return {
			code: Number((<AxiosError>error).response?.status) || 500,
			success: false,
			error: {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				name: (<AxiosError>error).response?.data.error.name,
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
				message: (<AxiosError>error).response?.data.error.message || "An error occurred",
			},
		};
	}
}

async function post(path: string, body: unknown): Promise<SuccessResponse | ErrorResponse> {
	const url = API_URL + path;
	try {
		const res = await axios.post(url, body, { responseType: "json", withCredentials: true });

		return {
			code: res.status,
			success: true,
			data: <unknown>res.data,
		};
	} catch (error) {
		return {
			code: Number((<AxiosError>error).response?.status) || 500,
			success: false,
			error: {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				name: (<AxiosError>error).response?.data.error.name,
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
				message: (<AxiosError>error).response?.data.error.message || "An error occurred",
			},
		};
	}
}

export default { get, post };
