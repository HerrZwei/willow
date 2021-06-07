import { App } from 'vue';

const install = (app: App, com: any) => {
  app?.use(com)
};

export default install;
