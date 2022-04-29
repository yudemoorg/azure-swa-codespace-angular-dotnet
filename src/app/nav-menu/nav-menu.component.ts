import { Component } from '@angular/core';
import { AppConfigurationClient } from "@azure/app-configuration";

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    isExpanded = false;

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }

    counterFeature = this.ShowCounter();

    async ShowCounter() {
        const conn = 'Endpoint=https://ylilgtdemotestipt20220419.azconfig.io;Id=J36m-l9-s0:NqOBD2NS720YeKl5/g3a;Secret=iYA+oyI/d95SrPitOjuWluV1GzWTsMvg4nZhtqnXTzw=';
        const client = new AppConfigurationClient(conn);

        var val = await client.getConfigurationSetting({ key: ".appconfig.featureflag/ShowCounter" });

        return JSON.parse(val.value).enabled;
    }
}