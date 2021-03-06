import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    

    host: string = "http://localhost:44337/";

    constructor(public http: HttpClient) { }

    // Use this function for simple calls with few parameters.
    public get(url: string): Promise<any> {
        return this.http.get(this.host + url).toPromise()
            .catch(this.handleError);
    }

    // Use this function for calls with multiple parameters.
    public getWithParams(url: string, params: Map<any, any>): Promise<any> {
        let newParams = new HttpParams();
        params.forEach((value, key) => {
            newParams = newParams.set(key, value);
        });
        return this.http.get(this.host + url, { params: newParams }).toPromise()
            .catch(this.handleError);
    }

    public post(url: string, body: any): Promise<any> {
        return this.http.post(this.host + url, body).toPromise()
            .catch(this.handleError);
    }

    public put(url: string, body: any): Promise<any> {
        return this.http.put(this.host + url, body).toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.error.ModelState.mensaje[0] || error);
    }
}
