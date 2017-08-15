import app from './src/app';
import { port } from './src/config';

app.listen(port);

console.info(`app listen on port ${port}`);
