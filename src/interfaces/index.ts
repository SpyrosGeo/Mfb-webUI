export interface WishlistItem {
  id: string;
  name: string;
  url: string;
  quantity: number;
  isPurchased: boolean;
}

export interface Branch {
  id: string;
  branch: string;
  ticketUrl: string;
  createdAt: Date;
}

export interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}
export interface LoginResponse {
  record: LoginRecord;
  token: string;
}

export interface LoginRecord {
  id: string;
  username: string;
  email: string;
  verified: boolean;
  emailVisibility: boolean;
  created: string;
  updated: string;
  collectionsAuth: any[];
}
