
import { ProdEnv } from "../config/env";

// You can use this file for base URL and default headers.

export const AccountService_ApiEndPoint = {
    GetUserList: ProdEnv.BASE_URL + "users",
}