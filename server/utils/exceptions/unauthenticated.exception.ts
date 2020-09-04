import { HttpException } from "@nestjs/common";


export class UnauthenticatedException extends HttpException {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(objectOrError?: string | object | any, description?: string) {
    super(HttpException.createBody(objectOrError, description, 401), 401);
  };
}