export abstract class CustomError extends Error {
    abstract code: number;
    abstract message: string;
    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
};

export class BadRequestError extends CustomError {
    public code = 400;
    public message = "Bad Request" ;
    constructor(message?: string) {
        super(message ?? "Bad Request");
        this.message = message ?? "Bad Request";
        Object.setPrototypeOf(this, ValidationError.prototype);
    };
};


export class ForbiddenError extends CustomError {
    public code = 403;
    public message = "Forbidden" ;
    constructor() {
        super('Forbidden');
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    };
};

export class NotFoundError extends CustomError {
    public code = 404;
    public message = "Page not found" ;
    constructor() {
        super('Page not found');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    };
};

export class UnAuthorizedError extends CustomError {
    public code = 401;
    public message = "UnAuthorized" ;
    constructor() {
        super('UnAuthorized');
        Object.setPrototypeOf(this, UnAuthorizedError.prototype);
    };
};

export class ValidationError extends CustomError {
    public code = 400;
    public message = "Validation Failed" ;
    constructor(message?: string) {
        super(message ?? "Validation Failed");
        this.message = message ?? "Validation Failed";
        Object.setPrototypeOf(this, ValidationError.prototype);
    };
};