from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
import os
from PIL import Image

app = Flask(__name__)

# Load pre-trained model
model = load_model('my_model.keras')

# Define disease explanations
disease_explanations = {
    "actinic keratosis": "Actinic keratosis (AK) is a rough, scaly patch on sun-exposed skin, primarily caused by long-term sun exposure, which can develop into squamous cell carcinoma if left untreated.",
    "basal cell carcinoma": "Basal cell carcinoma is the most common form of skin cancer, characterized by a pearly or waxy bump due to excessive sun exposure.",
    "dermatofibroma": "Dermatofibromas are benign nodules that often appear after minor skin injuries, typically firm and brownish in color.",
    "melanoma": "Melanoma is a serious form of skin cancer that arises from melanocytes, often appearing as a new mole or a change in an existing mole, caused by excessive sun exposure.",
    "nevus": "A nevus, or mole, is a benign growth on the skin formed by clusters of pigment-producing cells, often caused by a combination of genetic factors and sun exposure.",
    "pigmented benign keratosis": "Seborrheic keratosis is a non-cancerous, wart-like growth that can appear in various colors and is often hereditary.",
    "squamous cell carcinoma": "Squamous cell carcinoma is characterized by red, scaly patches or open sores, primarily caused by prolonged sun exposure.",
    "vascular lesion": "Vascular lesions are abnormal growths of blood vessels, which can appear as red, purple, or blue marks on the skin, sometimes congenital."
    
}

# Prepare image for model
def prepare_image(img_path):
    img = Image.open(img_path).resize((224, 224))  # Resize to match input size
    img = np.array(img) / 255.0  # Normalize
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    return img

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    # Save uploaded image
    upload_dir = "uploads"
    os.makedirs(upload_dir, exist_ok=True)
    img_file = request.files['image']
    img_path = os.path.join(upload_dir, img_file.filename)
    img_file.save(img_path)

    try:
        img = prepare_image(img_path)
        prediction = model.predict(img)
        predicted_class = np.argmax(prediction, axis=1)[0]
        disease_list = list(disease_explanations.keys())
        predicted_disease = disease_list[predicted_class]
        explanation = disease_explanations[predicted_disease]
        os.remove(img_path)  # Clean up
        return jsonify({"prediction": predicted_disease, "explanation": explanation})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
