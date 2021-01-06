import APIService, { ErrorResponse, SuccessResponse } from "./APIService";

const basePath = "/user";

async function getInfo(): Promise<SuccessResponse | ErrorResponse> {
	const path = `${basePath}/user/dashboard`;
	return APIService.get(path);
}

export default { getInfo };
