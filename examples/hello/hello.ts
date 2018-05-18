import "allocator/tlsf"; // Extremely basic memory manager

import { Contract } from '../src/contract';
import { prints } from '../src/print';

hello : Hello = new Hello();

namespace env {
	export function apply(code : u64, action : u64){
		hello.apply(code, action);
	}
}

class Hello extends Contract {
	function apply(code : u64, action: u64) : void {
		prints("Hello, World!"); 
	}
}
