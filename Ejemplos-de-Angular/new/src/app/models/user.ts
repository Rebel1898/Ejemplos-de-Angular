export class User{




constructor(private _uid: number,private _nombre: string,private _edad: number,private _email:string,


    ){
    
}

get uid(){return this._uid;}
get nombre(){return this._nombre;}
get edad(){return this._edad;}
get email(){return this._email;}

set uid(uid){ this._uid=uid;}
set nombre(nombre){ this._nombre=nombre;}
set edad(edad){ this._edad=edad;}
set email(email){ this._email=email;}

}