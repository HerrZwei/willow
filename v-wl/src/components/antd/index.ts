import components from './config';
import { App } from 'vue';
import app from '@/main';
import { Layout } from 'ant-design-vue';
import 'ant-design-vue/lib/'

const install = (app: App, com: any) => {
  console.log(app);
  
  app?.use(com)
};

Object.values(components).map(com => install(app, com));

app.use(Layout)