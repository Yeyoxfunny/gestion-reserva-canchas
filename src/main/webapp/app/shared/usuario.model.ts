import { Authority } from './authority.enum';

export class Usuario {
   id: number;
   nombres: string;
   apellidos: string;
   email: string;
   rol: Authority;

   constructor() {}

}
