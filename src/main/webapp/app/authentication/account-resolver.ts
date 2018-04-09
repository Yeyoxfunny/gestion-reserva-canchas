import { Authority } from '../shared/authority.enum';

export class AccountResolver {

   public static buildRedirectURL(usuario) {
      if (usuario.rol === Authority[Authority.ADMINISTRADOR_SISTEMA]) {
         return '/admin';
      }
      return '/app';
   }
}
