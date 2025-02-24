export interface NFT {
 id: string;
 stakeId: string;
 image: string;
 price: {
  amount: number;
  currency: string;
 };
 profileImage?: string;
}

export interface Collection {
 id: string;
 rank: number;
 name: string;
 image: string;
 price: {
  amount: string;
  currency: string;
 };
 change: {
  value: string;
  isPositive: boolean;
 };
}
