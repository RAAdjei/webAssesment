export interface UserAccount {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdDateTime: string;
  }
  
  export interface Tag {
    id: number;
    label: string;
    description: string;
  }
  
  export interface BlogPost {
    id: number;
    title: string;
    body: string;
    createdDateTime: string;
    userAccount: UserAccount;
    tags: Tag[];
  }