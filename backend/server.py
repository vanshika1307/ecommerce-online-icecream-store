from flask import Flask, request, jsonify
from flask_cors import CORS
from fuzzywuzzy import process

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('text', '').lower()

    # Initialize the response variable
    response_text = "I'm sorry, I didn't understand what you asked."

    # Check for keywords and respond accordingly
    if "hello" in user_input:
        response_text = "Hi there! How can I help you today?"
    elif "what is your name" in user_input:
        response_text = "I am your friendly chatbot Frozzy!"
    elif "how are you" in user_input:
        response_text = "I'm just a bunch of code, but I'm here to help you!"
    elif "what is frozen-bites" in user_input:
        response_text = "Frozen-Bites is a premium ice cream shop offering a variety of delicious flavors."
    elif "where are you located" in user_input:
        response_text = "We are located at Bandra, Mumbai. Come visit us for a delightful treat!"
    elif "what are your opening hours" in user_input:
        response_text = "We are open from 10 AM to 10 PM, Monday to Sunday."
    elif "what flavors do you offer" in user_input:
        response_text = "We offer a range of flavors including Vanilla Dream, Chocolate Bliss, Strawberry Sensation, Mint Chip Madness, Cookies & Cream Delight, and Salted Caramel Swirl."
    elif "do you have vegan options" in user_input:
        response_text = "Yes, we have vegan options available. Please check our menu for more details."
    elif "can i customize my ice cream" in user_input:
        response_text = "Absolutely! You can customize your ice cream with a variety of toppings and mix-ins."
    elif "what toppings do you have" in user_input:
        response_text = "We have a wide range of toppings including sprinkles, chocolate chips, nuts, fruits, and more."
    elif "can i mix flavors" in user_input:
        response_text = "Yes, you can mix and match any flavors you like to create your perfect ice cream."
    elif "do you offer special cones" in user_input:
        response_text = "Yes, we offer waffle cones, chocolate-dipped cones, and more. You can choose your favorite!"
    elif "can i add sauces" in user_input:
        response_text = "Of course! We have chocolate sauce, caramel sauce, strawberry sauce, and more to top off your ice cream."
    elif "how can i place an order" in user_input:
        response_text = "You can place an order through our website by adding items to your cart and proceeding to checkout."
    elif "what payment methods do you accept" in user_input:
        response_text = "We accept all major credit cards including Visa, MasterCard, and American Express."
    elif "is my payment information secure" in user_input:
        response_text = "Yes, we use secure payment gateways to ensure your payment information is safe."
    elif "do you offer delivery" in user_input:
        response_text = "Yes, we offer delivery within a 10-mile radius of our shop. Delivery charges may apply."
    elif "can i pick up my order" in user_input:
        response_text = "Yes, you can choose the pickup option at checkout and collect your order from our shop."

    return jsonify({'reply': response_text})

if __name__ == '__main__':
    app.run(port=5000)
