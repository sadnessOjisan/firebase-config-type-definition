type PROJECT_NAME = string | "default";
type DEPLOY_TARGET = string;
type SITE_NAME = string;

export type Firebaserc = {
  projects: {
    [name in PROJECT_NAME]: string;
  };
  targets?: {
    [name in PROJECT_NAME]: {
      hosting?: {
        [target in DEPLOY_TARGET]: SITE_NAME[];
      };
    };
  };
};
