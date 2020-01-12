export class Article {

    id: number;
    title: string;
    content: string;
    shortDecr: string;
    img: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, title: string, content: string, shortDecr: string, img: number, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.shortDecr = shortDecr;
        this.img = img;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
