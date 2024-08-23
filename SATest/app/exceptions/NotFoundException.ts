import { BaseException } from "./BaseException.js";

export default class HttpNotFoundException extends BaseException {

  constructor(message: string) {
    super(message, 404)

  }
}


