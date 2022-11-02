const http = require('http');
const hostname = 'localhost';
const port = 3000;
var qs = require('querystring');
var day_string = '';
var page = (day_in_week) => `<html>
                            <body>
                                <form method="POST" action="">
                                <label> Name: <\label> 
                                    <input type="text" name="int_input" />
                                    <input type="submit" value="Submit" />
                                </form>
                                <p>${day_in_week}<\p>
                                <p> Hello Cloud Computing Class! <\p>
                            </body>
                            </html>`;
const server = http.createServer((req, res) => {
    var form_data = ''
    if (req.method == 'POST') {
        console.log('POST');
        req.on('data', (data) => {
            form_data += data;
            console.log('Data: ' + form_data);
            var post = qs.parse(form_data);
            console.log(post.int_input);
            var int_num = parseInt(post.int_input);
            var diw = int_num%7;

            switch (diw){
                case 1:
                    day_string = "The day is Sunday";
                    break;
                case 2:
                    day_string = "The day is Monday";
                    break;
                case 3:
                    day_string = "The day is Tuesday";
                    break;
                case 4:
                    day_string = "The day is Wednesday";
                    break;
                case 5:
                    day_string = "The day is Thursday";
                    break;
                case 6:
                    day_string = "The day is Friday";
                    break;
                case 0:
                    day_string = "The day is Saturday";
                    break;
                default:
                    day_string = "Unknown the input";
                    break;
            }
        });
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'html');
    res.end(page(day_string));
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});