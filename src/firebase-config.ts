export type FirebaseConfig = {
  hosting?: {
    public: string;
    ignore: string[];
  };
  firestore?: {
    rules: string;
    indexes: string;
  };
  functions?: {
    predeploy: string[];
  };
};
