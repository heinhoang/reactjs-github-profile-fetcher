import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: '../../../app/components/profile.component.html'
})

export class ProfileComponent { 
    user:any;
    repos:any[];
    username: string;
    
    constructor(private _githubService: GithubService){ // init `_githubService`
        this.user = false;
    }
    
    searchUser(){
        this._githubService.updateUser(this.username); // syn `this.username` to `GithubService.username`
        
        this._githubService.getUser().subscribe(user => {
            this.user = user;
        });
        
        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
}
