import express from 'express';
import { adminAuth } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';
import pool from '../db.js';

const router = express.Router();

// Products
router.get('/products', adminAuth, async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const offset = (page - 1) * limit;

    const products = await pool.query(
      `SELECT * FROM products 
       WHERE name ILIKE $1 
       ORDER BY created_at DESC 
       LIMIT $2 OFFSET $3`,
      [`%${search}%`, limit, offset]
    );

    const total = await pool.query(
      'SELECT COUNT(*) FROM products WHERE name ILIKE $1',
      [`%${search}%`]
    );

    res.json({
      products: products.rows,
      total: parseInt(total.rows[0].count),
      pages: Math.ceil(total.rows[0].count / limit)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/products', adminAuth, upload.single('image'), async (req, res) => {
  try {
    const { name, category, price } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`;

    const newProduct = await pool.query(
      'INSERT INTO products (name, category, price, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, category, price, imageUrl]
    );

    res.json(newProduct.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Similar routes for collections and banners(parth)

export default router;