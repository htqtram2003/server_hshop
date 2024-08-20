
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

mongoose.connect('mongodb://localhost:27017/hshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const classes = [
  [
    {
        "id": "66bb282a28b713d48a5eeea6",
        "sessions": ["66b0431fb780a15cd82331ee", "66b04322b780a15cd8233208", "66b04332b780a15cd823321f"],
        "students": [],
        "teachers": [
            {
                "id": "66ac7d844eb45240b8d48d0d",
                "name": "teacher",
                "email": "teacher@gmail.com"
            }
        ],
        "class_status": "ACTIVE",
        "class_name": "class business COPY COPY COPY",
        "class_code": "business-01 COPY COPY COPY",
        "class_note": "",
        "class_type": "EXTERNAL",
        "course": "66b04305b780a15cd82331a4",
        "campus": {
            "id": "66b98288614030acb18d9449",
            "campus_status": "ACTIVE",
            "is_active": true,
            "campus_code": "San 2",
            "campus_name": "SANA",
            "campus_cluster": "SANA",
            "campus_address": "Thu Duc",
            "createdAt": "2024-08-12T03:33:28.385Z",
            "updatedAt": "2024-08-12T03:33:28.385Z",
            "campus_slug": "sana-0001"
        },
        "class_location": "Thu Duc",
        "number_student": 4,
        "start_date": "2024-07-03",
        "end_date": "2024-08-03",
        "calendar_config": {
            "rank": ["Thứ Hai", "Thứ Tư"],
            "time_start": "18:30",
            "time_end": "19:30"
        },
        "author": "66ac5d59f4536a3d3eb8873e",
        "created": 1723541546790,
        "updated": 1723542382120,
        "normalized_class_name": "class business copy copy copy",
        "class_slug": "class-business-copy-copy-copy-0004",
        "course_level": {
            "id": "66ac81764eb45240b8d4912e",
            "course_level_title": "Cơ bản",
            "course_level_slug": "co-ban",
            "course_level_description": "",
            "created": 1722581366047,
            "updated": 1722581366047
        },
        "course_price": 2000000,
        "course_discount": 0,
        "number_student_in_class": 0,
        "number_student_register_class": 0
    },
    {
        "id": "66bb282828b713d48a5eee8b",
        "sessions": ["66b0431fb780a15cd82331ee", "66b04322b780a15cd8233208", "66b04332b780a15cd823321f"],
        "students": [],
        "teachers": [
            {
                "id": "66ac7d844eb45240b8d48d0d",
                "name": "teacher",
                "email": "teacher@gmail.com"
            }
        ],
        "class_status": "ACTIVE",
        "class_name": "class business COPY COPY COPY",
        "class_code": "business-01 COPY COPY COPY",
        "class_note": "",
        "class_type": "",
        "course": "66b04305b780a15cd82331a4",
        "campus": {
            "id": "66b98288614030acb18d9449",
            "campus_status": "ACTIVE",
            "is_active": true,
            "campus_code": "San 2",
            "campus_name": "SANA",
            "campus_cluster": "SANA",
            "campus_address": "Thu Duc",
            "createdAt": "2024-08-12T03:33:28.385Z",
            "updatedAt": "2024-08-12T03:33:28.385Z",
            "campus_slug": "sana-0001"
        },
        "class_location": "Thu Duc",
        "number_student": 4,
        "start_date": "2024-07-03",
        "end_date": "2024-08-03",
        "calendar_config": {
            "rank": ["Thứ Hai", "Thứ Tư"],
            "time_start": "18:30",
            "time_end": "19:30"
        },
        "author": "66ac5d59f4536a3d3eb8873e",
        "created": 1723541544291,
        "updated": 1723541544291,
        "normalized_class_name": "class business copy copy copy",
        "class_slug": "class-business-copy-copy-copy-0003",
        "course_level": {
            "id": "66ac81764eb45240b8d4912e",
            "course_level_title": "Cơ bản",
            "course_level_slug": "co-ban",
            "course_level_description": "",
            "created": 1722581366047,
            "updated": 1722581366047
        },
        "course_price": 2000000,
        "course_discount": 0,
        "number_student_in_class": 0,
        "number_student_register_class": 0
    },
    {
        "id": "66bb282428b713d48a5eee68",
        "sessions": ["66b0431fb780a15cd82331ee", "66b04322b780a15cd8233208", "66b04332b780a15cd823321f"],
        "students": [],
        "teachers": [
            {
                "id": "66ac7d844eb45240b8d48d0d",
                "name": "teacher",
                "email": "teacher@gmail.com"
            }
        ],
        "class_status": "ACTIVE",
        "class_name": "class business COPY COPY COPY",
        "class_code": "business-01 COPY COPY COPY",
        "class_note": "",
        "class_type": "",
        "course": "66b04305b780a15cd82331a4",
        "campus": {
            "id": "66b98288614030acb18d9449",
            "campus_status": "ACTIVE",
            "is_active": true,
            "campus_code": "San 2",
            "campus_name": "SANA",
            "campus_cluster": "SANA",
            "campus_address": "Thu Duc",
            "createdAt": "2024-08-12T03:33:28.385Z",
            "updatedAt": "2024-08-12T03:33:28.385Z",
            "campus_slug": "sana-0001"
        },
        "class_location": "Thu Duc",
        "number_student": 4,
        "start_date": "2024-07-03",
        "end_date": "2024-08-03",
        "calendar_config": {
            "rank": ["Thứ Hai", "Thứ Tư"],
            "time_start": "18:30",
            "time_end": "19:30"
        },
        "author": "66ac5d59f4536a3d3eb8873e",
        "created": 1723541540035,
        "updated": 1723541540035,
        "normalized_class_name": "class business copy copy copy",
        "class_slug": "class-business-copy-copy-copy-0002",
        "course_level": {
            "id": "66ac81764eb45240b8d4912e",
            "course_level_title": "Cơ bản",
            "course_level_slug": "co-ban",
            "course_level_description": "",
            "created": 1722581366047,
            "updated": 1722581366047
        },
        "course_price": 2000000,
        "course_discount": 0,
        "number_student_in_class": 0,
        "number_student_register_class": 0
    },
    {
        "id": "66bb282128b713d48a5eee4d",
        "sessions": ["66b0431fb780a15cd82331ee", "66b04322b780a15cd8233208", "66b04332b780a15cd823321f"],
        "students": [],
        "teachers": [
            {
                "id": "66ac7d844eb45240b8d48d0d",
                "name": "teacher",
                "email": "teacher@gmail.com"
            }
        ],
        "class_status": "ACTIVE",
        "class_name": "class business COPY COPY COPY",
        "class_code": "business-01 COPY COPY COPY",
        "class_note": "",
        "class_type": "",
        "course": "66b04305b780a15cd82331a4",
        "campus": {
            "id": "66b98288614030acb18d9449",
            "campus_status": "ACTIVE",
            "is_active": true,
            "campus_code": "San 2",
            "campus_name": "SANA",
            "campus_cluster": "SANA",
            "campus_address": "Thu Duc",
            "createdAt": "2024-08-12T03:33:28.385Z",
            "updatedAt": "2024-08-12T03:33:28.385Z",
            "campus_slug": "sana-0001"
        },
        "class_location": "Thu Duc",
        "number_student": 4,
        "start_date": "2024-07-03",
        "end_date": "2024-08-03",
        "calendar_config": {
            "rank": ["Thứ Hai", "Thứ Tư"],
            "time_start": "18:30",
            "time_end": "19:30"
        },
        "author": "66ac5d59f4536a3d3eb8873e",
        "created": 1723541534846,
        "updated": 1723541534846,
        "normalized_class_name": "class business copy copy copy",
        "class_slug": "class-business-copy-copy-copy-0001",
        "course_level": {
            "id": "66ac81764eb45240b8d4912e",
            "course_level_title": "Cơ bản",
            "course_level_slug": "co-ban",
            "course_level_description": "",
            "created": 1722581366047,
            "updated": 1722581366047
        },
        "course_price": 2000000,
        "course_discount": 0,
        "number_student_in_class": 0,
        "number_student_register_class": 0
    }
]
]

const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
  image: String,
}));

const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
}));

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

app.get('/api/products/hot', async (req, res) => {
  try {
    const hotProducts = await Product.find({ isHot: true }); 
    res.json(hotProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/sale-products', async (req, res) => {
  try{
  const saleProducts = await Product.find({ salePrice:Number }); 
    res.json(saleProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.get('/api/classes', (req, res) => {
  try {
    res.json(classes);
  } catch (error) {
    console.error('Error fetching classes:', error);
    res.status(500).json({ error: 'Failed to fetch classes' });
  }
});

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
