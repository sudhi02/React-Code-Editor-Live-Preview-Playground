export const handleError = (error) => {
    if (!error?.response) {
        console.error("Network Error:", error);
        return { status: 500, message: "Network Error" };
    }
    const errors = error?.response || error?.response?.status === 401 || error?.response?.status === 500;
    return errors;
}

export const handleErrorToast = (data) => {

    if (data?.response?.status === 500) {
        console.error("Internal Server Error:", data?.response?.data);
        // toast.error("Internal Server Error"); // You can customize the error message as needed
    }
    else if (data?.response?.data?.errors && data?.response?.data?.errors[0]?.message) {
        console.error("Validation Error:", data?.response?.data?.errors[0]?.message);
        // toast.error(data?.response?.data?.errors[0]?.message); // You can customize the error message as needed
    }
    else {
        console.warn("Unknown Error:", data);
        // toast.warning(data?.data?.message); // You can customize the error message as needed
    }
}