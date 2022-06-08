import {Point2D} from "./poin2d";

export class Point3D extends Point2D{
    private _z:number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }
    getXYZ(){
        return {x:super.x,y:super.y,z:this.z}
    }
    setXYZ(x:number,y:number,z:number){
        this.x=x;
        this.y=y;
        this.z=z;
    }
}