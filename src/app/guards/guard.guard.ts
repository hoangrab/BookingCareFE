import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { ValidateTokenService } from "../services/validate-token.service";


export const guardGuard: CanActivateFn = (route, state) => {
  return inject(ValidateTokenService).isLogin();
};
