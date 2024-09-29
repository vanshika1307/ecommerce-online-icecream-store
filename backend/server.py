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
    "what is your name": "I am your friendly chatbot Frozzy!",
    "how are you": "I'm just a bunch of code, but I'm here to help you!",
    "what is frozen-bites": "Frozen-Bites is a premium ice cream shop offering a variety of delicious flavors.",
    "where are you located": "We are located at Bandra, Mumbai. Come visit us for a delightful treat!",
    "what are your opening hours": "We are open from 10 AM to 10 PM, Monday to Sunday.",
    "what flavors do you offer": "We offer a range of flavors including Vanilla Dream, Chocolate Bliss, Strawberry Sensation, Mint Chip Madness, Cookies & Cream Delight, and Salted Caramel Swirl.",
    "do you have vegan options": "Yes, we have vegan options available. Please check our menu for more details.",
    "can i customize my ice cream": "Absolutely! You can customize your ice cream with a variety of toppings and mix-ins.",
    "what toppings do you have": "We have a wide range of toppings including sprinkles, chocolate chips, nuts, fruits, and more.",
    "can i mix flavors": "Yes, you can mix and match any flavors you like to create your perfect ice cream.",
    "do you offer special cones": "Yes, we offer waffle cones, chocolate-dipped cones, and more. You can choose your favorite!",
    "can i add sauces": "Of course! We have chocolate sauce, caramel sauce, strawberry sauce, and more to top off your ice cream.",
    "how can i place an order": "You can place an order through our website by adding items to your cart and proceeding to checkout.",
    "what payment methods do you accept": "We accept all major credit cards including Visa, MasterCard, and American Express.",
    "is my payment information secure": "Yes, we use secure payment gateways to ensure your payment information is safe.",
    "do you offer delivery": "Yes, we offer delivery within a 10-mile radius of our shop. Delivery charges may apply.",
    "can i pick up my order": "Yes, you can choose the pickup option at checkout and collect your order from our shop.",
    "default": "I'm sorry, I didn't understand what you asked",
}

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('text').lower()
    response_text = predefined_responses.get(user_input, predefined_responses["default"])
    return jsonify({'reply': response_text})

if __name__ == '__main__':
    app.run(port=5000)