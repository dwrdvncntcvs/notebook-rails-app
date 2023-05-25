export interface SuccessResponse<D> {
    data: D;
    message: string;
    timestamp: number;
}

export interface ErrorResponse {
    error: string;
    message: string;
    timestamp: string;
    status: number
}
