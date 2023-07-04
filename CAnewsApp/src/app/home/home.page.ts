import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  newsArticles: any[] = [];

  constructor(private http: HttpClient) {}

  ionViewDidEnter() {
    this.loadNews();
  }

  loadNews() {
    const apiKey = '7a447fa1d8574f129a726982d202fa90';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then((response: any) => {
        const articles = response.data.articles;
        this.newsArticles = articles.slice(0, 10); // Limit the number of articles to 10
      })
      .catch((error: any) => {
        console.error('API Call error:', error);
      });
  }

  getArticleDetails(article: any) {
    // Make an API call to retrieve detailed article information
  }

  refreshNews(event: any) {
    this.loadNews();
    event.target.complete();
  }
}