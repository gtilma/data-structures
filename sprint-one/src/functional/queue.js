var Queue = function(){

  // Use an object with numeric keys to store values
   var storage = {};
   var oldest = 0;
   var newest = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    //place value at newest key + 1
    //increment newest key to match that value
    this[newest+1] = value;
    newest++;
    
  };

  someInstance.dequeue = function(){
    //get value at oldest index, 
    //return it
    //delete it 
    //increment oldest to the next key

    var result = this[oldest];
    oldest++;
    return result;
  };

  someInstance.size = function(){
    return startIndex - endIndex;
  };


};
