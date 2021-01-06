import APIService, { ErrorResponse, SuccessResponse } from "./APIService";

const basePath = "/auth";

async function signIn(email: string, password: string): Promise<SuccessResponse | ErrorResponse> {
	const path = `${basePath}/signin`;
	return APIService.post(path, { email, password });
}

async function signUp(
	firstname: string,
	lastname: string,
	nationality: string,
	birthDate: Date,
	email: string,
	password: string
): Promise<SuccessResponse | ErrorResponse> {
	const path = `${basePath}/signup`;
	return APIService.post(path, {
		firstname,
		lastname,
		nationality,
		birthDate: birthDate.toISOString(),
		email,
		password,
	});
}

async function signOut(): Promise<SuccessResponse | ErrorResponse> {
	const path = `${basePath}/signout`;
	return APIService.get(path);
}

export default { signIn, signUp, signOut };
