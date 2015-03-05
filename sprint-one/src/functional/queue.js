var Queue = function(){

  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var oldest = 0;
  var newest = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    //place value at newest key + 1
    //increment newest key to match that value
    storage[newest] = value;
    newest++;
    
  };

  someInstance.dequeue = function(){
    //get value at oldest index, 
    //return it
    //delete it 
    //increment oldest to the next key

    var result = storage[oldest];
    result && oldest++;
    return result;
  };

  someInstance.size = function(){
    return newest-oldest;
  };

  return someInstance;
};
