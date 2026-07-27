import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parser middleware
  app.use(express.json());

  // API endpoints
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'online',
      store: 'missingadil.store',
      version: '1.0.0',
      timestamp: new Date().toISOString()
    });
  });

  // Handle order inquiry submission API route
  app.post('/api/order-inquiry', (req, res) => {
    const { productName, plan, accountType, name, contact, notes } = req.body || {};
    if (!productName || !contact) {
      res.status(400).json({ error: 'Product name and contact information are required.' });
      return;
    }
    
    // Simulate order log or notification
    console.log(`[MissingAdil Store] New Order Inquiry for ${productName} (${plan} - ${accountType}) from ${name} (${contact})`);
    
    res.json({
      success: true,
      message: 'Order inquiry logged successfully. Connecting to WhatsApp...',
      orderId: 'MAS-' + Math.floor(100000 + Math.random() * 900000)
    });
  });

  // Serve pretty routes without .html extension in Express
  const htmlPages = [
    'products',
    'product-detail',
    'articles',
    'article-detail',
    'about',
    'terms',
    'privacy',
    'contact'
  ];

  htmlPages.forEach((page) => {
    app.get(`/${page}`, (_req, res) => {
      res.sendFile(path.join(process.cwd(), `${page}.html`));
    });
  });

  // Vite middleware in development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'mpa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 MissingAdil Store running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
