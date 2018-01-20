//service is a centralized code
// service is just a class
export class LogginService  {
    logStatusChange(status:  String){
        console.log('A server status changed, new status: ' + status);
    }
}