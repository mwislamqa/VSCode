const { Module } = require("module");

class MyReporter {
    onBegin(config, Suite) {
        console.log('test start---------------------')
      console.log(`Starting the run with ${suite.allTests().length} tests`);
    }
  
    onTestBegin(test) {
      console.log(`Starting test ${test.title}`);
    }
  
    onTestEnd(test) {
      console.log(`Finished test ${test.title}: ${result.status}`);
    }
  
    onEnd(result) {
      console.log(`Finished the run: ${result.status}`);
    }
  }
  module.exports= MyReporter;
  
