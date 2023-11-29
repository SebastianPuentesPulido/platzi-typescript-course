let anyVar:any;
anyVar = true;
anyVar = undefined;
anyVar = {};
anyVar = [];

let isNew:boolean = anyVar;

let unkownVar: unknown;
unkownVar = true;
unkownVar = undefined;

 // unkownVar.something(); // ❌

 if (typeof unkownVar === 'string') {
 unkownVar.toUpperCase();
 }

 if (typeof unkownVar === 'boolean') {
  let isNewV2:boolean = unkownVar;
 }

 const parse = (str:string):unknown => {
  return JSON.parse(str);
 }
