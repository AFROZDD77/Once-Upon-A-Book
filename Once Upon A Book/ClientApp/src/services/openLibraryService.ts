import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class OpenLibraryService {
    private httpClient: HttpClient;
    constructor(private readonly handler: HttpBackend) {
        this.httpClient = new HttpClient(handler);
    }

    gethorrorBooks() {
        return this.httpClient.get('https://openlibrary.org/search.json?title=the+lord+of+the+rings&limit=5&offset=0&fields=subject,title,cover_i,first_publish_year,ratings_average,ratings_count,number_of_pages_median');
    }
}