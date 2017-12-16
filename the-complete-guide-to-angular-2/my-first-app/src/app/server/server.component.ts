import { Component } from '@angular/core';

// Store metadata for the class in the background which will tell angular what to do with this class
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';
    getServerStatus() {
        return this.serverStatus;
    }
}
