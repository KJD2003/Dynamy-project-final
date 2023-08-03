export interface Item {
    id: string;
    title: string;
    duration: string;
    rating: number;
    img: string;
    sottocategorie: Array<string>
  };
  
  export interface ItemDetail extends Item {
    category: string;
    plot: string;
    releaseYear: string;
    imgDetail: string;
    comments: Array<{ username: string, text: string }>
  };
  