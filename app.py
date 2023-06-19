from flask import Flask, request, jsonify, render_template

app = Flask(__name__)
received_data = None
received_data2 = None
latest_data = {}

# Define a route to get the temperature data
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data/', methods=['POST', 'GET'])
def data(): 
    global latest_data
    if  request.method == 'GET':
        sorted_data = [latest_data[str(i)] for i in sorted(latest_data, key=int)]
        return jsonify(sorted_data)
    else:
        json_data = request.get_json()
        channel = str(json_data['CHANNEL'])
        value = str(json_data['VALUE'])
        latest_data[channel] = {'CHANNEL': channel, 'VALUE': value}
        return 'Success'
@app.route('/dodata', methods=['GET', 'POST'])
def handle_requests():
    global received_data  # Use a global variable to store received data
    if request.method == 'POST':
        received_data = request.get_json()
        return jsonify({'status': 'Data received successfully'})
    elif request.method == 'GET':
        if received_data:
            return jsonify(received_data)  # Return the received data as JSON
        else:
            return jsonify({'status': 'No data received'})

@app.route('/aodata', methods=['GET', 'POST'])
def handle_aodata():
    global received_data2
    if request.method == 'POST':
        received_data2 = request.get_json()
        return jsonify({'status': 'Data received successfully'})
    elif request.method == 'GET':
        if received_data2:
            return jsonify(received_data2)
        else:
            return jsonify({'status': 'No data received'})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=False, host="0.0.0.0", port=120)


