const {
    spawn
} = require('child_process');
const os = require('os');
const fs = require('fs')
// console.log(os.type())
class LifeCyclePlugin {
    constructor(arg) {
        // console.log(arg);
    }
    apply(compiler) {
        // compiler.plugin('done', function() {
        //           if(os.type().indexOf('Darwin')!=-1){
        //               console.log('检测到操作系统为mac，执行自动发布功能')
        //               const cmd = spawn('sh',['upload.sh'],{
        //                   stdio: [
        //                       0, // 使用父进程的 stdin 用于子进程。
        //                       'pipe', // 把子进程的 stdout 通过管道传到父进程 。
        //                       'pipe'
        //                   ]
        //               });
        //               cmd.stdout.on('data', (data) => {
        //                 console.log(`${data}`);
        //               });
        //               process.stdin.on('readable', () => {
        //                   process.stdin.write(process.stdin.read());
        //               });
        //               cmd.stderr.on('data', (data) => {
        //                 console.error(`${data}`);
        //               });
        //               cmd.on('close', (code) => {
        //                 console.log(`子进程退出，使用退出码 ${code}`);
        //               });
        //           }
        // });
    }
}
module.exports = LifeCyclePlugin;