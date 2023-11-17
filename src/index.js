const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

console.log('test')
const image = new Image();
image.src = 'gambar-hd.jpg';

image.onload = function() {
  context.drawImage(image, 0, 0, 1920, 1080); // Sesuaikan ukuran sesuai kebutuhan
};
