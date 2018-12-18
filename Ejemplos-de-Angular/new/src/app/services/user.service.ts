import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {



private _usuarios:User[]=[ 
new User (1,'Pep',324,'pep@grr.la'),
new User (2,'Pep',325,'FirefoxRulez@grr.la'),
new User (3,'Pep',3240,'krakentodo@grr.la'),

];

  constructor() { }



getUsuarios():User[] {


return this._usuarios;

}
}