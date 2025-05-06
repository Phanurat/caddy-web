# ใช้ Node.js 20 บน Alpine Linux
FROM node:20-alpine

# ตั้งค่า working directory ในคอนเทนเนอร์
WORKDIR /app

# คัดลอกไฟล์ app.js ไปยังคอนเทนเนอร์
COPY app.js .

# รันแอปด้วย node
CMD ["node", "app.js"]
