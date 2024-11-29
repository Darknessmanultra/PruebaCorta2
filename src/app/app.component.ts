import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Character } from './Interfaces/character.interface';
import { PC2Service } from './Services/pc2.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pc2';
  characters: Character[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  searchQuery: string = '';

  constructor(private service: PC2Service) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.service.getCharacters(this.currentPage, this.searchQuery)
      .subscribe(response => {
        this.characters = response.results;
        this.totalPages = response.info.pages;
      });
  }

  searchCharacters(): void {
    this.currentPage = 1;
    this.loadCharacters();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }
}
