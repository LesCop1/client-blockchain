import APIService, { ErrorResponse, SuccessResponse } from "./APIService";

const basePath = "/user";

async function getInfo(): Promise<SuccessResponse | ErrorResponse> {
	const path = `${basePath}/dashboard`;
	return APIService.get(path);
}

export default { getInfo };
