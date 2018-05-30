import https from 'https';
import http from 'http';

import { network as networkConfig } from '../../config';

export default function listen(handler){
  const { https: httpsConfig, port, host } = networkConfig;
  let server;
  if(httpsConfig){
    server = https.createServer(httpsConfig, handler);
  }else{
    server = http.createServer(handler);
  }
  server.listen(port, host, () => {
    console.log(`listening on port ${port}`);
  });
}
