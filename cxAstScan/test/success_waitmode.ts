import tmrm = require('azure-pipelines-task-lib/mock-run');
import path = require('path');

let taskPath = path.join(__dirname, '..', 'index.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);
tmr.setInput("projectName", 'TestADO_WaitMode');
tmr.setInput("branchName", 'dummy_branch');
tmr.setInput("additionalParams", '--nowait --file-filter "*.ts"');
tmr.run();