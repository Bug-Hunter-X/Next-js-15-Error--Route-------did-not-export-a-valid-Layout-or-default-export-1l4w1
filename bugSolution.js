```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is a sample app.</p>
    </div>
  );
}

// pages/index.js (Alternative with Layout)

import { DefaultLayout } from '../components/Layout';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is a sample app.</p>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
}
```