abstract class Contract  {
        protected AccountName _self;

        constructor ( n : AccountName){
                _self = n;
        }

        private getSelf() : AccountName {
                return _self;
	}
	
	abstract apply(code : u64, action: u64) : void; //Check whether export should be added here, or in the implementation

}
