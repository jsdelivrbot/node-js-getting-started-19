module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.use(function(req, res, next) {
	  next();
	});
	app.get('/', function(req, res) {
		//res.sendfile('./public/index.html');
		res.send('API Loads here');
	});

	/*Client*/
	var client = require('./middleware/client');
	app.post('/api/clients', client.getAllClients);
	app.post('/api/getXML', client.getJSONTOXML);
	app.post('/api/getBeautifyXMLFromJSON', client.getBeautifyXMLFromJSON);
	app.post('/api/getBulkifiedBeautifyXMLFromJSON', client.getBulkifiedBeautifyXMLFromJSON);
	app.post('/api/getBulkified_COBJECT_DESCRIBE', client.getBulkified_COBJECT_DESCRIBE);
	app.post('/api/doImportAPICall', client.doImportAPICall);
	app.post('/api/doReprice', client.doReprice);
	

	
	
};