declare namespace env {
	export function prints(pointer : u32) : void; //this is actually an import
}

function prints(m : string) : void {
	env.prints(<i32>m);
}
//todo: https://stackoverflow.com/questions/14592364/utf-16-to-utf-8-conversion-in-javascript
