export interface SuccessResponse<D> {
    data: D;
    message: string;
    timestamp: number;
}

export interface ErrorResponse {
    error: string | string[];
    message: string;
    timestamp: string;
    status: number;
}

export interface PageMeta {
    page: number;
    limit: number;
    total_pages: number;
}
