import app  from './config/server';

const PORT = process.env.API_PORT;


app.get('/', (req, res) => {
	res.send('Hello World, route test project configured!');
});


app.listen(PORT, () => console.log(`

🚀🚀 Server running on port ${PORT} 🚀🚀🚀
  🔗 https://localhost:${PORT}/

`));