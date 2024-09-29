from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load pre-trained model and tokenizer
chatbot = pipeline('text-generation', model='microsoft/DialoGPT-medium')

# Predefined set of questions and answers
predefined_responses = {
    "hello": "Hi there! How can I help you today?",
    "what is your name": "I am your friendly chatbot!",
    "how are you": "I'm just a bunch of code, but I'm here to help you!",
    "what is frozen-bites": "Frozen-Bites is a premium ice cream shop offering a variety of delicious flavors.",
    "default": "I'm sorry, I didn't understand that. Can you please rephrase?"
}

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('text').lower()
    response_text = predefined_responses.get(user_input, predefined_responses["default"])
    return jsonify({'reply': response_text})

if __name__ == '__main__':
    app.run(port=5000)