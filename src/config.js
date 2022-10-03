import {config}from 'dotenv'

config()

export const PORT = process.env.PORT || 3000
export const DB_PORT = process.env.DB_PORT || 7871
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'jYzokYkDqeLKu2r9FyX1'
export const DB_DATABASE = process.env.DB_DATABASE || 'railway'
export const DB_HOST = process.env.DB_HOST || 'containers-us-west-61.railway.app'
