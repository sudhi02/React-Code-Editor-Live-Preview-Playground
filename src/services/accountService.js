
import apiClient from "../api/apiClient";
import { handleError } from "../utils/errorHandler";
import { AccountService_ApiEndPoint } from "./accoutEdnpoints";

// Function to get the master alert dropdown list
// This function fetches the list of common litigations based on the provided masterDropID
export const GetUserDetails = async () => {
    console.log("dkfjhdhg", AccountService_ApiEndPoint);
    
    // Define the API endpoint for fetching user details
    const API_URL = AccountService_ApiEndPoint.GetUserList

    try {
        // Make a GET request to the API endpoint
        // The API client is configured to include necessary headers like Authorization, userID, and name
        const response = await apiClient.get(API_URL);
        return response;
    } catch (error) {
        // Handle any errors that occur during the API request
        // The handleError function processes the error and returns appropriate error messages
        const erros = handleError(error);
        if (erros) {
            return error;
        }
    }
}